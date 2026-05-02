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
        "address": "0xa5ea13a81d2b7e8e424b182bdc1db08e756bd96a",
        "name": "bossoskil1",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-01-06T21:37:42Z",
        "last_trade_at": "2026-05-02T15:45:42Z"
      },
      "total_pnl": "984813602766",
      "total_volume": "3252443007439",
      "roi": 38.56,
      "win_rate": 46.25,
      "rank": 1,
      "markets_count": 80,
      "wins_count": 37
    },
    {
      "profile": {
        "address": "0xbddf61af533ff524d27154e589d2d7a81510c684",
        "name": "Countryside",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2025-11-06T22:44:56Z",
        "last_trade_at": "2026-05-02T15:46:42Z"
      },
      "total_pnl": "888693163799",
      "total_volume": "1403143049944",
      "roi": 48.49,
      "win_rate": 58.54,
      "rank": 2,
      "markets_count": 41,
      "wins_count": 24
    },
    {
      "profile": {
        "address": "0x204f72f35326db932158cba6adff0b9a1da95e14",
        "name": "swisstony",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2025-07-29T14:46:06Z",
        "last_trade_at": "2026-05-02T15:46:46Z"
      },
      "total_pnl": "529370253101",
      "total_volume": "5617694283334",
      "roi": 14.56,
      "win_rate": 52.31,
      "rank": 3,
      "markets_count": 2621,
      "wins_count": 1371
    },
    {
      "profile": {
        "address": "0x986b16df5791e7dc4c6f6ef3524eff0efe6812e9",
        "name": "BoerAc",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-04-23T17:00:49Z",
        "last_trade_at": "2026-05-02T01:34:08Z"
      },
      "total_pnl": "525232564504",
      "total_volume": "749751555106",
      "roi": 71.45,
      "win_rate": 71.43,
      "rank": 4,
      "markets_count": 14,
      "wins_count": 10
    },
    {
      "profile": {
        "address": "0x2a2c53bd278c04da9962fcf96490e17f3dfb9bc1",
        "name": "0x2a2C53bD278c04DA9962Fcf96490E17F3DfB9Bc1-1772479215461",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-03-02T19:20:15Z",
        "last_trade_at": "2026-05-02T15:27:30Z"
      },
      "total_pnl": "449524569575",
      "total_volume": "6167078041930",
      "roi": 9.98,
      "win_rate": 46.15,
      "rank": 5,
      "markets_count": 91,
      "wins_count": 42
    }
  ],
  "total_count": 149708
}
```
