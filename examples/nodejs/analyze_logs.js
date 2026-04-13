import fs from 'fs';
import readline from 'readline';

const LOG_FILE = 'orders_log.txt';

async function analyze() {
    if (!fs.existsSync(LOG_FILE)) {
        console.error(`❌ File not found: ${LOG_FILE}`);
        return;
    }

    const fileStream = fs.createReadStream(LOG_FILE);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    const stats = new Map();
    let totalTxs = 0;

    console.log(`📊 Reading and analyzing ${LOG_FILE}...\n`);

    for await (const line of rl) {
        if (!line.trim()) continue;

        try {
            const tx = JSON.parse(line);
            totalTxs++;

            // Use market.slug
            const market = tx.market || {};
            const slug = market.slug || 'Unknown';
            
            if (!stats.has(slug)) {
                stats.set(slug, { txCount: 0, orderCount: 0 });
            }

            const current = stats.get(slug);
            current.txCount += 1; // One line represents one transaction event (Tx)
            
            // Order count = 1 Taker order + all Maker orders
            const takerCount = tx.takerOrder ? 1 : 0;
            const makersCount = (tx.makerOrders && tx.makerOrders.length) || 0;
            current.orderCount += (takerCount + makersCount);

        } catch (err) {
            console.error(`⚠️ Could not parse line: ${err.message}`);
        }
    }

    // Convert to array and sort by transaction volume
    const sortedStats = Array.from(stats.entries())
        .sort((a, b) => b[1].txCount - a[1].txCount);

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`${'Market Slug'.padEnd(40)} | ${'Txs'.padStart(8)} | ${'Orders'.padStart(8)}`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

    let grandTotalOrders = 0;
    for (const [slug, data] of sortedStats) {
        console.log(`${slug.padEnd(40)} | ${data.txCount.toString().padStart(8)} | ${data.orderCount.toString().padStart(8)}`);
        grandTotalOrders += data.orderCount;
    }

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`${'TOTAL'.padEnd(40)} | ${totalTxs.toString().padStart(8)} | ${grandTotalOrders.toString().padStart(8)}`);
}

analyze();
