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

### Example JSON Response (for Trader: 0x986b16df5791e7dc4c6f6ef3524eff0efe6812e9, Market: 2134185)

```json
{
  "orders": [
    {
      "time": "2026-05-02T00:17:28Z",
      "outcome": "Under",
      "side": "BUY",
      "price": "460000",
      "shares": "247000000",
      "usdc": "113620000",
      "order_hash": "",
      "is_taker": false,
      "fill_count": 1,
      "token_id": "84049545167949902865364923335859843787927753544064783266584167686779289846763",
      "fee": "0"
    },
    {
      "time": "2026-05-02T00:17:28Z",
      "outcome": "Under",
      "side": "BUY",
      "price": "460000",
      "shares": "12550590000",
      "usdc": "5773271400",
      "order_hash": "",
      "is_taker": true,
      "fill_count": 1,
      "token_id": "84049545167949902865364923335859843787927753544064783266584167686779289846763",
      "fee": "0"
    },
    {
      "time": "2026-05-02T00:17:28Z",
      "outcome": "Under",
      "side": "BUY",
      "price": "460000",
      "shares": "41779716616",
      "usdc": "19218669649",
      "order_hash": "",
      "is_taker": false,
      "fill_count": 1,
      "token_id": "84049545167949902865364923335859843787927753544064783266584167686779289846763",
      "fee": "0"
    }
  ]
}
```
