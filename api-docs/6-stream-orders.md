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
  "0xa4cb4edd2b253bf206185f378de00b5ab673e9738db4be9a875b91f2708bd218",
  "2026-05-01 10:27:49.265Z",
  [
    2124230,
    "Bitcoin Up or Down - May 1, 6:25AM-6:30AM ET",
    "btc-updown-5m-1777631100",
    "2026-04-30 10:34:13Z",
    "2026-05-01 10:30:00Z",
    "https://polymarket-upload.s3.us-east-2.amazonaws.com/BTC+fullsize.png",
    false,
    "btc-updown-5m-1777631100",
    "btc-up-or-down-5m",
    [
      "crypto",
      "bitcoin",
      "crypto-prices",
      "recurring",
      "up-or-down",
      "hide-from-new",
      "5M"
    ],
    "Up",
    "Down",
    "",
    "Bitcoin Up or Down - May 1, 6:25AM-6:30AM ET",
    "https://polymarket-upload.s3.us-east-2.amazonaws.com/BTC+fullsize.png"
  ],
  [
    "BUY",
    [
      "0x276268414eb408ff1d58ea0770512df8ff45d4ad",
      "0x276268414eB408ff1d58eA0770512dF8Ff45d4aD-1771826590111",
      "",
      "",
      "2026-02-23 06:03:10Z"
    ],
    "Down",
    "7491152101074765299681794649963044190291076443047675243198531510303424916695",
    "4999960",
    "5102000",
    "7190",
    "0"
  ],
  [
    [
      "BUY",
      [
        "0x3f8eaec09eecdc78353c7c7eab4e8d2029eb0404",
        "Vauiskls",
        "",
        "",
        "2026-04-27 00:24:20Z"
      ],
      "Up",
      "88337889111120966242457715509820887930620103091779273690695637686484547813270",
      "64400",
      "3220000",
      "0",
      "0"
    ],
    [
      "BUY",
      [
        "0x3f8eaec09eecdc78353c7c7eab4e8d2029eb0404",
        "Vauiskls",
        "",
        "",
        "2026-04-27 00:24:20Z"
      ],
      "Up",
      "88337889111120966242457715509820887930620103091779273690695637686484547813270",
      "37640",
      "1882000",
      "0",
      "0"
    ]
  ]
]
```

### JSON Format (`?format=json`)

```json
{
  "tx_hash": "0xbe526fa4cf403a892158d9cba076001d959ed8e8cc9f9a90b1730c18b7da5f9c",
  "timestamp": "2026-05-01 10:27:51.575Z",
  "market": {
    "id": "1138908",
    "question": "Masoud Pezeshkian out by June 30?",
    "slug": "masoud-pezeshkian-out-by-june-30-242-112",
    "start_date": "2026-01-08 23:55:49Z",
    "end_date": "2026-06-30 00:00:00Z",
    "icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/masoud-pezeshkian-out-by-Q_TA9J6kvvBo.jpg",
    "neg_risk": false,
    "event_slug": "masoud-pezeshkian-out-by",
    "series_slug": "",
    "tags": [
      "politics",
      "iran",
      "middle-east",
      "geopolitics",
      "world"
    ],
    "outcome_1": "Yes",
    "outcome_2": "No",
    "group_item_title": "June 30",
    "event_title": "Masoud Pezeshkian out by...?",
    "event_icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/masoud-pezeshkian-out-by-Q_TA9J6kvvBo.jpg",
    "resolved_at": "",
    "winning_outcome": ""
  },
  "taker_order": {
    "side": "BUY",
    "usdc": "29370000",
    "shares": "33000000",
    "trader": {
      "address": "0xaa7575ba25247c8eb4c23dfeb39b0237fb59a864",
      "name": "0xAa7575ba25247c8eb4C23DFeB39b0237fb59a864-1749118418017",
      "x_username": "",
      "profile_image": "",
      "profile_created_at": "2025-06-05 10:13:39Z"
    },
    "outcome": "No",
    "fee": "129220",
    "token_id": "25886853945381968867657138521362004493559548349560603657828631114500742919712",
    "fee_rate_bps": "0"
  },
  "maker_orders": [
    {
      "side": "SELL",
      "usdc": "10680000",
      "shares": "12000000",
      "trader": {
        "address": "0x4e84ce1599d3d0272932a729c2a3310b734bef69",
        "name": "spartafishing",
        "x_username": "",
        "profile_image": "https://polymarket-upload.s3.us-east-2.amazonaws.com/profile-image-3519727-bb5e1f90-a123-4865-b0a6-8b1742eafb32.JPG",
        "profile_created_at": "2025-10-12 06:40:28Z"
      },
      "outcome": "No",
      "fee": "0",
      "token_id": "25886853945381968867657138521362004493559548349560603657828631114500742919712",
      "fee_rate_bps": "0"
    },
    {
      "side": "BUY",
      "usdc": "1100000",
      "shares": "10000000",
      "trader": {
        "address": "0x140891ee5c1214859198b80f0a5a4880ba57b4f8",
        "name": "tthahaha",
        "x_username": "",
        "profile_image": "",
        "profile_created_at": "2026-01-30 09:04:23Z"
      },
      "outcome": "Yes",
      "fee": "0",
      "token_id": "53635188626002877322485801066091456682566087831849315004624162520928163511935",
      "fee_rate_bps": "0"
    },
    {
      "side": "SELL",
      "usdc": "9790000",
      "shares": "11000000",
      "trader": {
        "address": "0x4e84ce1599d3d0272932a729c2a3310b734bef69",
        "name": "spartafishing",
        "x_username": "",
        "profile_image": "https://polymarket-upload.s3.us-east-2.amazonaws.com/profile-image-3519727-bb5e1f90-a123-4865-b0a6-8b1742eafb32.JPG",
        "profile_created_at": "2025-10-12 06:40:28Z"
      },
      "outcome": "No",
      "fee": "0",
      "token_id": "25886853945381968867657138521362004493559548349560603657828631114500742919712",
      "fee_rate_bps": "0"
    }
  ]
}
```
