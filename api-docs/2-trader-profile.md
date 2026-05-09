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

### Example JSON Response (for 0x492442eab586f242b53bda933fd5de859c8a3782)

```json
{
  "profile": {
    "address": "0x492442eab586f242b53bda933fd5de859c8a3782",
    "name": "0x492442EaB586F242B53bDa933fD5dE859c8A3782-1766317541188",
    "profile_image": "",
    "x_username": "",
    "profile_created_at": "2025-12-21 11:45:42Z",
    "last_trade_at": "2026-05-09 01:09:26Z"
  },
  "top_tags": [
    {
      "slug": "sports",
      "pnl": "2667408144312",
      "volume": "12986655182732",
      "roi": 20.72,
      "win_rate": 53.15,
      "markets_count": 111,
      "maker_volume": "233374415432",
      "taker_volume": "12753280767300",
      "wins_count": 59
    },
    {
      "slug": "basketball",
      "pnl": "1369511642209",
      "volume": "8683497662664",
      "roi": 15.98,
      "win_rate": 52.81,
      "markets_count": 89,
      "maker_volume": "210673690564",
      "taker_volume": "8472823972100",
      "wins_count": 47
    },
    {
      "slug": "hockey",
      "pnl": "1297896502103",
      "volume": "4303157520068",
      "roi": 30.16,
      "win_rate": 54.55,
      "markets_count": 22,
      "maker_volume": "22700724868",
      "taker_volume": "4280456795200",
      "wins_count": 12
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
      "volume": "111040237000",
      "roi": 0,
      "win_rate": 0,
      "markets_count": 1,
      "wins_count": 0,
      "maker_volume": "0",
      "taker_volume": "111040237000"
    },
    "t_1d": {
      "pnl": "274989398469",
      "volume": "321617318998",
      "roi": 130.59,
      "win_rate": 60,
      "markets_count": 5,
      "wins_count": 3,
      "maker_volume": "2473898",
      "taker_volume": "321614845100"
    },
    "t_3d": {
      "pnl": "836915099729",
      "volume": "887926602498",
      "roi": 107.73,
      "win_rate": 80,
      "markets_count": 10,
      "wins_count": 8,
      "maker_volume": "2473898",
      "taker_volume": "887924128600"
    },
    "t_7d": {
      "pnl": "1358769445209",
      "volume": "2582735070168",
      "roi": 54.97,
      "win_rate": 77.27,
      "markets_count": 22,
      "wins_count": 17,
      "maker_volume": "132759708768",
      "taker_volume": "2449975361400"
    },
    "t_30d": {
      "pnl": "2667408144312",
      "volume": "12986655182732",
      "roi": 20.72,
      "win_rate": 53.15,
      "markets_count": 111,
      "wins_count": 59,
      "maker_volume": "233374415432",
      "taker_volume": "12753280767300"
    }
  }
}
```
