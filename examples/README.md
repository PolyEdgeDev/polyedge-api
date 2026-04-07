# PolyEdge API Examples

This directory contains official example implementations for the PolyEdge API in various programming languages. These examples demonstrate how to use the PolyEdge SDKs to interact with the analytics, trader, and market endpoints, as well as how to stream real-time order data.

## Available Examples

- **[Node.js](./nodejs)**: A modern JavaScript implementation using ES modules and `eventsource-client`.
- **[Python](./python)**: A robust Python implementation using `requests` and a lightweight SSE client.

## Key Features Demonstrated

1.  **Leaderboard Retrieval**: Fetching top traders based on PNL, ROI, and other metrics.
2.  **Trader Profiles**: Accessing detailed performance stats and metadata for specific addresses.
3.  **Market History**: Viewing a trader's activity across different Polymarket events.
4.  **Trader Hourly Stats**: Accessing aggregated hourly performance data (PNL, volume, market count).
5.  **Order Tracking**: Retrieving specific order details for a trader in a given market.
6.  **Real-time Streaming**: Subscribing to the PolyEdge SSE stream for live mempool and on-chain order events.
7.  **Compact Format Parsing**: Examples of how to parse the highly-optimized compact array format into structured JSON objects.

## API Keys

All examples require a valid PolyEdge API Key. You can obtain one by visiting [polyedge.dev](https://polyedge.dev).

---
For specific setup instructions, please refer to the README in each language's directory.
