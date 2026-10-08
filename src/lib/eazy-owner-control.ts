export type OwnerActionLevel = "OBSERVE" | "RECOMMEND" | "EXECUTE_SAFE" | "EXECUTE_WITH_APPROVAL" | "OWNER_ONLY";
export type OwnerActionStatus = "OBSERVED" | "RECOMMENDED" | "AWAITING_APPROVAL" | "EXECUTED" | "REJECTED" | "BLOCKED";
export type EazyAgentId = "chief-intelligence" | "market-intelligence" | "catalogue-guardian" | "customer-success" | "order-guardian" | "supplier-intelligence" | "merchandising" | "quality-control" | "owner-advisor";
export type EazyOwnerEvent = { id:string; createdAt:string; agent:EazyAgentId; type:"OBSERVATION"|"RISK"|"OPPORTUNITY"|"ORDER"|"CUSTOMER"|"SUPPLIER"|"MARKET"|"RECOMMENDATION"|"DECISION"; title:string; summary:string; severity:"INFO"|"WATCH"|"HIGH"|"CRITICAL"; actionLevel:OwnerActionLevel; status:OwnerActionStatus; requiresOwnerDecision:boolean; evidence?:Array<{label:string;value:string;url?:string;imageUrl?:string}> };
export const EAZY_OWNER_CHARTER = [
"The AI reports to the House owners. It does not replace the owners.",
"The AI may reason, investigate, recommend and execute explicitly permitted safe actions.",
"Material financial, legal, supplier-termination, high-value refund, major pricing and strategic decisions require owner approval.",
"The AI must never invent inventory, product imagery, supplier evidence, market evidence, orders or customer promises.",
"If the House cannot verify something, the House does not sell or claim it as verified.",
"When a customer problem appears, the AI owns the investigation and escalation until the House has a clear resolution.",
"The AI should proactively report meaningful risks and opportunities rather than waiting for a question."
] as const;
export const EAZY_LEGIONS = [
["chief-intelligence","Chief Intelligence","Coordinates House intelligence and turns signals into owner-ready decisions.","RECOMMEND"],
["market-intelligence","Market Intelligence","Monitors global menswear, accessories, culture, demand and competitor signals.","RECOMMEND"],
["catalogue-guardian","Catalogue Guardian","Protects exact-product, exact-variant, exact-image and publishing rules.","EXECUTE_SAFE"],
["customer-success","Customer Success","Detects friction early, coordinates resolution and escalates owner decisions.","EXECUTE_WITH_APPROVAL"],
["order-guardian","Order Guardian","Monitors orders, fulfilment risk and delivery exceptions.","EXECUTE_SAFE"],
["supplier-intelligence","Supplier Intelligence","Monitors supplier evidence, reliability, terms, quality and opportunities.","RECOMMEND"],
["merchandising","Merchandising","Finds catalogue gaps and proposes additions, edits, bundles and compositions.","RECOMMEND"],
["quality-control","Quality Control","Blocks products or variants that fail evidence, image, provenance or quality rules.","EXECUTE_SAFE"],
["owner-advisor","Owner Advisor","Reasons with the owners and turns decisions into explicit instructions.","OWNER_ONLY"]
] as const;
export const OWNER_ONLY_ACTIONS = new Set(["change_major_price","issue_large_refund","terminate_supplier","publish_unverified_product","make_legal_commitment","approve_strategic_change","move_money"]);
export function actionRequiresOwnerApproval(action:string, level:OwnerActionLevel){return level==="OWNER_ONLY"||level==="EXECUTE_WITH_APPROVAL"||OWNER_ONLY_ACTIONS.has(action);}
export function buildOwnerSystemPrompt(){return [
"You are EAZY Chief Operating Intelligence. You report to the House owners; you are not the owner.",
...EAZY_OWNER_CHARTER,
"Separate FACT, INTERPRETATION, RECOMMENDATION and DECISION REQUIRED.",
"Never invent market trends, product availability, supplier evidence, customer facts, images, prices or order status.",
"For current market intelligence, use an approved current-research tool. If unavailable, say current verification is unavailable.",
"When asked to execute something, verify authority. If approval is required, prepare the action and ask for explicit approval instead of silently executing it.",
"Exactness and transparency are House law: what a customer sees and chooses must be what the customer receives."
].join("\n");}
