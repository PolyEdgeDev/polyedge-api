# Stream Orders

Subscribe to a real-time stream of Polymarket transactions via Server-Sent Events (SSE). This live feed delivers instant visibility into taker and maker activities, market context, and actionable pricing data, enabling automated trading strategies and real-time market monitoring.

**Endpoint:** `GET /v1/stream/orders`

**Authentication:** API Key required (`X-PolyEdge-Key` header)

## Parameters

| Name | Type | Location | Description |
|---|---|---|---|
| `traders` | `string` | Query | Comma-separated list of trader addresses to filter by. |
| `tags` | `string` | Query | Comma-separated list of market tags to filter by. |
| `series` | `string` | Query | Comma-separated list of series slugs to filter by. |
| `min_usdc / max_usdc` | `float` | Query | Filter orders by USDC amount. |
| `min_shares / max_shares` | `float` | Query | Filter orders by Shares amount. |
| `min_price / max_price` | `float` | Query | Filter orders by Price (0 to 100). |
| `format` | `string` | Query | (Optional) Output format. Set to `json` for traditional JSON objects. Defaults to a highly-optimized compact array format. |

## Returns

Yields a continuous SSE stream of transaction events. Each data payload represents a single matched transaction, comprehensively detailing the `market` context, the initiating `taker_order`, and the corresponding `maker_orders` filled in the transaction.

### Default Compact Format

```json
[
  "0xe0c60abbd20f29e8bdaa2d69991b317d8c42dc7634dd4de2f7326c3402fe4154",
  "2026-05-02 17:50:01.240Z",
  [
    2019741,
    "Exact Score: Arsenal FC 2 - 0 Fulham FC?",
    "epl-ars-ful-2026-05-02-exact-score-2-0",
    "2026-04-19 04:50:22Z",
    "2026-05-02 16:30:00Z",
    "",
    true,
    "epl-ars-ful-2026-05-02-exact-score",
    "premier-league-2025",
    [
      "sports",
      "premier-league",
      "EPL",
      "soccer",
      "games"
    ],
    "Yes",
    "No",
    "Exact Score: 2-0",
    "Arsenal FC vs. Fulham FC - Exact Score",
    "https://polymarket-upload.s3.us-east-2.amazonaws.com/Repetitive-markets/premier+league.jpg"
  ],
  [
    "BUY",
    [
      "0x091eff205c9852cce82b530c6c2c31e530c684bc",
      "0x091eFF205c9852cce82b530c6C2C31E530c684bc-1760301629595",
      "",
      "",
      "2025-10-12 20:40:30Z"
    ],
    "No",
    "62304111395591831104918002639206250250117980919923821107152148416926615102847",
    "316683000",
    "317000000",
    "9500",
    "0"
  ],
  [
    [
      "SELL",
      [
        "0xc095b5100653f0c34337c718f201dae96d762d65",
        "daddypow",
        "",
        "",
        "2026-01-26 14:00:19Z"
      ],
      "No",
      "62304111395591831104918002639206250250117980919923821107152148416926615102847",
      "87042870",
      "87130000",
      "0",
      "0"
    ],
    [
      "SELL",
      [
        "0x205b4e3ab6e69e2250ccfdcf4e4613287966d66a",
        "0x0770",
        "",
        "",
        "2025-10-30 06:57:26Z"
      ],
      "No",
      "62304111395591831104918002639206250250117980919923821107152148416926615102847",
      "229640130",
      "229870000",
      "0",
      "0"
    ]
  ]
]
```

### JSON Format (`?format=json`)

```json
{
  "tx_hash": "0x45143ba689a6d3f8cb6d478249721dff9a6d6cbdc2c12cd4a10efc085a06d598",
  "timestamp": "2026-05-02 17:50:05.442Z",
  "market": {
    "id": "2133861",
    "question": "Bitcoin Up or Down - May 2, 1:50PM-1:55PM ET",
    "slug": "btc-updown-5m-1777744200",
    "start_date": "2026-05-01 17:58:33Z",
    "end_date": "2026-05-02 17:55:00Z",
    "icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/BTC+fullsize.png",
    "neg_risk": false,
    "event_slug": "btc-updown-5m-1777744200",
    "series_slug": "btc-up-or-down-5m",
    "tags": [
      "crypto",
      "bitcoin",
      "crypto-prices",
      "recurring",
      "up-or-down",
      "hide-from-new",
      "5M"
    ],
    "outcome_1": "Up",
    "outcome_2": "Down",
    "group_item_title": "",
    "event_title": "Bitcoin Up or Down - May 2, 1:50PM-1:55PM ET",
    "event_icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/BTC+fullsize.png",
    "resolved_at": "",
    "winning_outcome": ""
  },
  "taker_order": {
    "side": "BUY",
    "usdc": "7200000",
    "shares": "15000000",
    "trader": {
      "address": "0xcf0890e7221e85dd30a66c0925508505d93fe61c",
      "name": "renaissance.rabbitry",
      "x_username": "",
      "profile_image": "https://polymarket-upload.s3.us-east-2.amazonaws.com/profile-image-7613035-32aca117-f907-446b-bf95-e173ba8e2d2a.png",
      "profile_created_at": "2026-04-24 03:34:03Z"
    },
    "outcome": "Down",
    "fee": "269560",
    "token_id": "21207956123825986727113579472415240935527888685470902301673436881474156752434",
    "fee_rate_bps": "0"
  },
  "maker_orders": [
    {
      "side": "BUY",
      "usdc": "2600000",
      "shares": "5000000",
      "trader": {
        "address": "0x19cd345dcd11a9f1aedb29fc45577d8d57a0af9a",
        "name": "aabbaabb",
        "x_username": "",
        "profile_image": "",
        "profile_created_at": "2026-01-15 11:48:01Z"
      },
      "outcome": "Up",
      "fee": "0",
      "token_id": "45760062745317116424990400090372075833187833548490808069174911314205240977245",
      "fee_rate_bps": "0"
    },
    {
      "side": "SELL",
      "usdc": "2400000",
      "shares": "5000000",
      "trader": {
        "address": "0x19cd345dcd11a9f1aedb29fc45577d8d57a0af9a",
        "name": "aabbaabb",
        "x_username": "",
        "profile_image": "",
        "profile_created_at": "2026-01-15 11:48:01Z"
      },
      "outcome": "Down",
      "fee": "0",
      "token_id": "21207956123825986727113579472415240935527888685470902301673436881474156752434",
      "fee_rate_bps": "0"
    },
    {
      "side": "BUY",
      "usdc": "2600000",
      "shares": "5000000",
      "trader": {
        "address": "0xca27147395f34657a7eabe87a897bacfa2bdced7",
        "name": "Crypto5min",
        "x_username": "",
        "profile_image": "",
        "profile_created_at": "2026-04-27 16:13:34Z"
      },
      "outcome": "Up",
      "fee": "0",
      "token_id": "45760062745317116424990400090372075833187833548490808069174911314205240977245",
      "fee_rate_bps": "0"
    }
  ]
}
```
