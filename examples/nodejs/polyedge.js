import { createEventSource } from 'eventsource-client';
import parseCompactTx from './parser_compact_tx.js';

class PolyEdgeClient {
    /**
     * PolyEdge API Node.js SDK (V1)
     * @param {string} apiKey - Your PolyEdge API Key
     * @param {string} baseUrl - Base API URL
     */
    constructor(apiKey, baseUrl = "https://api.polyedge.dev/v1") {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
        this.headers = {
            "X-PolyEdge-Key": this.apiKey,
            "Accept": "application/json"
        };
    }

    /**
     * Retrieve the trader leaderboard.
     * @param {Object} [params] - Query parameters
     * @param {number} [params.limit] - Number of results to return (Default: 50, Max: 100).
     * @param {number} [params.offset] - Pagination offset (Default: 0).
     * @param {string} [params.time_frame] - '1H', '4H', '1D', '3D', '7D', '30D' (Default: '30D').
     * @param {string} [params.sort_by] - 'pnl', 'roi', 'win_rate', 'market_count' (Default: 'pnl').
     * @param {string} [params.tag] - Filter by specific market tag (e.g., 'crypto', 'sports').
     * @param {number} [params.min_win_rate] - Minimum win rate (0-100).
     * @param {number} [params.max_win_rate] - Maximum win rate (0-100).
     * @param {number} [params.min_roi] - Minimum ROI percentage.
     * @param {number} [params.max_roi] - Maximum ROI percentage.
     * @param {number} [params.last_active_hours] - Filter traders active in the last N hours.
     * @param {number} [params.min_market_count] - Minimum number of markets traded.
     * @param {number} [params.max_market_count] - Maximum number of markets traded.
     * @returns {Promise<Object>}
     */
    async getLeaderboard(params = {}) {
        const query = new URLSearchParams(params).toString();
        const response = await fetch(`${this.baseUrl}/analytics/leaderboard?${query}`, {
            headers: this.headers
        });
        if (!response.ok) throw new Error(`API Error: ${response.status} ${response.statusText}`);
        return response.json();
    }

    /**
     * Get a trader's detailed profile including tags, stats, and metadata.
     * @param {string} address - The EVM wallet address of the trader.
     * @returns {Promise<Object>}
     */
    async getTraderProfile(address) {
        const response = await fetch(`${this.baseUrl}/traders/${address}`, {
            headers: this.headers
        });
        if (!response.ok) throw new Error(`API Error: ${response.status} ${response.statusText}`);
        return response.json();
    }

    /**
     * Retrieve a trader's trading history aggregated by market.
     * @param {string} address - The EVM wallet address of the trader.
     * @param {Object} [params] - Query parameters
     * @param {number} [params.limit] - Number of markets to return (Default: 20, Max: 100).
     * @param {number} [params.offset] - Pagination offset (Default: 0).
     * @param {boolean} [params.is_active] - Filter by active (unresolved) markets only.
     * @returns {Promise<Object>}
     */
    async getTraderMarkets(address, params = {}) {
        const query = new URLSearchParams(params).toString();
        const response = await fetch(`${this.baseUrl}/traders/${address}/markets?${query}`, {
            headers: this.headers
        });
        if (!response.ok) throw new Error(`API Error: ${response.status} ${response.statusText}`);
        return response.json();
    }

    /**
     * Retrieve a specific trader's order history within a specific market.
     * @param {string} address - The EVM wallet address of the trader.
     * @param {string|number} marketId - The specific market ID.
     * @returns {Promise<Object>}
     */
    async getTraderMarketOrders(address, marketId) {
        const response = await fetch(`${this.baseUrl}/traders/${address}/markets/${marketId}/orders`, {
            headers: this.headers
        });
        if (!response.ok) throw new Error(`API Error: ${response.status} ${response.statusText}`);
        return response.json();
    }

    /**
     * Get hourly aggregated performance data for a specific trader.
     * @param {string} address - The EVM wallet address of the trader.
     * @param {Object} [params] - Query parameters
     * @param {string} [params.tag] - Filter by a specific market tag (e.g., 'crypto', 'politics').
     * @returns {Promise<Object>}
     */
    async getTraderHourlyStats(address, params = {}) {
        const query = new URLSearchParams(params).toString();
        const response = await fetch(`${this.baseUrl}/traders/${address}/hourly_stats?${query}`, {
            headers: this.headers
        });
        if (!response.ok) throw new Error(`API Error: ${response.status} ${response.statusText}`);
        return response.json();
    }

    /**
     * Retrieve detailed information about a specific market.
     * @param {string|number} marketId - The unique numeric ID of the market.
     * @returns {Promise<Object>}
     */
    async getMarketDetail(marketId) {
        const response = await fetch(`${this.baseUrl}/markets/${marketId}`, {
            headers: this.headers
        });
        if (!response.ok) throw new Error(`API Error: ${response.status} ${response.statusText}`);
        return response.json();
    }

    /**
     * Subscribe to live mempool orders via SSE.
     * Returns an Async Iterable that yields parsed order objects.
     * 
     * @param {Object} [params] - Query parameters for filtering the stream.
     * @param {string} [params.traders] - Comma-separated list of trader addresses.
     * @param {string} [params.tags] - Comma-separated list of market tags.
     * @param {string} [params.series] - Comma-separated list of series slugs.
     * @param {number} [params.min_usdc] - Minimum USDC amount.
     * @param {number} [params.max_usdc] - Maximum USDC amount.
     * @param {number} [params.min_shares] - Minimum Shares amount.
     * @param {number} [params.max_shares] - Maximum Shares amount.
     * @param {number} [params.min_price] - Minimum Price (0 to 100).
     * @param {number} [params.max_price] - Maximum Price (0 to 100).
     * @param {string} [params.format] - Output format (leave empty for compact optimized arrays).
     * @returns {AsyncGenerator<Object, void, unknown>}
     */
    async *streamOrders(params = {}) {
        // Remove undefined keys from params object safely
        const cleanParams = Object.fromEntries(
            Object.entries(params).filter(([_, v]) => v !== undefined)
        );
        const query = new URLSearchParams(cleanParams);

        const url = `${this.baseUrl}/stream/orders?${query.toString()}`;
        
        let es;
        let streamError = null;

        // eventsource-client natively supports fetch overrides, auto-reconnect, and async iterators
        es = createEventSource({
            url,
            headers: this.headers,
            method: 'GET',
            fetch: async (fetchUrl, init) => {
                const response = await fetch(fetchUrl, init);
                if (response.status === 401) {
                    streamError = new Error(`API Error: ${response.status} ${response.statusText}`);
                    es.close();
                    throw streamError;
                }
                return response;
            }
        });

        try {
            for await (const { event, data } of es) {
                if (streamError) throw streamError;
                // PolyEdge API sends events tagged as 'order'
                if ((event === 'order' || !event) && data) {
                    try {
                        const parsedData = JSON.parse(data);
                        // If format is json, the data is already structured; else use compact parser
                        if (params.format === 'json') {
                            yield parsedData;
                        } else {
                            yield parseCompactTx(parsedData);
                        }
                    } catch (err) {
                        console.error("Failed to parse order data", err);
                    }
                }
            }
            if (streamError) throw streamError;
        } finally {
            // Ensure the connection is closed if the generator is exited early (e.g., via break)
            es.close();
        }
    }
}

export default PolyEdgeClient;
