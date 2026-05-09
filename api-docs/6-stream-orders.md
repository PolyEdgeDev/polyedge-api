# Stream Orders

Subscribe to a real-time stream of Polymarket transactions via Server-Sent Events (SSE). This live feed delivers instant visibility into taker and maker activities, market context, and actionable pricing data, enabling automated trading strategies and real-time market monitoring.

**Endpoint:** `GET /v1/stream/orders`

**Authentication:** API Key required (`X-PolyEdge-Key` header)

**Access Tier:** Available on all tiers. However, the `trial` tier is limited to a maximum of 3 hours of streaming per day.

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
  "0xff17038dc5a70432c7b4ac9a22a482151130d582203537aa07f52c7dc18a15fe",
  "2026-05-09 05:00:41.216Z",
  [
    2187496,
    "Bitcoin Up or Down - May 9, 1:00AM-1:05AM ET",
    "btc-updown-5m-1778302800",
    "2026-05-08 05:07:54Z",
    "2026-05-09 05:05:00Z",
    "https://polymarket-upload.s3.us-east-2.amazonaws.com/BTC+fullsize.png",
    false,
    "btc-updown-5m-1778302800",
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
    "Bitcoin Up or Down - May 9, 1:00AM-1:05AM ET",
    "https://polymarket-upload.s3.us-east-2.amazonaws.com/BTC+fullsize.png"
  ],
  [
    "BUY",
    [
      "0x50ea9d870f0347402afbf9d42713bb857bda5963",
      "Garvy",
      "",
      "",
      "2026-03-30 17:23:37Z"
    ],
    "Up",
    "29621013013942210911495728215829193629091423082605380737902746611030935719024",
    "6900000",
    "17250000",
    "289800",
    "0"
  ],
  [
    [
      "BUY",
      [
        "0xfab2260cb5c930e952b13d88b69147deba029490",
        "0xFab2260cB5C930E952B13D88b69147debA029490-1764923713317",
        "",
        "",
        "2025-12-05 08:35:13Z"
      ],
      "Down",
      "94711538671694046667604595069629905241108266441829368015566460611478191217594",
      "10350000",
      "17250000",
      "0",
      "0"
    ]
  ]
]
```

### JSON Format (`?format=json`)

```json
{
  "tx_hash": "0x3ce5a9d8f369cecb65ea6c596ae280e6ab3ef5a0eaaace2a9c227135af4e75fe",
  "timestamp": "2026-05-09 05:00:43.871Z",
  "market": {
    "id": "2187496",
    "question": "Bitcoin Up or Down - May 9, 1:00AM-1:05AM ET",
    "slug": "btc-updown-5m-1778302800",
    "start_date": "2026-05-08 05:07:54Z",
    "end_date": "2026-05-09 05:05:00Z",
    "icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/BTC+fullsize.png",
    "neg_risk": false,
    "event_slug": "btc-updown-5m-1778302800",
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
    "event_title": "Bitcoin Up or Down - May 9, 1:00AM-1:05AM ET",
    "event_icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/BTC+fullsize.png",
    "resolved_at": "",
    "winning_outcome": ""
  },
  "taker_order": {
    "side": "SELL",
    "usdc": "7714000",
    "shares": "20300000",
    "trader": {
      "address": "0x069cd074ad3bcfbd6fd82478aad02916bff5cf63",
      "name": "Under-btc-low",
      "x_username": "",
      "profile_image": "",
      "profile_created_at": "2026-04-18 17:51:33Z"
    },
    "outcome": "Up",
    "fee": "334780",
    "token_id": "29621013013942210911495728215829193629091423082605380737902746611030935719024",
    "fee_rate_bps": "0"
  },
  "maker_orders": [
    {
      "side": "BUY",
      "usdc": "7714000",
      "shares": "20300000",
      "trader": {
        "address": "0xb27bc932bf8110d8f78e55da7d5f0497a18b5b82",
        "name": "0xB27BC932bf8110D8F78e55da7d5f0497A18B5b82-1772569391020",
        "x_username": "",
        "profile_image": "",
        "profile_created_at": "2026-03-03 20:23:11Z"
      },
      "outcome": "Up",
      "fee": "0",
      "token_id": "29621013013942210911495728215829193629091423082605380737902746611030935719024",
      "fee_rate_bps": "0"
    }
  ]
}
```
