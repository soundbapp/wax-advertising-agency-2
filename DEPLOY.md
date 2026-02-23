# Deploy WAX to www.waxadvertisingagency.com

Step-by-step to get the site and audit/contact features live.

---

## Overview

| What        | URL                             | Host (suggested) |
|------------|----------------------------------|------------------|
| Frontend   | https://www.waxadvertisingagency.com | Vercel (already set up) |
| Backend API| https://api.waxadvertisingagency.com  | **Render** (free tier) |

---

## Part 1: Deploy frontend (www)

### Option A – Vercel

1. Go to [vercel.com](https://vercel.com) and sign in. Import your Git repo (GitHub/GitLab/Bitbucket).
2. **Project settings** → **Environment Variables**. Add:
   - **Name:** `VITE_API_URL`  
   - **Value:** `https://api.waxadvertisingagency.com`  
   - **Environment:** Production (and Preview if you want).
3. Leave **Build Command** and **Output Directory** as in the repo (`npm run build:prod`, `dist`). Deploy.
4. After deploy, in **Settings → Domains** add `www.waxadvertisingagency.com` (and optionally `waxadvertisingagency.com`). Follow Vercel’s DNS instructions.

### Option B – Netlify

1. Go to [netlify.com](https://netlify.com) and sign in. Add new site → Import from Git.
2. **Site settings** → **Environment variables** → **Add variable**:
   - **Key:** `VITE_API_URL`  
   - **Value:** `https://api.waxadvertisingagency.com`
3. Build command and publish directory are in `netlify.toml` (`npm run build:prod`, `dist`). Deploy.
4. **Domain management** → Add custom domain `www.waxadvertisingagency.com` and follow Netlify’s DNS steps.

---

## Part 2: Deploy backend API on Render (free)

The repo includes a **Blueprint** (`render.yaml`) so Render can create the service from the repo in one go.

1. **Go to [render.com](https://render.com)** and sign in (or create a free account).
2. **New** → **Blueprint**. Connect your **GitHub** (or GitLab) account if needed, then select the **wax-advertising-agency-2** repo. Click **Connect**.
3. Render will read `render.yaml` and show a **wax-api** web service (free tier, Node, build/start commands, domain `api.waxadvertisingagency.com`). Click **Apply**.
4. After the service is created, open it → **Environment** tab. You’ll see **VITE_GEMINI_API_KEY** and **RESEND_API_KEY** marked as “not set” (they use `sync: false` so secrets stay in the dashboard). Add:
   - **VITE_GEMINI_API_KEY** = your [Google AI Studio](https://aistudio.google.com/apikey) API key (for the audit).
   - **RESEND_API_KEY** = your [Resend](https://resend.com) API key (for the contact form).
   - **RESEND_FROM** = `WAX Advertising Agency <noreply@waxadvertisingagency.com>` (use an address on your verified Resend domain so you can send to any recipient).
   Optionally add **RESEND_TO**, **RESEND_AUTO_REPLY_ENABLED** (see `.env.example`). Save. Render will redeploy.
5. **Custom domain:** The Blueprint already adds `api.waxadvertisingagency.com`. In the service → **Settings** → **Custom Domains**, Render will show the **CNAME target** (e.g. `wax-api.onrender.com`). At your domain registrar, add a **CNAME** record: **Name** `api`, **Value** that target. After DNS propagates, Render will issue HTTPS for `api.waxadvertisingagency.com`.

**Free tier note:** The service may spin down after ~15 minutes of no traffic; the first request after that can take 30–60 seconds (cold start).

**Contact form not sending?**  
1. In Render, open **wax-api** → **Logs** (under MONITOR in the left sidebar — not “Events”). Submit the form on the live site, then in Logs look for a line starting with **Resend send failed:**. That line shows Resend’s exact reason (e.g. invalid from, domain not verified, wrong API key).  
2. In Render → **Environment**, confirm **RESEND_FROM** = `WAX Advertising Agency <noreply@waxadvertisingagency.com>` and **RESEND_API_KEY** is from the same Resend account where you verified waxadvertisingagency.com (e.g. “diasporasportstalk”).  
3. On Vercel, ensure **VITE_API_URL** is set (e.g. `https://api.waxadvertisingagency.com` or `https://wax-api-04np.onrender.com`) and that the frontend was **rebuilt** after adding it (env vars are baked in at build time).  
4. In Resend dashboard, open **Logs** (not “Emails”) to see if the API is receiving requests and what status Resend returns.

### Alternative: Railway

1. Go to [railway.app](https://railway.app) and sign in. **New Project** → **Deploy from GitHub** (same repo).
2. Add a **Service**; set **Root Directory** to repo root. In **Settings:**
   - **Build command:** `npm install`
   - **Start command:** `npm run start:server`
3. **Variables** tab → Add the same env vars as in Render (above).
4. **Settings → Networking** → **Generate domain** (e.g. `wax-api.up.railway.app`), or add a **Custom domain** `api.waxadvertisingagency.com` and set the CNAME they give you.

---

## Part 3: DNS

At your domain registrar (where you bought waxadvertisingagency.com):

| Type  | Name | Value / Target |
|-------|------|-----------------|
| CNAME | www  | Vercel or Netlify’s target (e.g. `cname.vercel-dns.com` or Netlify’s) |
| CNAME | api  | Render’s target for **wax-api** (e.g. `wax-api.onrender.com`) |

(If your host uses A records or other records, follow their “custom domain” instructions instead.)

Wait for DNS to propagate (minutes to a few hours). Both hosts usually provide free HTTPS.

---

## Part 4: Verify

1. Open **https://www.waxadvertisingagency.com** – site loads.
2. Use the **Free Optimization Audit** (enter a URL, run test). It should call the API and show results (or a rate-limit message after 3 uses), not “Failed to connect to the server.”
3. Submit the **contact form** once – you should get the Resend email (and auto-reply if enabled).

If the audit still says “Failed to connect to the server,” check:

- `api.waxadvertisingagency.com` resolves and returns JSON for `GET https://api.waxadvertisingagency.com/health`.
- Frontend was built with `VITE_API_URL=https://api.waxadvertisingagency.com` (Vercel/Netlify env var set before the build that’s live).
- Backend has `FRONTEND_URL=https://www.waxadvertisingagency.com` so CORS allows the browser request.

---

## Quick reference

- **Frontend env (build time):** `VITE_API_URL=https://api.waxadvertisingagency.com`
- **Backend env (runtime):** `FRONTEND_URL`, `VITE_GEMINI_API_KEY` or `GEMINI_API_KEY`, `RESEND_API_KEY` (and optional Resend vars).
- **Repro build locally:** `npm run build:prod` (uses `.env.production.local`).
- **Run API locally:** `npm run start:server` (uses `.env.local`).
