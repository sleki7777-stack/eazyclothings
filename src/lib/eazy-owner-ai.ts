import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { generateText } from "ai";
import { buildOwnerSystemPrompt } from "@/lib/eazy-owner-control";

export type OwnerChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const MODEL = process.env.EAZY_AI_MODEL || "openai/gpt-5.4";

const openrouter = createOpenAICompatible({
  name: "openrouter",
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  headers: {
    "HTTP-Referer": process.env.EAZY_APP_URL || "https://eazyclothings.vercel.app",
    "X-Title": "EAZY Chief Intelligence",
  },
});

export async function reasonWithOwner(
  messages: OwnerChatMessage[],
  context?: string,
) {
  if (!process.env.OPENROUTER_API_KEY) {
    throw new Error("OPENROUTER_API_KEY is not configured on the server.");
  }

  const result = await generateText({
    model: openrouter.chatModel(MODEL),
    system:
      buildOwnerSystemPrompt() +
      (context ? "\n\nCURRENT HOUSE CONTEXT:\n" + context : ""),
    messages,
  });

  return { text: result.text, model: MODEL };
}
