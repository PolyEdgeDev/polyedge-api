# Trader Markets

Retrieve a history of all markets where a specific trader has been active. For each market, it provides the trader's performance summary, including PNL, ROI, and total volume. This is useful for analyzing a trader's focus areas and historical success rate.

**Endpoint:** `GET /v1/traders/:address/markets`

**Authentication:** API Key required (`X-PolyEdge-Key` header)

## Parameters

| Name | Type | Location | Description |
|---|---|---|---|
| `address` | `string` | Path | The EVM wallet address of the trader. |
| `limit` | `int` | Query | Number of markets to return. Default: `20`, Max: `100`. |
| `offset` | `int` | Query | Pagination offset. Default: `0`. |
| `is_active` | `bool` | Query | Filter by active (unresolved) markets only. If omitted, returns both active and resolved markets. |

## Returns

Returns a JSON object featuring a `history` array of market-specific performance data and a `total_count` for easy pagination.

### Example JSON Response (for 0xfe787d2da716d60e8acff57fb87eb13cd4d10319)

```json
{
  "history": [
    {
      "pnl": "-56796781",
      "volume": "9073401891",
      "roi": -1.2414962439098571,
      "last_trade_at": "2026-05-01T10:27:28Z",
      "market": {
        "id": "2125937",
        "question": "Aix en Provence: Zizou Bergs vs Rinky Hijikata",
        "slug": "atp-bergs-hijikat-2026-05-01",
        "start_date": "2026-04-30T16:04:55Z",
        "end_date": "2026-05-08T09:00:00Z",
        "icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/atp-tour-b4390c4fb8.jpg",
        "neg_risk": false,
        "event_slug": "atp-bergs-hijikat-2026-05-01",
        "series_slug": "atp",
        "tags": [
          "sports",
          "tennis",
          "games"
        ],
        "outcome_1": "Zizou Bergs",
        "outcome_2": "Rinky Hijikata",
        "group_item_title": "",
        "event_title": "Aix en Provence: Zizou Bergs vs Rinky Hijikata",
        "event_icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/atp-tour-b4390c4fb8.jpg",
        "resolved_at": "",
        "winning_outcome": ""
      }
    },
    {
      "pnl": "-144381537",
      "volume": "2827872798",
      "roi": -29.083818701405406,
      "last_trade_at": "2026-05-01T10:27:16Z",
      "market": {
        "id": "2116700",
        "question": "Ostrava: Marco Cecchinato vs Raul Brancaccio",
        "slug": "atp-cecchin-brancac-2026-05-01",
        "start_date": "2026-04-29T16:05:30Z",
        "end_date": "2026-05-08T08:00:00Z",
        "icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/atp-tour-b4390c4fb8.jpg",
        "neg_risk": false,
        "event_slug": "atp-cecchin-brancac-2026-05-01",
        "series_slug": "atp",
        "tags": [
          "sports",
          "tennis",
          "games"
        ],
        "outcome_1": "Marco Cecchinato",
        "outcome_2": "Raul Brancaccio",
        "group_item_title": "",
        "event_title": "Ostrava: Marco Cecchinato vs Raul Brancaccio",
        "event_icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/atp-tour-b4390c4fb8.jpg",
        "resolved_at": "",
        "winning_outcome": ""
      }
    },
    {
      "pnl": "39381418",
      "volume": "5112815844",
      "roi": 3.013732006283948,
      "last_trade_at": "2026-05-01T10:26:18Z",
      "market": {
        "id": "2125938",
        "question": "La Bisbal: Alina Charaeva vs Daria Kasatkina",
        "slug": "wta-charaev-kasatki-2026-05-01",
        "start_date": "2026-04-30T16:02:49Z",
        "end_date": "2026-05-08T09:00:00Z",
        "icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/wta-logo-41f331bdf1.png",
        "neg_risk": false,
        "event_slug": "wta-charaev-kasatki-2026-05-01",
        "series_slug": "wta",
        "tags": [
          "sports",
          "tennis",
          "games"
        ],
        "outcome_1": "Alina Charaeva",
        "outcome_2": "Daria Kasatkina",
        "group_item_title": "",
        "event_title": "La Bisbal: Alina Charaeva vs Daria Kasatkina",
        "event_icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/wta-logo-41f331bdf1.png",
        "resolved_at": "",
        "winning_outcome": ""
      }
    },
    {
      "pnl": "-745894",
      "volume": "79687730",
      "roi": -1.631422210039983,
      "last_trade_at": "2026-05-01T10:24:24Z",
      "market": {
        "id": "2125940",
        "question": "Cagliari: Matteo Arnaldi vs Nuno Borges",
        "slug": "atp-arnaldi-borges-2026-05-01",
        "start_date": "2026-04-30T16:03:52Z",
        "end_date": "2026-05-08T08:00:00Z",
        "icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/atp-tour-b4390c4fb8.jpg",
        "neg_risk": false,
        "event_slug": "atp-arnaldi-borges-2026-05-01",
        "series_slug": "atp",
        "tags": [
          "sports",
          "tennis",
          "games"
        ],
        "outcome_1": "Matteo Arnaldi",
        "outcome_2": "Nuno Borges",
        "group_item_title": "",
        "event_title": "Cagliari: Matteo Arnaldi vs Nuno Borges",
        "event_icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/atp-tour-b4390c4fb8.jpg",
        "resolved_at": "",
        "winning_outcome": ""
      }
    },
    {
      "pnl": "-451982778",
      "volume": "6437316766",
      "roi": -59.87813431865374,
      "last_trade_at": "2026-05-01T10:23:10Z",
      "market": {
        "id": "2119368",
        "question": "Saint-Malo: Moyuka Uchijima vs Sofia Costoulas",
        "slug": "wta-uchijim-costoul-2026-05-01",
        "start_date": "2026-04-29T22:02:33Z",
        "end_date": "2026-05-08T08:00:00Z",
        "icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/wta-logo-41f331bdf1.png",
        "neg_risk": false,
        "event_slug": "wta-uchijim-costoul-2026-05-01",
        "series_slug": "wta",
        "tags": [
          "sports",
          "tennis",
          "games"
        ],
        "outcome_1": "Moyuka Uchijima",
        "outcome_2": "Sofia Costoulas",
        "group_item_title": "",
        "event_title": "Saint-Malo: Moyuka Uchijima vs Sofia Costoulas",
        "event_icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/wta-logo-41f331bdf1.png",
        "resolved_at": "",
        "winning_outcome": ""
      }
    }
  ],
  "total_count": 7100
}
```
