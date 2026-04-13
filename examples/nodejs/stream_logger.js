import fs from 'fs';
import PolyEdgeClient from './polyedge.js';

const API_KEY = 'polyedge_live_demo';
const client = new PolyEdgeClient(API_KEY);
const LOG_FILE = 'orders_log.txt';
const DURATION_MS = 15 * 60 * 1000; // 15 minutes

async function main() {
    console.log(`🚀 Starting order stream recording, expected to run for 15 minutes...`);
    console.log(`Data will be saved to: ${LOG_FILE}`);

    // Create write file stream
    const logStream = fs.createWriteStream(LOG_FILE, { flags: 'a' });
    let eventCount = 0;
    const startTime = Date.now();

    // Set timer to force exit after 15 minutes
    const timer = setTimeout(() => {
        console.log(`\n⏰ Time's up (15 minutes), stopping script...`);
        logStream.end();
        process.exit(0);
    }, DURATION_MS);

    try {
        // Use parameters to filter order streams
        for await (const tx of client.streamOrders({series: "btc-up-or-down-5m"})) {
            eventCount++;
            
            const logEntry = JSON.stringify({
                log_timestamp: new Date().toISOString(),
                ...tx
            });
            
            logStream.write(logEntry + '\n');

            const elapsedMins = ((Date.now() - startTime) / 60000).toFixed(1);
            process.stdout.write(`\rReceived: ${eventCount} orders | Elapsed: ${elapsedMins}/15.0 minutes`);

            if (Date.now() - startTime >= DURATION_MS) break;
        }
    } catch (err) {
        console.error("\n❌ Stream error:", err.message);
    } finally {
        clearTimeout(timer);
        logStream.end();
        console.log(`\n✅ Task finished. Recorded ${eventCount} orders in total.`);
    }
}

main();
