# Analytics Leaderboard

Fetch top-performing traders on Polymarket based on customizable criteria. This endpoint supports filtering by time window (1H to 30D), market category (tags), and performance thresholds like minimum ROI or win rate. It is designed to help identify "smart money" and successful trading patterns across the platform.

**Endpoint:** `GET /v1/analytics/leaderboard`

**Authentication:** API Key required (`X-PolyEdge-Key` header)

## Parameters

| Name | Type | Location | Description |
|---|---|---|---|
| `limit` | `int` | Query | Number of results to return. Default: `50`, Max: `100`. (Demo tier max 20) |
| `offset` | `int` | Query | Pagination offset. Default: `0`. (Demo tier must be 0) |
| `time_frame` | `string` | Query | Time frame for ranking. Options: `1H`, `4H`, `1D`, `3D`, `7D`, `30D`. Default: `30D`. |
| `sort_by` | `string` | Query | Field to sort by. Options: `pnl`, `roi`, `win_rate`, `market_count`. Default: `pnl`. |
| `tag` | `string` | Query | Filter leaderboard by a specific market tag. Options: `all`, `sports`, `crypto`, `geopolitics`, `politics`, `finance`, `esports`, `pop-culture`, `tech`, `economy`, `weather`, `elections`, `tweets-markets`, `basketball`, `hockey`, `soccer`, `tennis`, `counter-strike-2`, `dota-2`, `league-of-legends`, `5M`, `15M`. Default: `all`. |
| `min_win_rate` | `float` | Query | (Optional) Minimum win rate (0-100). |
| `max_win_rate` | `float` | Query | (Optional) Maximum win rate (0-100). |
| `min_roi` | `float` | Query | (Optional) Minimum ROI percentage. |
| `max_roi` | `float` | Query | (Optional) Maximum ROI percentage. |
| `last_active_hours` | `int` | Query | (Optional) Filter traders active in the last N hours. |
| `min_market_count` | `int` | Query | (Optional) Minimum number of markets traded. |
| `max_market_count` | `int` | Query | (Optional) Maximum number of markets traded. |

## Returns

Returns a JSON object containing a list of `traders` with their profile details, ranking, and performance metrics (PNL, ROI, volume, etc.) for the selected period, along with a `total_count` for pagination.

### Example JSON Response

```json
{
  "traders": [
    {
      "profile": {
        "address": "0x50b1db131a24a9d9450bbd0372a95d32ea88f076",
        "name": "blindStaking",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-03-12T19:53:36Z",
        "last_trade_at": "2026-04-05T01:00:55Z"
      },
      "total_pnl": "1620149290085",
      "total_volume": "2553211530521",
      "roi": 63.46,
      "win_rate": 50,
      "rank": 1,
      "markets_count": 4,
      "wins_count": 2
    },
    {
      "profile": {
        "address": "0xbddf61af533ff524d27154e589d2d7a81510c684",
        "name": "Countryside",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2025-11-06T22:44:56Z",
        "last_trade_at": "2026-04-06T03:29:37Z"
      },
      "total_pnl": "782234111611",
      "total_volume": "3637703116635",
      "roi": 30.39,
      "win_rate": 40.43,
      "rank": 2,
      "markets_count": 47,
      "wins_count": 19
    },
    {
      "profile": {
        "address": "0x9f2fe025f84839ca81dd8e0338892605702d2ca8",
        "name": "surfandturf",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-04-01T06:03:57Z",
        "last_trade_at": "2026-04-06T02:32:33Z"
      },
      "total_pnl": "639292755514",
      "total_volume": "2190632870982",
      "roi": 46.52,
      "win_rate": 61.54,
      "rank": 3,
      "markets_count": 26,
      "wins_count": 16
    },
    {
      "profile": {
        "address": "0x8a6c6811e8937f9e8afc1b9249fa540262c30b3f",
        "name": "0x8a6C6811e8937F9E8aFc1b9249FA540262c30b3f-1771776258725",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-02-22T16:04:19Z",
        "last_trade_at": "2026-04-06T02:28:21Z"
      },
      "total_pnl": "607299024186",
      "total_volume": "3430098687485",
      "roi": 48.83,
      "win_rate": 60.87,
      "rank": 4,
      "markets_count": 46,
      "wins_count": 28
    },
    {
      "profile": {
        "address": "0x2b3ff45c91540e46fae1e0c72f61f4b049453446",
        "name": "Mentallyillgambld",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2024-11-05T20:15:29Z",
        "last_trade_at": "2026-04-05T19:47:05Z"
      },
      "total_pnl": "421561636018",
      "total_volume": "835908056935",
      "roi": 50.43,
      "win_rate": 85.71,
      "rank": 5,
      "markets_count": 7,
      "wins_count": 6
    }
  ],
  "total_count": 202991
}
```
