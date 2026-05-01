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

### Example JSON Response (for Market: 2125937)

```json
{
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
  },
  "total_volume": "91110195126",
  "total_pnl_distributed": "921965338",
  "total_traders": 405,
  "top_earners": [
    {
      "profile": {
        "address": "0x547db0c8fcef2ed4a8de7819a0882b8be3bcea58",
        "name": "Bitcoin150K",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-02-28T17:58:29Z",
        "last_trade_at": "2026-05-01T10:16:58Z"
      },
      "pnl": "339752051",
      "volume": "3947872350",
      "roi": 35.84619566991226,
      "rank": 1
    },
    {
      "profile": {
        "address": "0x5f3d984cd28f4e221933c7651303ee59afad3d83",
        "name": "rajami",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-04-19T17:48:24Z",
        "last_trade_at": "2026-05-01T10:13:50Z"
      },
      "pnl": "99997801",
      "volume": "299995599",
      "roi": 100.00000200004402,
      "rank": 2
    },
    {
      "profile": {
        "address": "0x507e52ef684ca2dd91f90a9d26d149dd3288beae",
        "name": "GamblingIsAllYouNeed",
        "profile_image": "https://polymarket-upload.s3.us-east-2.amazonaws.com/profile-image-4070827-b30f95ed-6835-4ac6-a456-f066d6968f97.png",
        "x_username": "",
        "profile_created_at": "2025-11-11T07:36:59Z",
        "last_trade_at": "2026-05-01T10:27:22Z"
      },
      "pnl": "86621343",
      "volume": "7983877937",
      "roi": 2.5025121371256933,
      "rank": 3
    },
    {
      "profile": {
        "address": "0x48eea23704165e005efbc36f0afc6cac31b50db4",
        "name": "ignacioaguirregomezcorta",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-01-18T12:48:43Z",
        "last_trade_at": "2026-05-01T09:57:58Z"
      },
      "pnl": "68572786",
      "volume": "368570298",
      "roi": 68.57278668572786,
      "rank": 4
    },
    {
      "profile": {
        "address": "0x42c99f38d2b951b0dc8e8bd5371fa80c9dd19623",
        "name": "TRCM",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-01-14T09:45:55Z",
        "last_trade_at": "2026-05-01T10:23:42Z"
      },
      "pnl": "38813330",
      "volume": "1059021791",
      "roi": 7.75833799563246,
      "rank": 5
    },
    {
      "profile": {
        "address": "0xde9f7f4e77a1595623ceb58e469f776257ccd43c",
        "name": "tradecraft",
        "profile_image": "https://polymarket-upload.s3.us-east-2.amazonaws.com/profile-image-1439403-31bec8e6-a9d5-45d6-8c20-964f07c7fdb2.webp",
        "x_username": "",
        "profile_created_at": "2024-11-18T21:05:16Z",
        "last_trade_at": "2026-05-01T10:27:44Z"
      },
      "pnl": "35583300",
      "volume": "219195498",
      "roi": 38.93429708118328,
      "rank": 6
    },
    {
      "profile": {
        "address": "0x0d122990c6b162a772399d73297075f6acf84070",
        "name": "stak0n",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-02-25T08:34:59Z",
        "last_trade_at": "2026-05-01T09:54:00Z"
      },
      "pnl": "34996173",
      "volume": "684960761",
      "roi": 10.769226645704547,
      "rank": 7
    },
    {
      "profile": {
        "address": "0x942d35aa3ba07b2246d1279f64c3d24fcf80896c",
        "name": "ont5555",
        "profile_image": "",
        "x_username": "numuotopwall5",
        "profile_created_at": "2026-01-07T04:08:57Z",
        "last_trade_at": "2026-05-01T09:53:02Z"
      },
      "pnl": "33300000",
      "volume": "97680000",
      "roi": 103.44827586206897,
      "rank": 8
    },
    {
      "profile": {
        "address": "0x79dcb362c47ba851d75cf5873735391b2c81ca77",
        "name": "rocky42008",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2025-06-25T12:39:40Z",
        "last_trade_at": "2026-05-01T10:25:34Z"
      },
      "pnl": "30610661",
      "volume": "277991697",
      "roi": 38.639170426719964,
      "rank": 9
    },
    {
      "profile": {
        "address": "0x31d4d4f3d4e6ac5327e9b070b8aa9fee7d6e5c13",
        "name": "0x31D4d4F3d4E6Ac5327e9B070b8aa9Fee7D6E5C13-1761658833084",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2025-10-28T13:40:35Z",
        "last_trade_at": "2026-05-01T09:57:36Z"
      },
      "pnl": "23913334",
      "volume": "98911398",
      "roi": 95.65333982613359,
      "rank": 10
    },
    {
      "profile": {
        "address": "0x56280cd4cf8f902b3971338ddb04038e9dbfabbc",
        "name": "Po1yamory",
        "profile_image": "https://polymarket-upload.s3.us-east-2.amazonaws.com/logo_3_bc3c4e0e-4210-4cb2-81ab-75d2d5926fb1_1737441554995.webp",
        "x_username": "",
        "profile_created_at": "2025-01-21T06:24:04Z",
        "last_trade_at": "2026-05-01T10:27:44Z"
      },
      "pnl": "22646576",
      "volume": "687692561",
      "roi": 9.204803264954892,
      "rank": 11
    },
    {
      "profile": {
        "address": "0xb4f334eb2ec0fd1eda346cd854babafcf4c6999f",
        "name": "ab-z",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2025-10-25T21:20:01Z",
        "last_trade_at": "2026-05-01T10:18:38Z"
      },
      "pnl": "11559600",
      "volume": "62203200",
      "roi": 57.57575757575758,
      "rank": 12
    },
    {
      "profile": {
        "address": "0x2d6ac4f70307102ac46e9e6ded67f3838ddf8add",
        "name": "GC-P",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2025-12-29T16:03:44Z",
        "last_trade_at": "2026-05-01T10:24:50Z"
      },
      "pnl": "11254700",
      "volume": "445602267",
      "roi": 3.6426148425218896,
      "rank": 13
    },
    {
      "profile": {
        "address": "0x6d726036024348b8af9ad0108dbe3eccf7bdc356",
        "name": "Prince690",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2024-09-22T09:28:30Z",
        "last_trade_at": "2026-05-01T10:23:08Z"
      },
      "pnl": "11100000",
      "volume": "53100000",
      "roi": 52.857142857142854,
      "rank": 14
    },
    {
      "profile": {
        "address": "0x18c6e0208b684870fbe6b4aef2ce91838620a7c6",
        "name": "rixxaner125",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-04-01T15:30:39Z",
        "last_trade_at": "2026-05-01T09:53:34Z"
      },
      "pnl": "10497000",
      "volume": "30791200",
      "roi": 103.44827586206897,
      "rank": 15
    },
    {
      "profile": {
        "address": "0xf39d6816916706fa2d1219027e0f7b9b35f7a5e9",
        "name": "nopsts",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-03-16T18:11:10Z",
        "last_trade_at": "2026-05-01T10:14:36Z"
      },
      "pnl": "6896013",
      "volume": "106892098",
      "roi": 13.7931057243161,
      "rank": 16
    },
    {
      "profile": {
        "address": "0x91d593b25322f411e491c6c1febf9316435f5a73",
        "name": "ChouInnnn",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-03-17T10:26:39Z",
        "last_trade_at": "2026-05-01T10:03:24Z"
      },
      "pnl": "6153601",
      "volume": "16153399",
      "roi": 123.0769676941013,
      "rank": 17
    },
    {
      "profile": {
        "address": "0x66b102468892d00a90c98ed8aec1d2b24904340f",
        "name": "astapzippo",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2025-08-21T06:32:23Z",
        "last_trade_at": "2026-05-01T10:17:30Z"
      },
      "pnl": "5638580",
      "volume": "809936786",
      "roi": 4.358780229839778,
      "rank": 18
    },
    {
      "profile": {
        "address": "0xa07d087b4d1956aedb46966b44bee6e340fba037",
        "name": "Lit029301",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-02-08T12:01:09Z",
        "last_trade_at": "2026-05-01T10:27:32Z"
      },
      "pnl": "5261924",
      "volume": "105465997",
      "roi": 20.48224192780929,
      "rank": 19
    },
    {
      "profile": {
        "address": "0xed9fb9477d29e2dd4bfd3c7a50df4f20260c94bf",
        "name": "RN6",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-04-30T06:44:01Z",
        "last_trade_at": "2026-05-01T10:08:06Z"
      },
      "pnl": "5053700",
      "volume": "25838410",
      "roi": 48.62927359679763,
      "rank": 20
    }
  ],
  "total_winners": 54
}
```
