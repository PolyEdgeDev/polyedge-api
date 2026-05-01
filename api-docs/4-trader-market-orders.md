# Trader Market Orders

Retrieve a comprehensive list of individual orders placed by a specific trader within a single market. This endpoint provides granular details on trading activity, including execution timing, price, size, and liquidity provision (maker/taker status), offering deep insights into their trading strategy.

**Endpoint:** `GET /v1/traders/:address/markets/:id/orders`

**Authentication:** API Key required (`X-PolyEdge-Key` header)

## Parameters

| Name | Type | Location | Description |
|---|---|---|---|
| `address` | `string` | Path | The EVM wallet address of the trader. |
| `id` | `int64` | Path | The specific market ID. |

## Returns

Returns a JSON object containing an `orders` array. Each order specifies the execution timestamp, side (`BUY`/`SELL`), price, USDC volume, share amount, order hash, and the number of matched counter-orders.

### Example JSON Response (for Trader: 0xfe787d2da716d60e8acff57fb87eb13cd4d10319, Market: 2125937)

```json
{
  "orders": [
    {
      "time": "2026-05-01T09:11:42Z",
      "outcome": "Rinky Hijikata",
      "side": "BUY",
      "price": "290000",
      "shares": "1059460000",
      "usdc": "307243400",
      "order_hash": "",
      "is_taker": true,
      "fill_count": 1,
      "token_id": "50308069819514591694410353198610550684178437843262300545501062969968061672734"
    },
    {
      "time": "2026-05-01T09:12:04Z",
      "outcome": "Rinky Hijikata",
      "side": "BUY",
      "price": "280142",
      "shares": "9860844",
      "usdc": "2762445",
      "order_hash": "",
      "is_taker": false,
      "fill_count": 1,
      "token_id": "50308069819514591694410353198610550684178437843262300545501062969968061672734"
    },
    {
      "time": "2026-05-01T09:15:10Z",
      "outcome": "Zizou Bergs",
      "side": "BUY",
      "price": "710000",
      "shares": "401241378",
      "usdc": "284881379",
      "order_hash": "",
      "is_taker": false,
      "fill_count": 1,
      "token_id": "236614268829353449034473236368775890074884866010611572612502334795854359928"
    }
  ]
}
```
