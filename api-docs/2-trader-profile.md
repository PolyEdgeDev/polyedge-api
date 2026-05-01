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

### Example JSON Response (for 0xfe787d2da716d60e8acff57fb87eb13cd4d10319)

```json
{
  "profile": {
    "address": "0xfe787d2da716d60e8acff57fb87eb13cd4d10319",
    "name": "ferrariChampions2026",
    "profile_image": "",
    "x_username": "",
    "profile_created_at": "2026-03-25 18:19:26Z",
    "last_trade_at": "2026-05-01 10:27:28Z"
  },
  "top_tags": [
    {
      "slug": "sports",
      "pnl": "699319765818",
      "volume": "47840009103237",
      "roi": 1.97,
      "win_rate": 49.9,
      "markets_count": 6990,
      "maker_volume": "29878288907958",
      "taker_volume": "17961720195279",
      "wins_count": 3488
    },
    {
      "slug": "tennis",
      "pnl": "607423487314",
      "volume": "18887624380085",
      "roi": 4.95,
      "win_rate": 44.99,
      "markets_count": 1427,
      "maker_volume": "13215081644676",
      "taker_volume": "5672542735409",
      "wins_count": 642
    },
    {
      "slug": "soccer",
      "pnl": "222987306833",
      "volume": "5144950196667",
      "roi": 4.93,
      "win_rate": 51.73,
      "markets_count": 2695,
      "maker_volume": "1462000072748",
      "taker_volume": "3682950123919",
      "wins_count": 1394
    },
    {
      "slug": "hockey",
      "pnl": "-4846010132",
      "volume": "950375671563",
      "roi": -0.66,
      "win_rate": 53.49,
      "markets_count": 86,
      "maker_volume": "859137943373",
      "taker_volume": "91237728190",
      "wins_count": 46
    },
    {
      "slug": "basketball",
      "pnl": "-396844070411",
      "volume": "14960924619164",
      "roi": -3.45,
      "win_rate": 46.13,
      "markets_count": 1110,
      "maker_volume": "8315750079457",
      "taker_volume": "6645174539707",
      "wins_count": 512
    }
  ],
  "stats": {
    "t_1h": {
      "pnl": "-483480878",
      "volume": "46729438874",
      "roi": -4.04,
      "win_rate": 40,
      "markets_count": 10,
      "wins_count": 4,
      "maker_volume": "37891361575",
      "taker_volume": "8838077299"
    },
    "t_4h": {
      "pnl": "54722861",
      "volume": "104030102898",
      "roi": 0.14,
      "win_rate": 38.89,
      "markets_count": 18,
      "wins_count": 7,
      "maker_volume": "86235789910",
      "taker_volume": "17794312988"
    },
    "t_1d": {
      "pnl": "73236968323",
      "volume": "1709977839582",
      "roi": 5.58,
      "win_rate": 54.01,
      "markets_count": 187,
      "wins_count": 101,
      "maker_volume": "1101001477242",
      "taker_volume": "608976362340"
    },
    "t_3d": {
      "pnl": "449494538079",
      "volume": "5211103112118",
      "roi": 11.64,
      "win_rate": 53.18,
      "markets_count": 581,
      "wins_count": 309,
      "maker_volume": "3348394097571",
      "taker_volume": "1862709014547"
    },
    "t_7d": {
      "pnl": "665465054870",
      "volume": "12735659488959",
      "roi": 7.18,
      "win_rate": 52.8,
      "markets_count": 1534,
      "wins_count": 810,
      "maker_volume": "8656373908057",
      "taker_volume": "4079285580902"
    },
    "t_30d": {
      "pnl": "699319765818",
      "volume": "47840009103237",
      "roi": 1.97,
      "win_rate": 49.9,
      "markets_count": 6990,
      "wins_count": 3488,
      "maker_volume": "29878288907958",
      "taker_volume": "17961720195279"
    }
  }
}
```
