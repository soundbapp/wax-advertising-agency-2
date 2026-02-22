/**
 * Resend email service – full suite for WAX Advertising Agency.
 * Uses RESEND_API_KEY, RESEND_FROM, RESEND_TO from .env.local
 */

import { Resend } from 'resend';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM = process.env.RESEND_FROM || 'WAX Advertising Agency <onboarding@resend.dev>';
const TO = process.env.RESEND_TO || 'abba@waxadvertisingagency.com';

let resendClient = null;

function getResend() {
  if (!RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not configured');
  }
  if (!resendClient) {
    resendClient = new Resend(RESEND_API_KEY);
  }
  return resendClient;
}

/**
 * Wraps HTML body in a consistent layout (brand colors, footer).
 */
function wrapHtml(title, bodyHtml) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
</head>
<body style="margin:0; font-family: Arial, sans-serif; background-color: #0a0a0a; color: #e4e4e7;">
  <div style="max-width: 600px; margin: 0 auto; padding: 24px;">
    <div style="margin-bottom: 24px;">
      <span style="color: #ea580c; font-weight: 700; font-size: 12px; letter-spacing: 0.2em;">WAX ADVERTISING AGENCY</span>
    </div>
    ${bodyHtml}
    <hr style="margin: 24px 0; border: none; border-top: 1px solid rgba(255,255,255,0.1);">
    <p style="color: #71717a; font-size: 11px;">This message was sent via WAX Advertising Agency. Reply to the sender address to respond.</p>
  </div>
</body>
</html>`;
}

/**
 * Send contact form submission to the team (internal notification).
 * @param {{ name: string, email: string, phone?: string, message: string, planLevel?: string }} payload
 * @returns {{ success: boolean, error?: object }}
 */
export async function sendContactToTeam(payload) {
  const { name, email, phone, message, planLevel } = payload;
  const resend = getResend();

  const subject = planLevel
    ? `New inquiry – Level ${planLevel} plan`
    : 'New contact form submission';

  const bodyHtml = `
    <h2 style="color: #fafafa; margin-top: 0;">New contact form submission</h2>
    <p><strong style="color: #a1a1aa;">Name:</strong> ${escapeHtml(name)}</p>
    <p><strong style="color: #a1a1aa;">Email:</strong> <a href="mailto:${escapeHtml(email)}" style="color: #ea580c;">${escapeHtml(email)}</a></p>
    ${phone ? `<p><strong style="color: #a1a1aa;">Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
    ${planLevel ? `<p><strong style="color: #a1a1aa;">Interested plan:</strong> Level ${escapeHtml(planLevel)}</p>` : ''}
    <p><strong style="color: #a1a1aa;">Message:</strong></p>
    <div style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 12px; white-space: pre-wrap; color: #d4d4d8;">${escapeHtml(message)}</div>
  `;

  const { data, error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: email,
    subject,
    html: wrapHtml(subject, bodyHtml),
  });

  return { success: !error, data, error };
}

/**
 * Send an auto-reply to the person who submitted the contact form.
 * @param {{ name: string, email: string }} payload
 * @returns {{ success: boolean, error?: object }}
 */
export async function sendContactAutoReply(payload) {
  const { name, email } = payload;
  const resend = getResend();

  const subject = "We received your message – WAX Advertising Agency";
  const firstName = name.trim().split(/\s+/)[0] || name;

  const bodyHtml = `
    <h2 style="color: #fafafa; margin-top: 0;">Thanks for reaching out, ${escapeHtml(firstName)}</h2>
    <p style="color: #a1a1aa; line-height: 1.6;">We've received your message and will get back to you within 1–2 business days.</p>
    <p style="color: #a1a1aa; line-height: 1.6;">In the meantime, feel free to call us at <strong style="color: #fafafa;">214-789-0076</strong> or reply to this email.</p>
    <p style="color: #71717a; margin-top: 24px;">— The WAX Team</p>
  `;

  const { data, error } = await resend.emails.send({
    from: FROM,
    to: email,
    subject,
    html: wrapHtml(subject, bodyHtml),
  });

  return { success: !error, data, error };
}

/**
 * Check if Resend is configured (for health or feature flags).
 */
export function isResendConfigured() {
  return Boolean(RESEND_API_KEY && RESEND_API_KEY.trim());
}

function escapeHtml(text) {
  if (typeof text !== 'string') return '';
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  return text.replace(/[&<>"']/g, (ch) => map[ch]);
}
