# Market Detail

Retrieve core information and aggregate statistics for a specific market. This includes the market's question, outcomes, and current status, along with total volume, trader counts, and a leaderboard of the top earners in that market.

**Endpoint:** `GET /v1/markets/:id`

**Authentication:** API Key required (`X-PolyEdge-Key` header)

## Parameters

| Name | Type | Location | Description |
|---|---|---|---|
| `id` | `int64` | Path | The unique numeric ID of the market. |

## Returns

Returns a JSON object with the `market` details, overall statistics (volume, PNL distributed), and a list of `top_earners` in this market.

### Example JSON Response (for Market: 2134185)

```json
{
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
  },
  "total_volume": "65378241836",
  "total_pnl_distributed": "32127843933",
  "total_traders": 180,
  "top_earners": [
    {
      "profile": {
        "address": "0x986b16df5791e7dc4c6f6ef3524eff0efe6812e9",
        "name": "BoerAc",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-04-23T17:00:49Z",
        "last_trade_at": "2026-05-02T01:34:08Z"
      },
      "pnl": "29378218577",
      "volume": "25105561049",
      "roi": 117.01876934620502,
      "rank": 1
    },
    {
      "profile": {
        "address": "0xa974826f82380f9bb3d5b9c722c50f82fb1aef79",
        "name": "tmoneeey",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2025-01-10T01:31:52Z",
        "last_trade_at": "2026-05-02T17:41:14Z"
      },
      "pnl": "1300899486",
      "volume": "1149328128",
      "roi": 113.18782289473386,
      "rank": 2
    },
    {
      "profile": {
        "address": "0x6628d459a1ba4f231513f27232415af529a005ae",
        "name": "0x6628d459a1BA4F231513F27232415aF529A005ae-1765303515347",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2025-12-09T18:05:15Z",
        "last_trade_at": "2026-05-02T17:43:20Z"
      },
      "pnl": "356220369",
      "volume": "971600257",
      "roi": 116.56542901035127,
      "rank": 3
    },
    {
      "profile": {
        "address": "0xbca08c1bc204a34f2fddbe47b438b9bd42ac9705",
        "name": "bananawoin",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-04-24T14:33:25Z",
        "last_trade_at": "2026-05-02T04:34:16Z"
      },
      "pnl": "307649860",
      "volume": "261090000",
      "roi": 117.83287755180206,
      "rank": 4
    },
    {
      "profile": {
        "address": "0xf898dc38744d9e173bcaadef0647ceb42ad8e720",
        "name": "Dimkov27",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2024-11-01T00:39:30Z",
        "last_trade_at": "2026-05-02T17:40:36Z"
      },
      "pnl": "126268660",
      "volume": "168129700",
      "roi": 114.5920716727607,
      "rank": 5
    },
    {
      "profile": {
        "address": "0xe2354f16c43546f9dad1eb4a866bf5d6f9cbaba2",
        "name": "Etherewl",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2025-10-20T06:21:03Z",
        "last_trade_at": "2026-05-02T17:33:30Z"
      },
      "pnl": "119678041",
      "volume": "552022634",
      "roi": 55.66420666969879,
      "rank": 6
    },
    {
      "profile": {
        "address": "0x1f42c0ee30835deb378507b121292b8aab788680",
        "name": "mlequo",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-02-19T17:51:33Z",
        "last_trade_at": "2026-05-02T15:56:10Z"
      },
      "pnl": "86828488",
      "volume": "74999999",
      "roi": 115.77131887695091,
      "rank": 7
    },
    {
      "profile": {
        "address": "0xae457d6d83362588dd2b8e23b2c8c359212396b9",
        "name": "0xaE457d6d83362588DD2B8E23B2c8c359212396B9-1770832003765",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-02-11T17:46:44Z",
        "last_trade_at": "2026-05-02T17:41:28Z"
      },
      "pnl": "49534050",
      "volume": "71063900",
      "roi": 81.83568892523897,
      "rank": 8
    },
    {
      "profile": {
        "address": "0xfb2e08f566acd170ab8bffe36c82b2cee0a7cc6b",
        "name": "0xFb2e08f566Acd170Ab8BfFe36c82b2CeE0a7CC6b-1773620510303",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-03-16T00:21:50Z",
        "last_trade_at": "2026-05-02T04:33:58Z"
      },
      "pnl": "41054044",
      "volume": "115641279",
      "roi": 110.95687867451024,
      "rank": 9
    },
    {
      "profile": {
        "address": "0xd5f50a0684cd734a837cab34ea24db1d9381bb11",
        "name": "archjohn",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-04-23T01:46:11Z",
        "last_trade_at": "2026-05-02T17:21:50Z"
      },
      "pnl": "27000000",
      "volume": "23000000",
      "roi": 117.3913043478261,
      "rank": 10
    },
    {
      "profile": {
        "address": "0xa434028bf2e14de9965d6948cacaf82e0714e508",
        "name": "",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "",
        "last_trade_at": "2026-05-02T17:28:00Z"
      },
      "pnl": "25879618",
      "volume": "75008937",
      "roi": 107.83175514563607,
      "rank": 11
    },
    {
      "profile": {
        "address": "0x5f56a9a1ac5cb8793024d196e5ec2cacfd9d348a",
        "name": "echotrader",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-04-22T21:48:08Z",
        "last_trade_at": "2026-05-02T17:36:42Z"
      },
      "pnl": "24800000",
      "volume": "18606250",
      "roi": 147.29737820169856,
      "rank": 12
    },
    {
      "profile": {
        "address": "0x0011ac56cc1af0412f569e50eae15f6f48f64cba",
        "name": "",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "",
        "last_trade_at": "2026-05-02T15:53:10Z"
      },
      "pnl": "22235210",
      "volume": "19999998",
      "roi": 111.17606111760611,
      "rank": 13
    },
    {
      "profile": {
        "address": "0x84bba64a951d5477f26f567001e9a234b1e725d3",
        "name": "0x84Bba64A951D5477f26f567001E9A234B1e725D3-1770312350227",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-02-05T17:25:50Z",
        "last_trade_at": "2026-05-02T03:06:18Z"
      },
      "pnl": "20977400",
      "volume": "18602600",
      "roi": 112.76595744680851,
      "rank": 14
    },
    {
      "profile": {
        "address": "0x7d70d8e568aaa9c8f3de70259cd7f12ae0ac1115",
        "name": "OClubeBettingCorp",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-04-23T00:20:41Z",
        "last_trade_at": "2026-05-02T17:21:06Z"
      },
      "pnl": "20804480",
      "volume": "58600095",
      "roi": 110.95731543251901,
      "rank": 15
    },
    {
      "profile": {
        "address": "0x07c9e96873af97068ec671bf0e47a536b3049f5b",
        "name": "ticlriwjxnfi",
        "profile_image": "https://polymarket-upload.s3.us-east-2.amazonaws.com/profile-image-5101595-a1366964-a433-414c-bdcd-9d897f6bc9fd.jpeg",
        "x_username": "",
        "profile_created_at": "2026-01-12T15:26:49Z",
        "last_trade_at": "2026-05-02T15:53:28Z"
      },
      "pnl": "18487598",
      "volume": "50745219",
      "roi": 115.54749472171842,
      "rank": 16
    },
    {
      "profile": {
        "address": "0x973e75c9d1474cd7cbefe4a9a88fe823815922eb",
        "name": "Nathan05863",
        "profile_image": "",
        "x_username": "ninison25",
        "profile_created_at": "2025-12-03T13:11:27Z",
        "last_trade_at": "2026-05-02T15:22:22Z"
      },
      "pnl": "15564644",
      "volume": "13999999",
      "roi": 111.17603651257404,
      "rank": 17
    },
    {
      "profile": {
        "address": "0x35d1f47cb89b1b94eb06f70cb0b12d200ebd1f70",
        "name": "testerbender",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-04-21T12:37:54Z",
        "last_trade_at": "2026-05-02T17:41:58Z"
      },
      "pnl": "15523600",
      "volume": "15760000",
      "roi": 98.5,
      "rank": 18
    },
    {
      "profile": {
        "address": "0xf009dce2225226133b8eeb4cf987a26010b743d0",
        "name": "RedFerrari",
        "profile_image": "https://polymarket-upload.s3.us-east-2.amazonaws.com/profile-image-7109046-4514a513-5590-434f-a023-d87bc371e356.png",
        "x_username": "",
        "profile_created_at": "2026-03-31T15:34:43Z",
        "last_trade_at": "2026-05-02T17:23:18Z"
      },
      "pnl": "14119541",
      "volume": "622318999",
      "roi": 4.7065136823550455,
      "rank": 19
    },
    {
      "profile": {
        "address": "0xb188c4e8c7c523d6662bf66e4982ad407e958be3",
        "name": "Rulerzzzz",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-04-28T14:23:52Z",
        "last_trade_at": "2026-05-02T17:02:16Z"
      },
      "pnl": "14100170",
      "volume": "19660000",
      "roi": 71.72009155645982,
      "rank": 20
    }
  ],
  "total_winners": 61
}
```
