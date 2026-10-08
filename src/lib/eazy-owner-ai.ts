import { generateText } from "ai";
import { buildOwnerSystemPrompt } from "@/lib/eazy-owner-control";
export type OwnerChatMessage={role:"user"|"assistant";content:string};
const MODEL=process.env.EAZY_AI_MODEL||"openai/gpt-5.4";
export async function reasonWithOwner(messages:OwnerChatMessage[],context?:string){
 const result=await generateText({model:MODEL,system:buildOwnerSystemPrompt()+(context?"\n\nCURRENT HOUSE CONTEXT:\n"+context:""),messages});
 return {text:result.text,model:MODEL};
}
