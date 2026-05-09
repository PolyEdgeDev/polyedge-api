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

### Example JSON Response (for Trader: 0x492442eab586f242b53bda933fd5de859c8a3782, Market: 2182202)

```json
{
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
}
```
