// parser.js
// Utility to parse the compact array format back into the original JSON structure.

function parseCompactTrader(arr) {
  if (!arr || arr.length === 0) return null;
  return {
    address: arr[0],
    name: arr[1] || "",
    x_username: arr[2] || "",
    profile_image: arr[3] || "",
    profile_created_at: arr[4] || ""
  };
}

function parseCompactOrder(arr) {
  if (!arr || arr.length === 0) return null;
  return {
    side: arr[0],
    trader: parseCompactTrader(arr[1]),
    outcome: arr[2],
    tokenId: arr[3],
    usdc: arr[4],
    shares: arr[5],
    fee: arr[6],
    feeRateBps: arr[7]
  };
}

function parseCompactMarket(arr) {
  if (!arr || arr.length === 0) return null;
  return {
    id: arr[0],
    question: arr[1] || "",
    slug: arr[2] || "",
    start_date: arr[3] || "",
    end_date: arr[4] || "",
    icon: arr[5] || "",
    neg_risk: arr[6] || false,
    event_slug: arr[7] || "",
    series_slug: arr[8] || "",
    tags: arr[9] || [],
    outcome_1: arr[10] || "",
    outcome_2: arr[11] || "",
    group_item_title: arr[12] || "",
    event_title: arr[13] || "",
    event_icon: arr[14] || ""
  };
}

function parseCompactTx(arr) {
  if (!arr || arr.length !== 5) return null;
  
  const makers = [];
  if (Array.isArray(arr[4])) {
    for (const makerArr of arr[4]) {
      makers.push(parseCompactOrder(makerArr));
    }
  }

  return {
    txHash: arr[0],
    timestamp: arr[1],
    market: parseCompactMarket(arr[2]),
    takerOrder: parseCompactOrder(arr[3]),
    makerOrders: makers
  };
}

export default parseCompactTx;