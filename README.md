<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1IpI0b5EX17cDlF1Tl0FPgbdF5S1FSusH

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to production (www + api)

For **www.waxadvertisingagency.com** and the audit/contact features, see **[DEPLOY.md](DEPLOY.md)** for step-by-step Vercel/Netlify (frontend) and Render/Railway (backend), plus DNS.
