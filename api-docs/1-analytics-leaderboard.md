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
| `min_pnl` | `int` | Query | (Optional) Minimum PnL (USDC). |

## Returns

Returns a JSON object containing a list of `traders` with their profile details, ranking, and performance metrics (PNL, ROI, volume, etc.) for the selected period, along with a `total_count` for pagination.

### Example JSON Response

```json
{
  "traders": [
    {
      "profile": {
        "address": "0xde7be6d489bce070a959e0cb813128ae659b5f4b",
        "name": "wan123",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2025-12-20T01:54:20Z",
        "last_trade_at": "2026-05-09T00:33:25Z"
      },
      "total_pnl": "835953299810",
      "total_volume": "976845630771",
      "roi": 240.23,
      "win_rate": 25.93,
      "rank": 1,
      "markets_count": 27,
      "wins_count": 7
    },
    {
      "profile": {
        "address": "0x9495425feeb0c250accb89275c97587011b19a27",
        "name": "LaBradfordSmith22",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-04-21T02:33:58Z",
        "last_trade_at": "2026-05-09T02:00:41Z"
      },
      "total_pnl": "792542143048",
      "total_volume": "3045297066004",
      "roi": 33.34,
      "win_rate": 49.48,
      "rank": 2,
      "markets_count": 287,
      "wins_count": 142
    },
    {
      "profile": {
        "address": "0xa5ea13a81d2b7e8e424b182bdc1db08e756bd96a",
        "name": "bossoskil1",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-01-06T21:37:42Z",
        "last_trade_at": "2026-05-09T01:39:25Z"
      },
      "total_pnl": "738613152589",
      "total_volume": "2748365674374",
      "roi": 38.88,
      "win_rate": 52.63,
      "rank": 3,
      "markets_count": 38,
      "wins_count": 20
    },
    {
      "profile": {
        "address": "0x492442eab586f242b53bda933fd5de859c8a3782",
        "name": "0x492442EaB586F242B53bDa933fD5dE859c8A3782-1766317541188",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2025-12-21T11:45:42Z",
        "last_trade_at": "2026-05-09T01:09:26Z"
      },
      "total_pnl": "558516314230",
      "total_volume": "887926602498",
      "roi": 98.04,
      "win_rate": 50,
      "rank": 4,
      "markets_count": 10,
      "wins_count": 5
    },
    {
      "profile": {
        "address": "0x96489abcb9f583d6835c8ef95ffc923d05a86825",
        "name": "anoin123",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2025-12-26T16:49:59Z",
        "last_trade_at": "2026-05-09T01:59:38Z"
      },
      "total_pnl": "481353330289",
      "total_volume": "4924912456035",
      "roi": 38.9,
      "win_rate": 59.62,
      "rank": 5,
      "markets_count": 52,
      "wins_count": 31
    }
  ],
  "total_count": 175261
}
```
