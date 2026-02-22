
import { GoogleGenAI, Type } from "@google/genai";

export interface AdConcept {
  headline: string;
  slogan: string;
  narrative: string;
  visualHook: string;
}

export const generateAdConcept = async (brandName: string, industry: string, targetAudience: string): Promise<AdConcept> => {
  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Generate a high-end, sophisticated advertising concept for a brand named "${brandName}" in the ${industry} industry targeting ${targetAudience}. The tone should be similar to WAX Advertising Agency: bold, elegant, and intelligent.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          headline: { type: Type.STRING, description: 'A bold, attention-grabbing headline.' },
          slogan: { type: Type.STRING, description: 'A short, punchy brand slogan.' },
          narrative: { type: Type.STRING, description: 'A 2-3 sentence emotional narrative for a commercial.' },
          visualHook: { type: Type.STRING, description: 'A description of a striking visual image for the ad.' }
        },
        required: ["headline", "slogan", "narrative", "visualHook"]
      }
    }
  });

  try {
    return JSON.parse(response.text);
  } catch (e) {
    throw new Error("Failed to parse AI response");
  }
};
