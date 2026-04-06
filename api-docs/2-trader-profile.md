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

### Example JSON Response (for 0x8a6c6811e8937f9e8afc1b9249fa540262c30b3f)

```json
{
  "profile": {
    "address": "0x8a6c6811e8937f9e8afc1b9249fa540262c30b3f",
    "name": "0x8a6C6811e8937F9E8aFc1b9249FA540262c30b3f-1771776258725",
    "profile_image": "",
    "x_username": "",
    "profile_created_at": "2026-02-22 16:04:19Z",
    "last_trade_at": "2026-04-06 02:28:21Z"
  },
  "top_tags": [
    {
      "slug": "sports",
      "pnl": "965904212405",
      "volume": "30595925594119",
      "roi": 6.45,
      "win_rate": 50.92,
      "markets_count": 379,
      "maker_volume": "0",
      "taker_volume": "30595925594119",
      "wins_count": 193
    },
    {
      "slug": "basketball",
      "pnl": "898380238650",
      "volume": "20784425983134",
      "roi": 8.88,
      "win_rate": 52.99,
      "markets_count": 234,
      "maker_volume": "0",
      "taker_volume": "20784425983134",
      "wins_count": 124
    },
    {
      "slug": "soccer",
      "pnl": "42561666472",
      "volume": "9447112325675",
      "roi": 0.9,
      "win_rate": 47.1,
      "markets_count": 138,
      "maker_volume": "0",
      "taker_volume": "9447112325675",
      "wins_count": 65
    },
    {
      "slug": "hockey",
      "pnl": "-29972692713",
      "volume": "364387285310",
      "roi": -15.2,
      "win_rate": 57.14,
      "markets_count": 7,
      "maker_volume": "0",
      "taker_volume": "364387285310",
      "wins_count": 4
    }
  ],
  "stats": {
    "t_1h": {
      "pnl": "0",
      "volume": "0",
      "roi": 0,
      "win_rate": 0,
      "markets_count": 0,
      "wins_count": 0,
      "maker_volume": "0",
      "taker_volume": "0"
    },
    "t_4h": {
      "pnl": "103300586785",
      "volume": "698084015866",
      "roi": 70.49,
      "win_rate": 42.86,
      "markets_count": 7,
      "wins_count": 3,
      "maker_volume": "0",
      "taker_volume": "698084015866"
    },
    "t_1d": {
      "pnl": "257476829738",
      "volume": "1507351273690",
      "roi": 57.29,
      "win_rate": 50,
      "markets_count": 18,
      "wins_count": 9,
      "maker_volume": "0",
      "taker_volume": "1507351273690"
    },
    "t_3d": {
      "pnl": "607299024186",
      "volume": "3430098687485",
      "roi": 48.83,
      "win_rate": 60.87,
      "markets_count": 46,
      "wins_count": 28,
      "maker_volume": "0",
      "taker_volume": "3430098687485"
    },
    "t_7d": {
      "pnl": "419694044839",
      "volume": "6941403786226",
      "roi": 13.52,
      "win_rate": 53.75,
      "markets_count": 80,
      "wins_count": 43,
      "maker_volume": "0",
      "taker_volume": "6941403786226"
    },
    "t_30d": {
      "pnl": "965904212405",
      "volume": "30595925594119",
      "roi": 6.45,
      "win_rate": 50.92,
      "markets_count": 379,
      "wins_count": 193,
      "maker_volume": "0",
      "taker_volume": "30595925594119"
    }
  }
}
```
