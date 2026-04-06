# Trader Markets

Retrieve a history of all markets where a specific trader has been active. For each market, it provides the trader's performance summary, including PNL, ROI, and total volume. This is useful for analyzing a trader's focus areas and historical success rate.

**Endpoint:** `GET /v1/traders/:address/markets`

**Authentication:** API Key required (`X-PolyEdge-Key` header)

## Parameters

| Name | Type | Location | Description |
|---|---|---|---|
| `address` | `string` | Path | The EVM wallet address of the trader. |
| `limit` | `int` | Query | Number of markets to return. Default: `20`, Max: `100`. |
| `offset` | `int` | Query | Pagination offset. Default: `0`. |
| `is_active` | `bool` | Query | Filter by active (unresolved) markets only. If omitted, returns both active and resolved markets. |

## Returns

Returns a JSON object featuring a `history` array of market-specific performance data and a `total_count` for easy pagination.

### Example JSON Response (for 0x8a6c6811e8937f9e8afc1b9249fa540262c30b3f)

```json
{
  "history": [
    {
      "pnl": "0",
      "volume": "99844999995",
      "roi": 0,
      "last_trade_at": "2026-04-06T02:28:21Z",
      "market": {
        "id": "1858809",
        "question": "Spread: Rockets (-3.5)",
        "slug": "nba-hou-gsw-2026-04-05-spread-away-3pt5",
        "start_date": "2026-04-04T10:12:49Z",
        "end_date": "2026-04-06T02:00:00Z",
        "icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/super+cool+basketball+in+red+and+blue+wow.png",
        "neg_risk": false,
        "event_slug": "nba-hou-gsw-2026-04-05",
        "series_slug": "nba-2026",
        "tags": [
          "sports",
          "basketball",
          "nba",
          "games"
        ],
        "outcome_1": "Rockets",
        "outcome_2": "Warriors",
        "group_item_title": "Spread -3.5",
        "event_title": "Rockets vs. Warriors",
        "event_icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/super+cool+basketball+in+red+and+blue+wow.png",
        "resolved_at": "",
        "winning_outcome": ""
      }
    },
    {
      "pnl": "20956746601",
      "volume": "70611742599",
      "roi": 85.00000000750354,
      "last_trade_at": "2026-04-06T01:24:41Z",
      "market": {
        "id": "1881148",
        "question": "Spread: Hornets (-3.5)",
        "slug": "nba-cha-min-2026-04-05-spread-away-3pt5",
        "start_date": "2026-04-05T18:13:02Z",
        "end_date": "2026-04-05T23:00:00Z",
        "icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/super+cool+basketball+in+red+and+blue+wow.png",
        "neg_risk": false,
        "event_slug": "nba-cha-min-2026-04-05",
        "series_slug": "nba-2026",
        "tags": [
          "sports",
          "basketball",
          "nba",
          "games"
        ],
        "outcome_1": "Hornets",
        "outcome_2": "Timberwolves",
        "group_item_title": "Spread -3.5",
        "event_title": "Hornets vs. Timberwolves",
        "event_icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/super+cool+basketball+in+red+and+blue+wow.png",
        "resolved_at": "",
        "winning_outcome": ""
      }
    },
    {
      "pnl": "21847823040",
      "volume": "71494998459",
      "roi": 88.64229944284625,
      "last_trade_at": "2026-04-06T01:24:19Z",
      "market": {
        "id": "1883510",
        "question": "Spread: Hornets (-4.5)",
        "slug": "nba-cha-min-2026-04-05-spread-away-4pt5",
        "start_date": "2026-04-05T22:12:38Z",
        "end_date": "2026-04-05T23:00:00Z",
        "icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/super+cool+basketball+in+red+and+blue+wow.png",
        "neg_risk": false,
        "event_slug": "nba-cha-min-2026-04-05",
        "series_slug": "nba-2026",
        "tags": [
          "sports",
          "basketball",
          "nba",
          "games"
        ],
        "outcome_1": "Hornets",
        "outcome_2": "Timberwolves",
        "group_item_title": "Spread -4.5",
        "event_title": "Hornets vs. Timberwolves",
        "event_icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/super+cool+basketball+in+red+and+blue+wow.png",
        "resolved_at": "",
        "winning_outcome": ""
      }
    },
    {
      "pnl": "61203112561",
      "volume": "256132274818",
      "roi": 62.207768015697674,
      "last_trade_at": "2026-04-06T01:23:59Z",
      "market": {
        "id": "1791503",
        "question": "Hornets vs. Timberwolves",
        "slug": "nba-cha-min-2026-04-05",
        "start_date": "2026-03-30T14:03:07Z",
        "end_date": "2026-04-05T23:00:00Z",
        "icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/super+cool+basketball+in+red+and+blue+wow.png",
        "neg_risk": false,
        "event_slug": "nba-cha-min-2026-04-05",
        "series_slug": "nba-2026",
        "tags": [
          "sports",
          "basketball",
          "nba",
          "games"
        ],
        "outcome_1": "Hornets",
        "outcome_2": "Timberwolves",
        "group_item_title": "",
        "event_title": "Hornets vs. Timberwolves",
        "event_icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/super+cool+basketball+in+red+and+blue+wow.png",
        "resolved_at": "2026-04-06T03:27:05Z",
        "winning_outcome": "Hornets"
      }
    },
    {
      "pnl": "0",
      "volume": "149999999997",
      "roi": 0,
      "last_trade_at": "2026-04-06T00:45:59Z",
      "market": {
        "id": "1791537",
        "question": "Lakers vs. Mavericks",
        "slug": "nba-lal-dal-2026-04-05",
        "start_date": "2026-03-30T14:02:51Z",
        "end_date": "2026-04-05T23:30:00Z",
        "icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/super+cool+basketball+in+red+and+blue+wow.png",
        "neg_risk": false,
        "event_slug": "nba-lal-dal-2026-04-05",
        "series_slug": "nba-2026",
        "tags": [
          "sports",
          "basketball",
          "nba",
          "games"
        ],
        "outcome_1": "Lakers",
        "outcome_2": "Mavericks",
        "group_item_title": "",
        "event_title": "Lakers vs. Mavericks",
        "event_icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/super+cool+basketball+in+red+and+blue+wow.png",
        "resolved_at": "",
        "winning_outcome": ""
      }
    }
  ],
  "total_count": 414
}
```
