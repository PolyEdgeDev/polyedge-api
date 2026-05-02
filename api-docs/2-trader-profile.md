# Trader Profile

Get detailed performance statistics and metadata for a specific trader. This includes their profile information, a performance breakdown by market category (top tags), and aggregate metrics (PNL, ROI, volume) across multiple timeframes from 1 hour to 30 days.

**Endpoint:** `GET /v1/traders/:address`

**Authentication:** API Key required (`X-PolyEdge-Key` header)

## Parameters

| Name | Type | Location | Description |
|---|---|---|---|
| `address` | `string` | Path | The EVM wallet address of the trader. |

## Returns

Returns a JSON object with the trader's `profile` metadata, a list of their most successful `top_tags`, and a `stats` object containing performance data for different time intervals.

### Example JSON Response (for 0x986b16df5791e7dc4c6f6ef3524eff0efe6812e9)

```json
{
  "profile": {
    "address": "0x986b16df5791e7dc4c6f6ef3524eff0efe6812e9",
    "name": "BoerAc",
    "profile_image": "",
    "x_username": "",
    "profile_created_at": "2026-04-23 17:00:49Z",
    "last_trade_at": "2026-05-02 01:34:08Z"
  },
  "top_tags": [
    {
      "slug": "sports",
      "pnl": "136520746527",
      "volume": "1188050763083",
      "roi": 11.63,
      "win_rate": 53.57,
      "markets_count": 28,
      "maker_volume": "322015732083",
      "taker_volume": "866035031000",
      "wins_count": 15
    },
    {
      "slug": "tennis",
      "pnl": "-71553500",
      "volume": "106553500",
      "roi": -67.15,
      "win_rate": 50,
      "markets_count": 4,
      "maker_volume": "25950000",
      "taker_volume": "80603500",
      "wins_count": 2
    }
  ],
  "stats": {
    "t_1h": {
      "pnl": "0",
      "volume": "0",
      "roi": 0,
      "win_rate": 0,
      "markets_count": 1,
      "wins_count": 0,
      "maker_volume": "0",
      "taker_volume": "0"
    },
    "t_4h": {
      "pnl": "0",
      "volume": "0",
      "roi": 0,
      "win_rate": 0,
      "markets_count": 1,
      "wins_count": 0,
      "maker_volume": "0",
      "taker_volume": "0"
    },
    "t_1d": {
      "pnl": "56527855741",
      "volume": "124575239124",
      "roi": 51.4,
      "win_rate": 50,
      "markets_count": 4,
      "wins_count": 2,
      "maker_volume": "66951127924",
      "taker_volume": "57624111200"
    },
    "t_3d": {
      "pnl": "467498184704",
      "volume": "693556572906",
      "roi": 68.86,
      "win_rate": 69.23,
      "markets_count": 13,
      "wins_count": 9,
      "maker_volume": "141264388406",
      "taker_volume": "552292184500"
    },
    "t_7d": {
      "pnl": "229121301599",
      "volume": "1095415208011",
      "roi": 21.2,
      "win_rate": 65,
      "markets_count": 20,
      "wins_count": 13,
      "maker_volume": "319812993311",
      "taker_volume": "775602214700"
    },
    "t_30d": {
      "pnl": "136520746527",
      "volume": "1188050763083",
      "roi": 11.63,
      "win_rate": 53.57,
      "markets_count": 28,
      "wins_count": 15,
      "maker_volume": "322015732083",
      "taker_volume": "866035031000"
    }
  }
}
```
