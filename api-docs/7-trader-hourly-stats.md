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

### Example JSON Response (for 0x986b16df5791e7dc4c6f6ef3524eff0efe6812e9)

```json
{
  "stats": [
    {
      "hour": "2026-05-02 01:00:00",
      "pnl": "29378218577",
      "market_count": 1,
      "win_count": 1,
      "taker_volume": "5773271400",
      "maker_volume": "19332289649",
      "volume": "25105561049"
    },
    {
      "hour": "2026-05-01 22:00:00",
      "pnl": "-28712595340",
      "market_count": 1,
      "win_count": 0,
      "taker_volume": "28263210300",
      "maker_volume": "0",
      "volume": "28263210300"
    },
    {
      "hour": "2026-05-01 18:00:00",
      "pnl": "55862232504",
      "market_count": 2,
      "win_count": 1,
      "taker_volume": "23587629500",
      "maker_volume": "47618838275",
      "volume": "71206467775"
    },
    {
      "hour": "2026-04-30 16:00:00",
      "pnl": "160674091482",
      "market_count": 4,
      "win_count": 3,
      "taker_volume": "38366831600",
      "maker_volume": "72641301356",
      "volume": "111008132956"
    },
    {
      "hour": "2026-04-30 14:00:00",
      "pnl": "48281474520",
      "market_count": 1,
      "win_count": 1,
      "taker_volume": "51032951100",
      "maker_volume": "0",
      "volume": "51032951100"
    }
  ]
}
```
