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
| `include_orders` | `bool` | Query | (Optional) If true, includes the trader's individual orders for each market. Requires `individual` or `pro` tier. |

## Returns

Returns a JSON object featuring a `history` array of market-specific performance data and a `total_count` for easy pagination.

### Example JSON Response (for 0x492442eab586f242b53bda933fd5de859c8a3782)

```json
{
  "history": [
    {
      "pnl": "0",
      "volume": "111040237000",
      "roi": 0,
      "last_trade_at": "2026-05-09T01:09:26Z",
      "market": {
        "id": "2182202",
        "question": "Spread: Spurs (-4.5)",
        "slug": "nba-sas-min-2026-05-08-spread-away-4pt5",
        "start_date": "2026-05-07T15:12:35Z",
        "end_date": "2026-05-09T01:30:00Z",
        "icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/super+cool+basketball+in+red+and+blue+wow.png",
        "neg_risk": false,
        "event_slug": "nba-sas-min-2026-05-08",
        "series_slug": "nba-2026",
        "tags": [
          "sports",
          "basketball",
          "nba",
          "games"
        ],
        "outcome_1": "Spurs",
        "outcome_2": "Timberwolves",
        "group_item_title": "Spread -4.5",
        "event_title": "Spurs vs. Timberwolves",
        "event_icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/super+cool+basketball+in+red+and+blue+wow.png",
        "resolved_at": "",
        "winning_outcome": ""
      },
      "orders": [
        {
          "time": "2026-05-09T01:09:26Z",
          "outcome": "Spurs",
          "side": "BUY",
          "price": "550000",
          "shares": "201891340000",
          "usdc": "111040237000",
          "order_hash": "",
          "is_taker": true,
          "token_id": "54541580013880432288689166707450886218131241193556168813835256680396626669061",
          "fee": "1499043190"
        }
      ]
    },
    {
      "pnl": "247303086429",
      "volume": "176045224398",
      "roi": 140.47702076251807,
      "last_trade_at": "2026-05-08T22:47:24Z",
      "market": {
        "id": "2144505",
        "question": "Knicks vs. 76ers",
        "slug": "nba-nyk-phi-2026-05-08",
        "start_date": "2026-05-03T04:03:57Z",
        "end_date": "2026-05-08T23:00:00Z",
        "icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/super+cool+basketball+in+red+and+blue+wow.png",
        "neg_risk": false,
        "event_slug": "nba-nyk-phi-2026-05-08",
        "series_slug": "nba-2026",
        "tags": [
          "sports",
          "basketball",
          "nba",
          "games"
        ],
        "outcome_1": "Knicks",
        "outcome_2": "76ers",
        "group_item_title": "",
        "event_title": "Knicks vs. 76ers",
        "event_icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/super+cool+basketball+in+red+and+blue+wow.png",
        "resolved_at": "2026-05-09T03:36:14Z",
        "winning_outcome": "Knicks"
      },
      "orders": [
        {
          "time": "2026-05-08T22:45:13Z",
          "outcome": "Knicks",
          "side": "BUY",
          "price": "410000",
          "shares": "6033897",
          "usdc": "2473898",
          "order_hash": "",
          "is_taker": false,
          "token_id": "94114332208393053984697876638000782163415853939567607558460677381632263350064",
          "fee": "0"
        },
        {
          "time": "2026-05-08T22:45:13Z",
          "outcome": "Knicks",
          "side": "BUY",
          "price": "412816",
          "shares": "426443100000",
          "usdc": "176042750500",
          "order_hash": "",
          "is_taker": true,
          "token_id": "94114332208393053984697876638000782163415853939567607558460677381632263350064",
          "fee": "3100823070"
        }
      ]
    },
    {
      "pnl": "19724647360",
      "volume": "19151800800",
      "roi": 102.99108457727903,
      "last_trade_at": "2026-05-08T17:19:32Z",
      "market": {
        "id": "2178147",
        "question": "Knicks vs. 76ers: O/U 213.5",
        "slug": "nba-nyk-phi-2026-05-08-total-213pt5",
        "start_date": "2026-05-07T00:12:18Z",
        "end_date": "2026-05-08T23:00:00Z",
        "icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/super+cool+basketball+in+red+and+blue+wow.png",
        "neg_risk": false,
        "event_slug": "nba-nyk-phi-2026-05-08",
        "series_slug": "nba-2026",
        "tags": [
          "sports",
          "basketball",
          "nba",
          "games"
        ],
        "outcome_1": "Over",
        "outcome_2": "Under",
        "group_item_title": "O/U 213.5",
        "event_title": "Knicks vs. 76ers",
        "event_icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/super+cool+basketball+in+red+and+blue+wow.png",
        "resolved_at": "2026-05-09T02:53:46Z",
        "winning_outcome": "Under"
      },
      "orders": [
        {
          "time": "2026-05-08T17:19:32Z",
          "outcome": "Under",
          "side": "BUY",
          "price": "488939",
          "shares": "39170080000",
          "usdc": "19151800800",
          "order_hash": "",
          "is_taker": true,
          "token_id": "70606341940599565553165909980851478060174683564294395852804720600623835314396",
          "fee": "293631840"
        }
      ]
    },
    {
      "pnl": "11371051710",
      "volume": "12019068000",
      "roi": 94.6084314524221,
      "last_trade_at": "2026-05-08T17:19:18Z",
      "market": {
        "id": "2178498",
        "question": "Knicks vs. 76ers: O/U 214.5",
        "slug": "nba-nyk-phi-2026-05-08-total-214pt5",
        "start_date": "2026-05-07T02:12:35Z",
        "end_date": "2026-05-08T23:00:00Z",
        "icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/super+cool+basketball+in+red+and+blue+wow.png",
        "neg_risk": false,
        "event_slug": "nba-nyk-phi-2026-05-08",
        "series_slug": "nba-2026",
        "tags": [
          "sports",
          "basketball",
          "nba",
          "games"
        ],
        "outcome_1": "Over",
        "outcome_2": "Under",
        "group_item_title": "O/U 214.5",
        "event_title": "Knicks vs. 76ers",
        "event_icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/super+cool+basketball+in+red+and+blue+wow.png",
        "resolved_at": "2026-05-09T02:18:48Z",
        "winning_outcome": "Under"
      },
      "orders": [
        {
          "time": "2026-05-08T17:19:18Z",
          "outcome": "Under",
          "side": "BUY",
          "price": "510000",
          "shares": "23566800000",
          "usdc": "12019068000",
          "order_hash": "",
          "is_taker": true,
          "token_id": "66305325780738472599893157863635112512423545043494735489666080518213717587135",
          "fee": "176680290"
        }
      ]
    },
    {
      "pnl": "-3409387030",
      "volume": "3360988800",
      "roi": -101.43999974055254,
      "last_trade_at": "2026-05-08T15:58:01Z",
      "market": {
        "id": "2181859",
        "question": "Zalgiris Kaunas vs. Fenerbahce",
        "slug": "euroleague-kaunas-fenerbah-2026-05-08",
        "start_date": "2026-05-07T14:02:17Z",
        "end_date": "2026-05-08T17:00:00Z",
        "icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/euroleague-basketball-8fab4f41ec.png",
        "neg_risk": false,
        "event_slug": "euroleague-kaunas-fenerbah-2026-05-08",
        "series_slug": "euroleague-basketball",
        "tags": [
          "sports",
          "basketball",
          "games",
          "euroleague-basketball"
        ],
        "outcome_1": "Zalgiris Kaunas",
        "outcome_2": "Fenerbahce",
        "group_item_title": "",
        "event_title": "Zalgiris Kaunas vs. Fenerbahce",
        "event_icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/euroleague-basketball-8fab4f41ec.png",
        "resolved_at": "2026-05-08T23:21:02Z",
        "winning_outcome": "Fenerbahce"
      },
      "orders": [
        {
          "time": "2026-05-08T15:58:01Z",
          "outcome": "Zalgiris Kaunas",
          "side": "BUY",
          "price": "520000",
          "shares": "6463440000",
          "usdc": "3360988800",
          "order_hash": "",
          "is_taker": true,
          "token_id": "41016158919830517829788842620150447346829980352256776266068793452602708570622",
          "fee": "48398230"
        }
      ]
    }
  ],
  "total_count": 590
}
```
