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

### Example JSON Response (for 0x986b16df5791e7dc4c6f6ef3524eff0efe6812e9)

```json
{
  "history": [
    {
      "pnl": "29378218577",
      "volume": "25105561049",
      "roi": 117.01876934620502,
      "last_trade_at": "2026-05-02T01:34:08Z",
      "market": {
        "id": "2134185",
        "question": "New York Mets vs. Los Angeles Angels: O/U 8.5",
        "slug": "mlb-nym-laa-2026-05-01-total-8pt5",
        "start_date": "2026-05-01T19:07:57Z",
        "end_date": "2026-05-02T01:38:00Z",
        "icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/Repetitive-markets/MLB.jpg",
        "neg_risk": false,
        "event_slug": "mlb-nym-laa-2026-05-01",
        "series_slug": "mlb",
        "tags": [
          "sports",
          "baseball",
          "mlb",
          "games"
        ],
        "outcome_1": "Over",
        "outcome_2": "Under",
        "group_item_title": "O/U 8.5",
        "event_title": "New York Mets vs. Los Angeles Angels",
        "event_icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/Repetitive-markets/MLB.jpg",
        "resolved_at": "2026-05-02T05:17:42Z",
        "winning_outcome": "Under"
      }
    },
    {
      "pnl": "-28712595340",
      "volume": "28263210300",
      "roi": -101.5899999866611,
      "last_trade_at": "2026-05-01T22:14:20Z",
      "market": {
        "id": "2127958",
        "question": "Baltimore Orioles vs. New York Yankees: O/U 8.5",
        "slug": "mlb-bal-nyy-2026-05-01-total-8pt5",
        "start_date": "2026-04-30T21:07:37Z",
        "end_date": "2026-05-01T23:05:00Z",
        "icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/Repetitive-markets/MLB.jpg",
        "neg_risk": false,
        "event_slug": "mlb-bal-nyy-2026-05-01",
        "series_slug": "mlb",
        "tags": [
          "sports",
          "baseball",
          "mlb",
          "games"
        ],
        "outcome_1": "Over",
        "outcome_2": "Under",
        "group_item_title": "O/U 8.5",
        "event_title": "Baltimore Orioles vs. New York Yankees",
        "event_icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/Repetitive-markets/MLB.jpg",
        "resolved_at": "2026-05-02T02:53:10Z",
        "winning_outcome": "Over"
      }
    },
    {
      "pnl": "57007730778",
      "volume": "44791788476",
      "roi": 127.2727272512136,
      "last_trade_at": "2026-05-01T18:19:48Z",
      "market": {
        "id": "2126793",
        "question": "Arizona Diamondbacks vs. Chicago Cubs: O/U 7.5",
        "slug": "mlb-ari-chc-2026-05-01-total-7pt5",
        "start_date": "2026-04-30T18:07:47Z",
        "end_date": "2026-05-01T18:20:00Z",
        "icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/Repetitive-markets/MLB.jpg",
        "neg_risk": false,
        "event_slug": "mlb-ari-chc-2026-05-01",
        "series_slug": "mlb",
        "tags": [
          "sports",
          "baseball",
          "mlb",
          "games"
        ],
        "outcome_1": "Over",
        "outcome_2": "Under",
        "group_item_title": "O/U 7.5",
        "event_title": "Arizona Diamondbacks vs. Chicago Cubs",
        "event_icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/Repetitive-markets/MLB.jpg",
        "resolved_at": "2026-05-01T21:33:18Z",
        "winning_outcome": "Over"
      }
    },
    {
      "pnl": "-1145498274",
      "volume": "26414679299",
      "roi": -9.698120497182538,
      "last_trade_at": "2026-05-01T18:19:20Z",
      "market": {
        "id": "2077451",
        "question": "Arizona Diamondbacks vs. Chicago Cubs",
        "slug": "mlb-ari-chc-2026-05-01",
        "start_date": "2026-04-25T13:04:46Z",
        "end_date": "2026-05-08T18:20:00Z",
        "icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/Repetitive-markets/MLB.jpg",
        "neg_risk": false,
        "event_slug": "mlb-ari-chc-2026-05-01",
        "series_slug": "mlb",
        "tags": [
          "sports",
          "baseball",
          "mlb",
          "games"
        ],
        "outcome_1": "Arizona Diamondbacks",
        "outcome_2": "Chicago Cubs",
        "group_item_title": "",
        "event_title": "Arizona Diamondbacks vs. Chicago Cubs",
        "event_icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/Repetitive-markets/MLB.jpg",
        "resolved_at": "2026-05-01T23:11:30Z",
        "winning_outcome": "Chicago Cubs"
      }
    },
    {
      "pnl": "-337876000",
      "volume": "337876000",
      "roi": -100,
      "last_trade_at": "2026-04-30T16:35:10Z",
      "market": {
        "id": "2123020",
        "question": "San Francisco Giants vs. Philadelphia Phillies: O/U 7.5",
        "slug": "mlb-sf-phi-2026-04-30-total-7pt5",
        "start_date": "2026-04-30T05:07:33Z",
        "end_date": "2026-04-30T17:05:00Z",
        "icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/Repetitive-markets/MLB.jpg",
        "neg_risk": false,
        "event_slug": "mlb-sf-phi-2026-04-30",
        "series_slug": "mlb",
        "tags": [
          "sports",
          "baseball",
          "mlb",
          "games"
        ],
        "outcome_1": "Over",
        "outcome_2": "Under",
        "group_item_title": "O/U 7.5",
        "event_title": "San Francisco Giants vs. Philadelphia Phillies",
        "event_icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/Repetitive-markets/MLB.jpg",
        "resolved_at": "2026-04-30T21:08:16Z",
        "winning_outcome": "Under"
      }
    }
  ],
  "total_count": 28
}
```
