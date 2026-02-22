# Backend API Setup

This project now includes a backend proxy server for rate limiting and secure API key management.

## Environment Variables

Create or update `.env.local` with:

```bash
# Gemini API Key (required - keep this secret!)
VITE_GEMINI_API_KEY=your-gemini-api-key-here

# Resend API Key (required for contact form - keep this secret!)
RESEND_API_KEY=your-resend-api-key-here

# Optional: Backend server port (default: 3001)
PORT=3001

# Optional: Frontend URL for CORS (default: http://localhost:3000)
FRONTEND_URL=http://localhost:3000
```

## Running the Application

### Option 1: Run Both Servers Together (Recommended)

```bash
npm run dev:all
```

This will start both the backend (port 3001) and frontend (port 3000) simultaneously.

### Option 2: Run Servers Separately

**Terminal 1 - Backend:**
```bash
npm run dev:server
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

## Production (CLI)

To fix the audit (and contact) feature in production, the frontend must call your live backend and the backend must be running with the right env.

### 1. Build frontend with production API URL

Set `VITE_API_URL` to your backend base URL when building (no trailing slash). It is baked into the build. Optional: copy `.env.production.example` to `.env.production.local` and set `VITE_API_URL` there; Vite will load it for `vite build`.

```bash
# Backend: api.waxadvertisingagency.com | Frontend: www.waxadvertisingagency.com
export VITE_API_URL=https://api.waxadvertisingagency.com
npm run build:prod
```

Or in one line:

```bash
VITE_API_URL=https://api.waxadvertisingagency.com npm run build:prod
```

Or use `.env.production.local` (already set for WAX) and run:

```bash
npm run build:prod
```

Then deploy the `dist/` folder to your static host for **www.waxadvertisingagency.com**.

### 2. Run the backend in production

On the host where the API runs, set env and start the server:

```bash
# Required: Gemini key (audit), Resend key (contact). Optional: PORT, FRONTEND_URL
export VITE_GEMINI_API_KEY=your_gemini_key
export GEMINI_API_KEY=your_gemini_key   # alternative
export RESEND_API_KEY=your_resend_key
export FRONTEND_URL=https://www.waxadvertisingagency.com
export PORT=3001

npm run start:server
```

Or use a `.env.local` (or your platform’s env) and run:

```bash
npm run start:server
```

### 3. Checklist

| Step | Command / action |
|------|-------------------|
| Set backend URL for build | `npm run build:prod` (uses `.env.production.local`) or `VITE_API_URL=https://api.waxadvertisingagency.com npm run build:prod` |
| Deploy frontend | Upload `dist/` to host for **www.waxadvertisingagency.com** |
| Set backend env | On **api.waxadvertisingagency.com**: `FRONTEND_URL=https://www.waxadvertisingagency.com`, Gemini key, Resend key |
| Run backend | `npm run start:server` (or your process manager) |

## Rate Limiting

### Audit Endpoint
The audit endpoint is rate-limited to:
- **3 requests per hour per IP address**
- Rate limit resets after 1 hour
- Rate limit information is returned in response headers

### Contact Form Endpoint
The contact form endpoint is rate-limited to:
- **10 requests per hour per IP address**
- Rate limit resets after 1 hour
- Rate limit information is returned in response headers

### Rate Limit Headers

The API returns standard rate limit headers:
- `RateLimit-Limit`: Maximum requests allowed
- `RateLimit-Remaining`: Remaining requests in current window
- `RateLimit-Reset`: Unix timestamp when the limit resets

## API Endpoints

### `POST /api/audit`

Performs a website audit using Gemini AI.

**Request Body:**
```json
{
  "url": "https://example.com",
  "industry": "E-commerce"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "seoScore": 75,
    "majorGaps": ["Missing meta descriptions", "Slow page load"],
    "strategyRecommendation": "Focus on technical SEO...",
    "aiPotential": "High potential for AI integration..."
  }
}
```

**Rate Limit Response (429):**
```json
{
  "error": "Rate limit exceeded",
  "message": "You have exceeded the maximum number of audits allowed. Please try again in 1 hour.",
  "retryAfter": 3600
}
```

### `POST /api/contact`

Handles contact form submissions and sends emails via Resend.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "(214) 555-1234",
  "message": "I'm interested in your SEO services...",
  "planLevel": "10"
}
```

**Note:** `phone` and `planLevel` are optional fields.

**Success Response (200):**
```json
{
  "success": true,
  "message": "Thank you for your message. We will get back to you soon!"
}
```

**Error Response (400):**
```json
{
  "error": "Invalid request",
  "message": "Name is required"
}
```

**Rate Limit Response (429):**
```json
{
  "error": "Rate limit exceeded",
  "message": "Too many contact form submissions. Please try again later.",
  "retryAfter": 3600
}
```

### `GET /health`

Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Email Configuration

The contact form uses [Resend](https://resend.com) for sending emails. To set up:

1. Sign up for a Resend account at https://resend.com
2. Get your API key from the Resend dashboard
3. Add it to `.env.local` as `RESEND_API_KEY`
4. Update the `from` email address in `server/index.js` to use your verified domain (currently uses Resend's default domain)

**Note:** The default `from` address uses `onboarding@resend.dev`. For production, you should:
- Verify your domain in Resend
- Update the `from` field in the contact endpoint to use your verified domain

## Security Notes

- ✅ API keys are stored server-side only (never exposed to frontend)
- ✅ Rate limiting prevents abuse on both audit and contact endpoints
- ✅ Input validation on all requests
- ✅ CORS configured for frontend origin only
- ⚠️ For production, consider:
  - Using a reverse proxy (nginx, Cloudflare)
  - Adding authentication/API keys for clients
  - Using Redis for distributed rate limiting
  - Adding request logging and monitoring
  - Verifying your email domain in Resend
