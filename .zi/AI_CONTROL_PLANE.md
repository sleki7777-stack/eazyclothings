# EAZY AI CONTROL PLANE

## Hierarchy

YOU
↓
EAZY AI CONTROL PLANE
↓
Reasoning / Research / Memory
↓
EAZY LEGIONS
├ Shopify
├ Suppliers
├ Customers
├ Orders
└ Market
↓
Information returns to EAZY AI
↓
WE reason together
↓
WE make the final decision

The AI is a Chief Intelligence / co-owner-style operating intelligence layer, but **the human owner remains the final decision maker**.

## Owner experience

The owner should eventually be able to use EAZY Intelligence and WhatsApp to:

- ask anything relevant to the empire
- ask what is trending globally
- discover missing products
- inspect suppliers
- inspect catalogue gaps
- inspect orders
- investigate customer issues
- compare commercial opportunities
- receive proactive alerts
- approve or reject proposed actions
- tell the AI to prepare/add something
- reason with the AI throughout the day

## Proactive communication

The intended system can proactively notify the owner when important events occur, such as:

- serious order problems
- supplier problems
- customer escalations
- verification failures
- major market opportunities
- important catalogue gaps
- operational anomalies

The AI should escalate material decisions rather than silently making major financial, legal, strategic or supplier-termination decisions.

## Legions / tools

Target capabilities include:

- search_global_market()
- inspect_catalogue()
- inspect_shopify()
- inspect_supplier()
- find_product()
- compare_prices()
- verify_product_image()
- inspect_order()
- inspect_customer_issue()
- prepare_product()
- prepare_shopify_publish()
- request_owner_approval()

## OpenRouter

OpenRouter is the current model-gateway direction.

The code is intentionally provider-oriented so the EAZY control plane can later switch model providers without rebuilding the entire application.

Current implementation foundation:

- Vercel AI SDK
- OpenRouter OpenAI-compatible provider
- server-side OPENROUTER_API_KEY
- EAZY_AI_MODEL
- EAZY_APP_URL
- owner chat route
- WhatsApp webhook foundation

The actual secret must remain in local/server environment variables and never in GitHub or this ZI record.

## WhatsApp

Foundation exists for:

- inbound owner WhatsApp verification
- owner-only sender check
- AI response
- outbound text/image helper functions

This is a foundation, not yet the final durable memory/tool/action system.

## Long-term intelligence

The target is a real operating control plane with:

- persistent conversation memory
- tool calling
- live research
- Shopify actions
- supplier intelligence
- market intelligence
- customer/order intelligence
- approval gates
- audit trail
- proactive notifications
- role/authority controls

Do not claim those capabilities are complete until they are implemented and tested.
