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

### Example JSON Response (for Market: 1858809)

```json
{
  "market": {
    "id": "1858809",
    "question": "Spread: Rockets (-3.5)",
    "slug": "nba-hou-gsw-2026-04-05-spread-away-3pt5",
    "start_date": "2026-04-04T10:12:49Z",
    "end_date": "2026-04-06T02:00:00Z",
    "icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/super+cool+basketball+in+red+and+blue+wow.png",
    "neg_risk": false,
    "event_slug": "nba-hou-gsw-2026-04-05",
    "series_slug": "nba-2026",
    "tags": [
      "sports",
      "basketball",
      "nba",
      "games"
    ],
    "outcome_1": "Rockets",
    "outcome_2": "Warriors",
    "group_item_title": "Spread -3.5",
    "event_title": "Rockets vs. Warriors",
    "event_icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/super+cool+basketball+in+red+and+blue+wow.png",
    "resolved_at": "",
    "winning_outcome": ""
  },
  "total_volume": "1208280786130",
  "total_pnl_distributed": "1466428766",
  "total_traders": 775,
  "top_earners": [
    {
      "profile": {
        "address": "0xfe787d2da716d60e8acff57fb87eb13cd4d10319",
        "name": "ferrariChampions2026",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-03-25T18:19:26Z",
        "last_trade_at": "2026-04-06T03:34:13Z"
      },
      "pnl": "454336543",
      "volume": "33583850653",
      "roi": 10.718210686660893,
      "rank": 1
    },
    {
      "profile": {
        "address": "0x84dbb7103982e3617704a2ed7d5b39691952aeeb",
        "name": "ShucksIt69",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2024-09-11T16:57:39Z",
        "last_trade_at": "2026-04-06T02:08:33Z"
      },
      "pnl": "307075598",
      "volume": "58845729424",
      "roi": 3.592157001577364,
      "rank": 2
    },
    {
      "profile": {
        "address": "0x955a42eb5706f4a0db3b5dceb7a4d670d3ca60e1",
        "name": "sport00111",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-04-02T08:24:32Z",
        "last_trade_at": "2026-04-06T03:06:53Z"
      },
      "pnl": "133088994",
      "volume": "1072693084",
      "roi": 29.004643720185648,
      "rank": 3
    },
    {
      "profile": {
        "address": "0x204f72f35326db932158cba6adff0b9a1da95e14",
        "name": "swisstony",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2025-07-29T14:46:06Z",
        "last_trade_at": "2026-04-06T03:36:11Z"
      },
      "pnl": "102031772",
      "volume": "5042351562",
      "roi": 4.766617841597805,
      "rank": 4
    },
    {
      "profile": {
        "address": "0xa697d0b3fff7d285a0f92d6ee03a7f97809e59d5",
        "name": "0xa697d0b3FFf7D285a0F92d6Ee03a7f97809E59d5-1774326306031",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-03-24T04:25:06Z",
        "last_trade_at": "2026-04-06T03:35:31Z"
      },
      "pnl": "65046681",
      "volume": "7265209970",
      "roi": 2.071907540580036,
      "rank": 5
    },
    {
      "profile": {
        "address": "0x8c0b024c17831a0dde038547b7e791ae6a0d7aa5",
        "name": "EFFICIENCYEXPERT",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2025-11-01T08:05:50Z",
        "last_trade_at": "2026-04-06T03:28:01Z"
      },
      "pnl": "42717116",
      "volume": "5662756098",
      "roi": 1.7257666420142654,
      "rank": 6
    },
    {
      "profile": {
        "address": "0x5fea774d3548a44d48452e868d7faf0c860078b1",
        "name": "CurbFlayer",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-03-14T14:59:34Z",
        "last_trade_at": "2026-04-06T03:35:03Z"
      },
      "pnl": "41480556",
      "volume": "1084836371",
      "roi": 9.745767373986327,
      "rank": 7
    },
    {
      "profile": {
        "address": "0xdbdd45150249e229eb4ca8aa48a30dca21faa5de",
        "name": "0xdbdd45150249e229eB4cA8aa48A30Dca21Faa5de-1757094771846",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2025-09-05T17:52:52Z",
        "last_trade_at": "2026-04-06T03:35:31Z"
      },
      "pnl": "37898800",
      "volume": "2193108299",
      "roi": 43.0649585586077,
      "rank": 8
    },
    {
      "profile": {
        "address": "0x2d6ac4f70307102ac46e9e6ded67f3838ddf8add",
        "name": "GC-P",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2025-12-29T16:03:44Z",
        "last_trade_at": "2026-04-06T03:28:51Z"
      },
      "pnl": "35758352",
      "volume": "3149879001",
      "roi": 2.2629485927880877,
      "rank": 9
    },
    {
      "profile": {
        "address": "0x6d3c5bd13984b2de47c3a88ddc455309aab3d294",
        "name": "VeryLucky888",
        "profile_image": "https://polymarket-upload.s3.us-east-2.amazonaws.com/profile-image-3980992-50a3f24e-e4d8-4388-86ae-d9c063867f3e.webp",
        "x_username": "TheVeryLucky888",
        "profile_created_at": "2025-11-05T09:40:21Z",
        "last_trade_at": "2026-04-06T03:29:19Z"
      },
      "pnl": "28838727",
      "volume": "2151021340",
      "roi": 2.7198986924676505,
      "rank": 10
    },
    {
      "profile": {
        "address": "0xcf7379b4b891c06d88807f6f70efa75378120215",
        "name": "NM-P",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-01-01T17:28:55Z",
        "last_trade_at": "2026-04-06T03:24:05Z"
      },
      "pnl": "25872059",
      "volume": "1921562330",
      "roi": 2.6824396982253926,
      "rank": 11
    },
    {
      "profile": {
        "address": "0xbfd770b7ff07fb2ece41b0e7c593db65a84cf0bf",
        "name": "valnech",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2025-10-30T07:03:56Z",
        "last_trade_at": "2026-04-06T03:36:19Z"
      },
      "pnl": "23801552",
      "volume": "758382436",
      "roi": 8.862154298826313,
      "rank": 12
    },
    {
      "profile": {
        "address": "0x661daf6af6d884012dd6db73c09d72e8be224dc6",
        "name": "DOLLAR-PRINTER",
        "profile_image": "https://polymarket-upload.s3.us-east-2.amazonaws.com/profile-image-3789798-0c95bc9f-6e5c-4412-bba2-32a03f9c1ed3.webp",
        "x_username": "",
        "profile_created_at": "2025-10-28T06:26:21Z",
        "last_trade_at": "2026-04-06T03:32:15Z"
      },
      "pnl": "23500000",
      "volume": "706000000",
      "roi": 10.930232558139535,
      "rank": 13
    },
    {
      "profile": {
        "address": "0xe40172522c7c64afa2d052ddae6c92cd0f417b88",
        "name": "BoomLaLa",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2024-12-11T01:27:39Z",
        "last_trade_at": "2026-04-06T03:32:17Z"
      },
      "pnl": "19153371",
      "volume": "422583887",
      "roi": 18.51152228366504,
      "rank": 14
    },
    {
      "profile": {
        "address": "0xa07d087b4d1956aedb46966b44bee6e340fba037",
        "name": "Lit029301",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-02-08T12:01:09Z",
        "last_trade_at": "2026-04-06T03:36:15Z"
      },
      "pnl": "16563542",
      "volume": "280323988",
      "roi": 14.820087758210866,
      "rank": 15
    },
    {
      "profile": {
        "address": "0x6b7c75862e64d6e976d2c08ad9f9b54add6c5f83",
        "name": "tcp2",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2025-09-11T19:07:40Z",
        "last_trade_at": "2026-04-06T03:36:03Z"
      },
      "pnl": "14988156",
      "volume": "3026345552",
      "roi": 1.0510011726443866,
      "rank": 16
    },
    {
      "profile": {
        "address": "0x2cecf842a8e47711191b035c3e87d04817ee5326",
        "name": "0x2CeCF842a8E47711191b035c3e87d04817ee5326-1772823474278",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-03-06T18:57:53Z",
        "last_trade_at": "2026-04-06T01:49:35Z"
      },
      "pnl": "11804019",
      "volume": "1602004998",
      "roi": 1.9999999017283907,
      "rank": 17
    },
    {
      "profile": {
        "address": "0xee613b3fc183ee44f9da9c05f53e2da107e3debf",
        "name": "sovereign2013",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2025-07-25T12:23:17Z",
        "last_trade_at": "2026-04-05T20:32:51Z"
      },
      "pnl": "10116400",
      "volume": "1513424100",
      "roi": 2.0716772816474793,
      "rank": 18
    },
    {
      "profile": {
        "address": "0x4595dd02dcaa1e053d113332d594d96c1e85df87",
        "name": "cuttiecat",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-03-08T09:20:19Z",
        "last_trade_at": "2026-04-06T03:34:49Z"
      },
      "pnl": "9999261",
      "volume": "1029961589",
      "roi": 1.9607842483611848,
      "rank": 19
    },
    {
      "profile": {
        "address": "0x1e4647c2429fa5a9e95088c883f2c5fa9a965737",
        "name": "haonangege",
        "profile_image": "",
        "x_username": "dengjiayu521",
        "profile_created_at": "2025-07-28T16:56:16Z",
        "last_trade_at": "2026-04-06T03:36:09Z"
      },
      "pnl": "8870400",
      "volume": "60496000",
      "roi": 34.61538461538461,
      "rank": 20
    }
  ],
  "total_winners": 71
}
```
