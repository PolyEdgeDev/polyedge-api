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

### Example JSON Response (for Trader: 0x8a6c6811e8937f9e8afc1b9249fa540262c30b3f, Market: 1858809)

```json
{
  "orders": [
    {
      "time": "2026-04-06T02:25:29Z",
      "outcome": "Rockets",
      "side": "BUY",
      "price": "478541",
      "shares": "10448408978",
      "usdc": "4999999999",
      "order_hash": "0x25150adb61c78c2fe4bf9a025ad1b9fac0bf9cbb3a8904c74430905cb2a008ce",
      "is_taker": true,
      "fill_count": 1,
      "token_id": "78907585036215681443680219168838316352537740030793428756821532285400412083533"
    },
    {
      "time": "2026-04-06T02:25:41Z",
      "outcome": "Rockets",
      "side": "BUY",
      "price": "490377",
      "shares": "10196233400",
      "usdc": "5000000000",
      "order_hash": "0xd28535f6a2f61e67bc193db8d485469b3169aaaeba1e107fb04aea7075fcd5de",
      "is_taker": true,
      "fill_count": 1,
      "token_id": "78907585036215681443680219168838316352537740030793428756821532285400412083533"
    },
    {
      "time": "2026-04-06T02:25:55Z",
      "outcome": "Rockets",
      "side": "BUY",
      "price": "491157",
      "shares": "10180037400",
      "usdc": "5000000000",
      "order_hash": "0xe69fee7a435b843262dbfc90efb9fb5ad3eb5c5705ea3e4fd1bc8c67c786ab4f",
      "is_taker": true,
      "fill_count": 1,
      "token_id": "78907585036215681443680219168838316352537740030793428756821532285400412083533"
    }
  ]
}
```
