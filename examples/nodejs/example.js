import PolyEdgeClient from './polyedge.js';

const API_KEY = 'polyedge_live_demo';
const client = new PolyEdgeClient(API_KEY);

// Utility to format USDC/Shares (raw 1e6 format) to readable numbers
function formatAmount(rawStr) {
    if (!rawStr) return "0.00";
    const num = Number(rawStr) / 1e6;
    return num.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function printDivider() {
    console.log("\n=================================================================================================");
}

async function main() {
    try {
        console.log("🚀 Testing PolyEdge API Client...\n");

        printDivider();
        // 1. Get Leaderboard
        console.log("1. Fetching Leaderboard...");
        const leaderboard = await client.getLeaderboard({ limit: 3, sort_by: 'pnl', time_frame: '7D' });
        console.log("\n>>> Leaderboard (Top 3)");
        let traderAddress = '0x';
        if (leaderboard.traders && leaderboard.traders.length > 0) {
            traderAddress = leaderboard.traders[0].profile.address;
            leaderboard.traders.forEach((t) => {
                const name = t.profile.name || "Unknown";
                const pnl = formatAmount(t.total_pnl);
                console.log(`${t.rank}. ${name} (${t.profile.address})`);
                console.log(`   PNL: $${pnl} | ROI: ${t.roi}% | Win Rate: ${t.win_rate}% | Markets: ${t.markets_count}`);
            });
        }

        printDivider();
        // 2. Get Trader Profile
        console.log(`2. Fetching Trader Profile for ${traderAddress}...`);
        const profileResponse = await client.getTraderProfile(traderAddress);
        console.log(`\n>>> Trader Profile`);
        const p = profileResponse.profile;
        if (p) {
            console.log(`Name: ${p.name || "Unknown"}`);
            console.log(`Address: ${p.address}`);
            console.log(`Joined: ${p.profile_created_at}`);
        }
        if (profileResponse.stats && profileResponse.stats.t_30d) {
            const s30 = profileResponse.stats.t_30d;
            console.log(`30D PNL: $${formatAmount(s30.pnl)} | 30D ROI: ${s30.roi}% | Win Rate: ${s30.win_rate}%`);
        }
        if (profileResponse.top_tags && profileResponse.top_tags.length > 0) {
            const topTags = profileResponse.top_tags.slice(0, 3).map(t => `${t.slug} ($${formatAmount(t.pnl)})`).join(", ");
            console.log(`Top Tags: ${topTags}`);
        }

        printDivider();
        // 3. Get Trader Markets
        console.log(`3. Fetching Trader Markets for ${traderAddress}...`);
        const marketsResponse = await client.getTraderMarkets(traderAddress, { limit: 1 });
        console.log("\n>>> Trader Markets (Latest 1)");
        let marketId = '0';
        if (marketsResponse.history && marketsResponse.history.length > 0) {
            const hm = marketsResponse.history[0];
            marketId = hm.market.id;
            console.log(`Market: ${hm.market.question}`);
            console.log(`Market ID: ${hm.market.id}`);
            console.log(`Traded At: ${hm.last_trade_at}`);
            console.log(`Position PNL: $${formatAmount(hm.pnl)} | ROI: ${hm.roi}% | Volume: $${formatAmount(hm.volume)}`);
        } else {
            console.log("No recent markets traded.");
        }

        printDivider();
        // 4. Get Trader Market Orders
        console.log(`4. Fetching Orders for Trader: ${traderAddress}, Market: ${marketId}...`);
        const ordersResponse = await client.getTraderMarketOrders(traderAddress, marketId);
        console.log(`\n>>> Trader Market Orders`);
        if (ordersResponse.orders && ordersResponse.orders.length > 0) {
            ordersResponse.orders.slice(0, 3).forEach((o, i) => {
                const price = (Number(o.price) / 1e6).toFixed(3);
                console.log(`[Order ${i+1}] ${o.time}`);
                console.log(`  Action: ${o.side} ${o.outcome} @ $${price}`);
                console.log(`  Shares: ${formatAmount(o.shares)} | USDC: $${formatAmount(o.usdc)} | Taker: ${o.is_taker ? "Yes" : "No"}`);
            });
            if (ordersResponse.orders.length > 3) console.log(`  ... and ${ordersResponse.orders.length - 3} more orders.`);
        } else {
            console.log("No orders found.");
        }

        printDivider();
        // 5. Get Market Detail
        console.log(`5. Fetching Market Detail for ${marketId}...`);
        const marketDetail = await client.getMarketDetail(marketId);
        console.log(`\n>>> Market Detail`);
        const md = marketDetail.market;
        if (md) {
            console.log(`Question: ${md.question}`);
            console.log(`ID: ${md.id} | Slug: ${md.slug}`);
            console.log(`Dates: ${md.start_date} -> ${md.end_date}`);
            console.log(`Outcomes: ${md.outcome_1} vs ${md.outcome_2}`);
            console.log(`Total Volume: $${formatAmount(marketDetail.total_volume)}`);
            console.log(`Total Traders: ${marketDetail.total_traders}`);
        }

        printDivider();
        // 6. Stream Orders
        console.log("🔥 6. Starting PolyEdge SSE Stream...");
        console.log("Listening for new orders (will exit after 3 events)...\n");

        let eventCount = 0;

        try {
            for await (const order of client.streamOrders()) {
                eventCount++;
                const taker = order.takerOrder;
                const priceStr = taker.shares !== "0" ? (Number(taker.usdc) / Number(taker.shares)).toFixed(3) : "0.000";
                
                console.log(`[Event #${eventCount}] ${order.timestamp}`);
                console.log(`  Market: ${order.market.question} (${order.market.id})`);
                console.log(`  Trader: ${taker.trader ? taker.trader.address : 'Unknown'}`);
                console.log(`  Action: ${taker.side} ${taker.outcome} @ ~$${priceStr}`);
                console.log(`  Size: ${formatAmount(taker.shares)} shares ($${formatAmount(taker.usdc)})`);
                console.log("  ------------------------");
                
                if (eventCount >= 3) {
                    console.log("\nReceived 3 events. Exiting stream.");
                    break;
                }
            }
        } catch (err) {
            throw err;
        }

        console.log(`\n✅ Finished successfully.`);

    } catch (error) {
        console.error("\n❌ Error encountered during API tests:");
        console.error(error.message || error);
    }
}

main();
