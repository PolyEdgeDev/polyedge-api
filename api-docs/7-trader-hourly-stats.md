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

### Example JSON Response (for 0xfe787d2da716d60e8acff57fb87eb13cd4d10319)

```json
{
  "stats": [
    {
      "hour": "2026-05-01 10:00:00",
      "pnl": "-653082962",
      "market_count": 7,
      "win_count": 2,
      "taker_volume": "7604354199",
      "maker_volume": "24315246175",
      "volume": "31919600374"
    },
    {
      "hour": "2026-05-01 09:00:00",
      "pnl": "435292596",
      "market_count": 5,
      "win_count": 3,
      "taker_volume": "1234983100",
      "maker_volume": "14686137127",
      "volume": "15921120227"
    },
    {
      "hour": "2026-05-01 08:00:00",
      "pnl": "-40831383",
      "market_count": 1,
      "win_count": 0,
      "taker_volume": "240391500",
      "maker_volume": "6208073414",
      "volume": "6448464914"
    },
    {
      "hour": "2026-05-01 07:00:00",
      "pnl": "313344610",
      "market_count": 5,
      "win_count": 2,
      "taker_volume": "8714584189",
      "maker_volume": "41026333194",
      "volume": "49740917383"
    },
    {
      "hour": "2026-05-01 05:00:00",
      "pnl": "-285570387",
      "market_count": 1,
      "win_count": 0,
      "taker_volume": "1891157400",
      "maker_volume": "5121095650",
      "volume": "7012253050"
    }
  ]
}
```
