# PolyEdge: Your Edge in Polymarket

PolyEdge is an Advanced API service designed for professional traders, Polymarket developers, and data analysts. It provides millisecond-level mempool order streams, "smart money" leaderboards, and deep wallet analytics to give you a definitive edge in prediction markets.

## Core Value Propositions

*   ⚡ **Real-time mempool trade monitoring:** See trades before they settle via SSE.
*   🧠 **Smart trader leaderboards:** Track the "smart money" and copy winning strategies.
*   🛠️ **Advanced & rich data APIs:** Seamlessly integrate Polymarket data into your bots or dashboards.

## Repository Structure

Explore the directories below to get started with the PolyEdge API:

*   📚 **[API Documentation](./api-docs/)**: Comprehensive guides for all REST endpoints and the real-time SSE stream.
    *   [Analytics Leaderboard](./api-docs/1-analytics-leaderboard.md)
    *   [Trader Profile](./api-docs/2-trader-profile.md)
    *   [Trader Markets](./api-docs/3-trader-markets.md)
    *   [Trader Market Orders](./api-docs/4-trader-market-orders.md)
    *   [Market Detail](./api-docs/5-market-detail.md)
    *   [Real-time Stream Orders](./api-docs/6-stream-orders.md)
    *   [Trader Hourly Stats](./api-docs/7-trader-hourly-stats.md)
*   💻 **[SDK Examples](./examples/)**: Official, production-ready example implementations demonstrating how to interact with the API and parse the highly-optimized compact data formats.
    *   [Node.js SDK & Examples](./examples/nodejs/)
    *   [Python SDK & Examples](./examples/python/)

## Getting Started

To begin integrating, check out the **[SDK Examples](./examples/)** directory for your preferred language, or dive straight into the **[API Docs](./api-docs/)** to understand the raw HTTP endpoints. 

*(Note: An API key is required to access the endpoints. Visit [polyedge.dev](https://polyedge.dev) to obtain your key).*
