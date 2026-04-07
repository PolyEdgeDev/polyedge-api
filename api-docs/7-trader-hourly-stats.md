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

### Example JSON Response (for 0x2b3ff45c91540e46fae1e0c72f61f4b049453446)

```json
{
  "stats": [
    {
      "hour": "2026-04-06 18:00:00",
      "pnl": "349839124594",
      "market_count": 1,
      "win_count": 1,
      "taker_volume": "995695969998",
      "maker_volume": "0",
      "volume": "995695969998"
    },
    {
      "hour": "2026-04-05 19:00:00",
      "pnl": "99364860916",
      "market_count": 1,
      "win_count": 1,
      "taker_volume": "72345918100",
      "maker_volume": "88968339415",
      "volume": "161314257515"
    },
    {
      "hour": "2026-04-05 00:00:00",
      "pnl": "134120706200",
      "market_count": 2,
      "win_count": 2,
      "taker_volume": "124597833800",
      "maker_volume": "0",
      "volume": "124597833800"
    },
    {
      "hour": "2026-04-04 23:00:00",
      "pnl": "-49999999999",
      "market_count": 1,
      "win_count": 0,
      "taker_volume": "49999999999",
      "maker_volume": "0",
      "volume": "49999999999"
    },
    {
      "hour": "2026-04-03 23:00:00",
      "pnl": "128852598730",
      "market_count": 2,
      "win_count": 2,
      "taker_volume": "209480094395",
      "maker_volume": "519896000",
      "volume": "209999990395"
    }
  ]
}
```
