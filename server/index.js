import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';
import { sendContactToTeam, sendContactAutoReply, isResendConfigured } from './emailService.js';

// Load environment variables
dotenv.config({ path: '.env.local' });

const app = express();
const PORT = process.env.PORT || 3001;

// Trust proxy for accurate IP addresses (important for rate limiting)
app.set('trust proxy', 1);

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// Rate limiting configuration
const auditRateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 3, // Limit each IP to 3 requests per windowMs
  message: {
    error: 'Rate limit exceeded',
    message: 'You\'ve unlocked all 3 complimentary audits for this hour. Our intelligence engine needs a brief moment to recalibrate. Return shortly, or connect with us to explore unlimited insights and strategic consultation.',
    retryAfter: 3600 // seconds
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  // Use IP address for rate limiting
  keyGenerator: (req) => {
    return req.ip || req.socket?.remoteAddress || 'unknown';
  },
  // Custom handler for rate limit exceeded
  handler: (req, res) => {
    res.status(429).json({
      error: 'Rate limit exceeded',
      message: 'You\'ve unlocked all 3 complimentary audits for this hour. Our intelligence engine needs a brief moment to recalibrate. Return shortly, or connect with us to explore unlimited insights and strategic consultation.',
      retryAfter: 3600
    });
  }
});

// Contact form rate limiter (more lenient than audit)
const contactRateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 10, // Limit each IP to 10 contact form submissions per hour
  message: {
    error: 'Rate limit exceeded',
    message: 'Too many contact form submissions. Please try again later.',
    retryAfter: 3600
  },
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => {
    return req.ip || req.socket?.remoteAddress || 'unknown';
  },
  handler: (req, res) => {
    res.status(429).json({
      error: 'Rate limit exceeded',
      message: 'Too many contact form submissions. Please try again later.',
      retryAfter: 3600
    });
  }
});

// Health check endpoint (includes email config status for debugging)
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    email: { configured: isResendConfigured() }
  });
});

// Audit endpoint with rate limiting
app.post('/api/audit', auditRateLimiter, async (req, res) => {
  try {
    const { url, industry } = req.body;

    // Validate input
    if (!url || typeof url !== 'string') {
      return res.status(400).json({
        error: 'Invalid request',
        message: 'Website URL is required'
      });
    }

    // Validate URL format
    try {
      new URL(url);
    } catch (e) {
      return res.status(400).json({
        error: 'Invalid request',
        message: 'Please provide a valid URL (e.g., https://example.com)'
      });
    }

    // Check if API key is configured
    const apiKey = process.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
    if (!apiKey) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('Gemini API key not configured');
      }
      return res.status(500).json({
        error: 'Server configuration error',
        message: 'API key not configured. Please contact support.'
      });
    }

    // Initialize Gemini AI
    const ai = new GoogleGenAI({ apiKey });

    // Generate audit content
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Audit this website URL: "${url}" for industry "${industry || 'General'}". Provide a high-end SEO and brand report for WAX ADVERTISING AGENCY. Tone should be professional, insightful, and sales-oriented.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            seoScore: { type: Type.NUMBER, description: 'SEO score from 0-100' },
            majorGaps: { type: Type.ARRAY, items: { type: Type.STRING }, description: 'Array of major SEO and brand gaps identified' },
            strategyRecommendation: { type: Type.STRING, description: 'Strategic recommendation for improvement' },
            aiPotential: { type: Type.STRING, description: 'AI integration potential assessment' }
          },
          required: ["seoScore", "majorGaps", "strategyRecommendation", "aiPotential"]
        }
      }
    });

    // Parse and return response
    const result = JSON.parse(response.text);
    
    res.json({
      success: true,
      data: result
    });

  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Audit error:', error);
    }
    
    // Handle specific Gemini API errors
    if (error.message?.includes('API key')) {
      return res.status(401).json({
        error: 'Authentication failed',
        message: 'Invalid API key. Please contact support.'
      });
    }

    if (error.message?.includes('quota') || error.message?.includes('rate limit')) {
      return res.status(429).json({
        error: 'Service unavailable',
        message: 'AI service is currently at capacity. Please try again later.'
      });
    }

    // Generic error response
    res.status(500).json({
      error: 'Internal server error',
      message: 'An error occurred while processing your audit. Please try again later.'
    });
  }
});

// Contact form endpoint with rate limiting
app.post('/api/contact', contactRateLimiter, async (req, res) => {
  console.log('POST /api/contact received');
  try {
    const { name, email, phone, message, planLevel } = req.body;

    // Validate required fields
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return res.status(400).json({
        error: 'Invalid request',
        message: 'Name is required'
      });
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return res.status(400).json({
        error: 'Invalid request',
        message: 'Valid email address is required'
      });
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({
        error: 'Invalid request',
        message: 'Message is required'
      });
    }

    if (!isResendConfigured()) {
      console.error('Resend API key not configured');
      return res.status(500).json({
        error: 'Server configuration error',
        message: 'Email service not configured. Please contact support.'
      });
    }

    const payload = { name, email, phone, message, planLevel };

    const teamResult = await sendContactToTeam(payload);
    if (teamResult.error) {
      // Log in all envs so Render Logs show the reason (no secrets in Resend error payload)
      console.error('Resend send failed:', typeof teamResult.error === 'object' ? JSON.stringify(teamResult.error) : teamResult.error);
      return res.status(500).json({
        error: 'Email service error',
        message: 'Failed to send email. Please try again later.'
      });
    }

    const autoReplyEnabled = process.env.RESEND_AUTO_REPLY_ENABLED === 'true';
    if (autoReplyEnabled) {
      sendContactAutoReply({ name, email }).catch((err) => {
        if (process.env.NODE_ENV !== 'production') {
          console.error('Auto-reply send failed:', err);
        }
      });
    }

    res.json({
      success: true,
      message: 'Thank you for your message. We will get back to you soon!'
    });

  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Contact form error:', error);
    }
    
    res.status(500).json({
      error: 'Internal server error',
      message: 'An error occurred while processing your message. Please try again later.'
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
  console.log(`📊 Rate limit: 3 requests per hour per IP`);
});
