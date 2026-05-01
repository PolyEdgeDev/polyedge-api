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
        "address": "0xbddf61af533ff524d27154e589d2d7a81510c684",
        "name": "Countryside",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2025-11-06T22:44:56Z",
        "last_trade_at": "2026-05-01T09:11:06Z"
      },
      "total_pnl": "849274911071",
      "total_volume": "1300390168376",
      "roi": 44.58,
      "win_rate": 43.75,
      "rank": 1,
      "markets_count": 48,
      "wins_count": 21
    },
    {
      "profile": {
        "address": "0x986b16df5791e7dc4c6f6ef3524eff0efe6812e9",
        "name": "BoerAc",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-04-23T17:00:49Z",
        "last_trade_at": "2026-04-30T16:35:10Z"
      },
      "total_pnl": "468704708763",
      "total_volume": "625176315982",
      "roi": 74.97,
      "win_rate": 80,
      "rank": 2,
      "markets_count": 10,
      "wins_count": 8
    },
    {
      "profile": {
        "address": "0xa5ea13a81d2b7e8e424b182bdc1db08e756bd96a",
        "name": "bossoskil1",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-01-06T21:37:42Z",
        "last_trade_at": "2026-05-01T08:53:02Z"
      },
      "total_pnl": "461002446746",
      "total_volume": "2606651724778",
      "roi": 22.79,
      "win_rate": 52,
      "rank": 3,
      "markets_count": 75,
      "wins_count": 39
    },
    {
      "profile": {
        "address": "0xfe787d2da716d60e8acff57fb87eb13cd4d10319",
        "name": "ferrariChampions2026",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-03-25T18:19:26Z",
        "last_trade_at": "2026-05-01T09:09:24Z"
      },
      "total_pnl": "436171585579",
      "total_volume": "5238936016125",
      "roi": 11.18,
      "win_rate": 53.31,
      "rank": 4,
      "markets_count": 589,
      "wins_count": 314
    },
    {
      "profile": {
        "address": "0xea2b4224411e723499a803ce3f4758779fb31fc6",
        "name": "frankfrankfrank",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2025-10-20T16:08:40Z",
        "last_trade_at": "2026-05-01T09:05:18Z"
      },
      "total_pnl": "411916207297",
      "total_volume": "915406277899",
      "roi": 47.86,
      "win_rate": 56.25,
      "rank": 5,
      "markets_count": 32,
      "wins_count": 18
    }
  ],
  "total_count": 158323
}
```
