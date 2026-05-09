# Trader Hourly Stats

Get hourly aggregated performance data for a specific trader. This includes PNL, market count, win count, and volume (taker/maker) grouped by hour. This is ideal for visualizing a trader's activity and performance trends over time.

**Endpoint:** `GET /v1/traders/:address/hourly_stats`

**Authentication:** API Key required (`X-PolyEdge-Key` header)

## Parameters

| Name | Type | Location | Description |
|---|---|---|---|
| `address` | `string` | Path | The EVM wallet address of the trader. |
| `tag` | `string` | Query | Filter by a specific market tag (e.g., `crypto`, `politics`). Default: `all`. |

## Returns

Returns a JSON object containing a `stats` array, where each element represents an hour of trading activity with metrics like `pnl`, `market_count`, `win_count`, and `volume`.

### Example JSON Response (for 0x492442eab586f242b53bda933fd5de859c8a3782)

```json
{
  "stats": [
    {
      "hour": "2026-05-09 01:00:00",
      "pnl": "0",
      "market_count": 1,
      "win_count": 0,
      "taker_volume": "111040237000",
      "maker_volume": "0",
      "volume": "111040237000"
    },
    {
      "hour": "2026-05-08 22:00:00",
      "pnl": "247303086429",
      "market_count": 1,
      "win_count": 1,
      "taker_volume": "176042750500",
      "maker_volume": "2473898",
      "volume": "176045224398"
    },
    {
      "hour": "2026-05-08 17:00:00",
      "pnl": "31095699070",
      "market_count": 2,
      "win_count": 2,
      "taker_volume": "31170868800",
      "maker_volume": "0",
      "volume": "31170868800"
    },
    {
      "hour": "2026-05-08 15:00:00",
      "pnl": "-3409387030",
      "market_count": 1,
      "win_count": 0,
      "taker_volume": "3360988800",
      "maker_volume": "0",
      "volume": "3360988800"
    },
    {
      "hour": "2026-05-08 00:00:00",
      "pnl": "258249451750",
      "market_count": 2,
      "win_count": 2,
      "taker_volume": "245776705400",
      "maker_volume": "0",
      "volume": "245776705400"
    }
  ]
}
```
