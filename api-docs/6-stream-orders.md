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
  "0xe1c7fd21906a0a4b664d9e71d883463d8e9cc0a9c644a9454d55617e0f627ab3",
  "2026-04-06 03:36:29Z",
  [
    1791549,
    "Rockets vs. Warriors",
    "nba-hou-gsw-2026-04-05",
    "2026-03-30 14:03:07Z",
    "2026-04-06 02:00:00Z",
    "https://polymarket-upload.s3.us-east-2.amazonaws.com/super+cool+basketball+in+red+and+blue+wow.png",
    false,
    "nba-hou-gsw-2026-04-05",
    "nba-2026",
    [
      "sports",
      "basketball",
      "nba",
      "games"
    ],
    "Rockets",
    "Warriors",
    "",
    "Rockets vs. Warriors",
    "https://polymarket-upload.s3.us-east-2.amazonaws.com/super+cool+basketball+in+red+and+blue+wow.png"
  ],
  [
    "SELL",
    [
      "0x96dd86f5cd9eb638defd1402ee5d2f9268f817fe",
      "bwho",
      "",
      "https://polymarket-upload.s3.us-east-2.amazonaws.com/profile-image-6694534-31362b0d-2c83-4504-ab01-f9e793143bb3.webp",
      "2026-03-14 05:29:19Z"
    ],
    "Warriors",
    "69471191026731922691690135719639615375023736950535506711537640368829468201458",
    "1362902000",
    "6408800000",
    "32191970",
    "1000"
  ],
  [
    [
      "SELL",
      [
        "0xe9cbb1c9b3f7f411dd4fdf2ea7afa780c8b4d096",
        "lameloballer",
        "",
        "",
        "2021-01-17 00:46:58Z"
      ],
      "Rockets",
      "32148469915004063556957721403141755650156885935319732065933001335332655819597",
      "334791600",
      "429220000",
      "0",
      "1000"
    ],
    [
      "BUY",
      [
        "0x68146921df11eab44296dc4e58025ca84741a9e7",
        "LynxTitan",
        "",
        "",
        "2025-12-12 05:09:42Z"
      ],
      "Warriors",
      "69471191026731922691690135719639615375023736950535506711537640368829468201458",
      "110000000",
      "500000000",
      "0",
      "1000"
    ],
    [
      "BUY",
      [
        "0x7edb8d9e184f9747d6957dc3d54e1e8a0d6e7993",
        "jmtest",
        "",
        "",
        "2025-12-13 10:59:50Z"
      ],
      "Warriors",
      "69471191026731922691690135719639615375023736950535506711537640368829468201458",
      "44000000",
      "200000000",
      "0",
      "1000"
    ],
    [
      "SELL",
      [
        "0xc4ef43a6c7b5b0b2d92a756fea9238c888281ce5",
        "",
        "",
        "",
        ""
      ],
      "Rockets",
      "32148469915004063556957721403141755650156885935319732065933001335332655819597",
      "449420400",
      "576180000",
      "0",
      "1000"
    ],
    [
      "BUY",
      [
        "0xde0463ea7f611b065e8ab06bbfbddad75e6dfa37",
        "mwenya",
        "",
        "",
        "2024-10-10 10:15:39Z"
      ],
      "Warriors",
      "69471191026731922691690135719639615375023736950535506711537640368829468201458",
      "420000000",
      "2000000000",
      "0",
      "1000"
    ],
    [
      "BUY",
      [
        "0xa31279ee3e489b094e5ea3b63162134a61675adf",
        "sideproject",
        "",
        "",
        "2025-12-15 22:41:10Z"
      ],
      "Warriors",
      "69471191026731922691690135719639615375023736950535506711537640368829468201458",
      "2100000",
      "10000000",
      "0",
      "1000"
    ],
    [
      "BUY",
      [
        "0x68146921df11eab44296dc4e58025ca84741a9e7",
        "LynxTitan",
        "",
        "",
        "2025-12-12 05:09:42Z"
      ],
      "Warriors",
      "69471191026731922691690135719639615375023736950535506711537640368829468201458",
      "105000000",
      "500000000",
      "0",
      "1000"
    ],
    [
      "BUY",
      [
        "0xd89609b183adc42b4c623a1b3ac45126031f9815",
        "gaoshangliushui",
        "",
        "",
        "2026-03-06 12:46:22Z"
      ],
      "Warriors",
      "69471191026731922691690135719639615375023736950535506711537640368829468201458",
      "10500000",
      "50000000",
      "0",
      "1000"
    ],
    [
      "BUY",
      [
        "0x68146921df11eab44296dc4e58025ca84741a9e7",
        "LynxTitan",
        "",
        "",
        "2025-12-12 05:09:42Z"
      ],
      "Warriors",
      "69471191026731922691690135719639615375023736950535506711537640368829468201458",
      "78750000",
      "375000000",
      "0",
      "1000"
    ],
    [
      "BUY",
      [
        "0x2d90f5a2e4a03e42a1186f759ff3e051e0aa1310",
        "Aceplus2",
        "",
        "",
        "2025-11-03 22:00:12Z"
      ],
      "Warriors",
      "69471191026731922691690135719639615375023736950535506711537640368829468201458",
      "371364000",
      "1768400000",
      "0",
      "1000"
    ]
  ]
]
```

### JSON Format (`?format=json`)

```json
{
  "tx_hash": "0x2aaacf76266d8b3bd59c469315e72f353836dadfb22be1660bb089057d4a44fd",
  "timestamp": "2026-04-06 03:36:32Z",
  "market": {
    "id": "1871234",
    "question": "Bitcoin Up or Down - April 5, 11:35PM-11:40PM ET",
    "slug": "btc-updown-5m-1775446500",
    "start_date": "2026-04-05 03:43:12Z",
    "end_date": "2026-04-06 03:40:00Z",
    "icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/BTC+fullsize.png",
    "neg_risk": false,
    "event_slug": "btc-updown-5m-1775446500",
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
    "event_title": "Bitcoin Up or Down - April 5, 11:35PM-11:40PM ET",
    "event_icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/BTC+fullsize.png",
    "resolved_at": "",
    "winning_outcome": ""
  },
  "taker_order": {
    "side": "SELL",
    "usdc": "896700",
    "shares": "1470000",
    "trader": {
      "address": "0x58fcf1ebc9e29ca6746d3bef3116b171d8cd77ed",
      "name": "lkhagii765",
      "x_username": "",
      "profile_image": "",
      "profile_created_at": "2026-03-24 03:27:26Z"
    },
    "outcome": "Up",
    "fee": "25170",
    "token_id": "46645317725677844261247943895982148851563246385838622612003960053458514081961",
    "fee_rate_bps": "1000"
  },
  "maker_orders": [
    {
      "side": "BUY",
      "usdc": "896700",
      "shares": "1470000",
      "trader": {
        "address": "0x7cd2f2e87395e8be53a7a006caf09baad9603079",
        "name": "dotProduct66",
        "x_username": "",
        "profile_image": "",
        "profile_created_at": "2026-03-27 08:26:24Z"
      },
      "outcome": "Up",
      "fee": "0",
      "token_id": "46645317725677844261247943895982148851563246385838622612003960053458514081961",
      "fee_rate_bps": "1000"
    }
  ]
}
```
