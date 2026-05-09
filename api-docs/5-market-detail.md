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

### Example JSON Response (for Market: 2182202)

```json
{
  "market": {
    "id": "2182202",
    "question": "Spread: Spurs (-4.5)",
    "slug": "nba-sas-min-2026-05-08-spread-away-4pt5",
    "start_date": "2026-05-07T15:12:35Z",
    "end_date": "2026-05-09T01:30:00Z",
    "icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/super+cool+basketball+in+red+and+blue+wow.png",
    "neg_risk": false,
    "event_slug": "nba-sas-min-2026-05-08",
    "series_slug": "nba-2026",
    "tags": [
      "sports",
      "basketball",
      "nba",
      "games"
    ],
    "outcome_1": "Spurs",
    "outcome_2": "Timberwolves",
    "group_item_title": "Spread -4.5",
    "event_title": "Spurs vs. Timberwolves",
    "event_icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/super+cool+basketball+in+red+and+blue+wow.png",
    "resolved_at": "",
    "winning_outcome": ""
  },
  "total_volume": "888111646582",
  "total_pnl_distributed": "18022682591",
  "total_traders": 1071,
  "top_earners": [
    {
      "profile": {
        "address": "0xe5efd6543002653b2eef940d8254911862ad9e7a",
        "name": "0xE5efD6543002653B2EEF940d8254911862aD9e7A-1729599643232",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2024-10-22T12:20:43Z",
        "last_trade_at": "2026-05-09T04:32:53Z"
      },
      "pnl": "4705897384",
      "volume": "14873325085",
      "roi": 92.56811297785077,
      "rank": 1
    },
    {
      "profile": {
        "address": "0x8e8ccd010d924673af70bc0191c4f49329da65dd",
        "name": "DogecoinMillionaire",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-02-27T07:17:50Z",
        "last_trade_at": "2026-05-09T04:59:51Z"
      },
      "pnl": "2200989000",
      "volume": "6792009000",
      "roi": 95.88235294117646,
      "rank": 2
    },
    {
      "profile": {
        "address": "0x65503c7f9e142ac88b1ce09df3363ff77f188451",
        "name": "oieshfn345",
        "profile_image": "https://polymarket-upload.s3.us-east-2.amazonaws.com/profile-image-7382016-6ecaffc2-c115-43ef-8089-d55c7420a1b5.png",
        "x_username": "",
        "profile_created_at": "2026-04-12T09:47:50Z",
        "last_trade_at": "2026-05-09T04:29:10Z"
      },
      "pnl": "1572801416",
      "volume": "7985031962",
      "roi": 29.362787657282894,
      "rank": 3
    },
    {
      "profile": {
        "address": "0x228b8d11eba89bf1c554f8879a9293b7106daf4c",
        "name": "0x228B8d11EBa89BF1c554f8879a9293B7106DaF4c-1765442354872",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2025-12-11T08:39:15Z",
        "last_trade_at": "2026-05-09T04:20:18Z"
      },
      "pnl": "929507948",
      "volume": "27362352291",
      "roi": 6.380285989566739,
      "rank": 4
    },
    {
      "profile": {
        "address": "0x204f72f35326db932158cba6adff0b9a1da95e14",
        "name": "swisstony",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2025-07-29T14:46:06Z",
        "last_trade_at": "2026-05-09T05:00:32Z"
      },
      "pnl": "668300818",
      "volume": "13805760748",
      "roi": 13.874100807377033,
      "rank": 5
    },
    {
      "profile": {
        "address": "0x9495425feeb0c250accb89275c97587011b19a27",
        "name": "LaBradfordSmith22",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-04-21T02:33:58Z",
        "last_trade_at": "2026-05-09T04:53:26Z"
      },
      "pnl": "661279307",
      "volume": "9136203762",
      "roi": 20.088386105577115,
      "rank": 6
    },
    {
      "profile": {
        "address": "0x4517484c0f5afed82369b965170846acf791f700",
        "name": "lyj777",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2025-11-03T22:56:35Z",
        "last_trade_at": "2026-05-09T04:49:56Z"
      },
      "pnl": "638424054",
      "volume": "2438420035",
      "roi": 70.93632237599779,
      "rank": 7
    },
    {
      "profile": {
        "address": "0x1a932ae57479644e1aeb14bb0a01a2995c00c3ea",
        "name": "CLAUDEPOL",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-04-06T08:12:25Z",
        "last_trade_at": "2026-05-09T04:41:41Z"
      },
      "pnl": "575186291",
      "volume": "1875183589",
      "roi": 88.49056632772255,
      "rank": 8
    },
    {
      "profile": {
        "address": "0x7a5d94f83ff0195387eaf9f4463433d03eda54db",
        "name": "mishipolis",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-04-04T11:04:56Z",
        "last_trade_at": "2026-05-09T04:46:40Z"
      },
      "pnl": "483302910",
      "volume": "2514280300",
      "roi": 67.28022343637414,
      "rank": 9
    },
    {
      "profile": {
        "address": "0x0def7305ac0c2f97db104ea2422a43f0d5b34ddb",
        "name": "cf578",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-02-24T08:33:25Z",
        "last_trade_at": "2026-05-09T04:58:43Z"
      },
      "pnl": "438995610",
      "volume": "1558984410",
      "roi": 78.39285714285714,
      "rank": 10
    },
    {
      "profile": {
        "address": "0x0979bad57d7a1403db89cbcd9c52bf43f2138d9b",
        "name": "askilika",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2024-12-21T20:45:22Z",
        "last_trade_at": "2026-05-09T03:57:18Z"
      },
      "pnl": "269940423",
      "volume": "16100998396",
      "roi": 12.564453517330376,
      "rank": 11
    },
    {
      "profile": {
        "address": "0x8b39c22750102ff8c13e35e5ca461af641867fbc",
        "name": "SuperTurtle",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-02-28T11:36:29Z",
        "last_trade_at": "2026-05-09T04:33:50Z"
      },
      "pnl": "257040000",
      "volume": "861840000",
      "roi": 85,
      "rank": 12
    },
    {
      "profile": {
        "address": "0x4642d0bb40897e0b32768be2bb1d193400d621d3",
        "name": "0x4642D0bb40897E0B32768bE2BB1d193400d621d3-1773340042657",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-03-12T18:27:23Z",
        "last_trade_at": "2026-05-09T04:29:14Z"
      },
      "pnl": "249997501",
      "volume": "849994499",
      "roi": 83.33333394445056,
      "rank": 13
    },
    {
      "profile": {
        "address": "0xe2f8b68bd0d2a7ab1caef3a5f92154b864015696",
        "name": "Inform",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-05-06T17:19:25Z",
        "last_trade_at": "2026-05-09T04:18:02Z"
      },
      "pnl": "234516606",
      "volume": "1852486912",
      "roi": 28.9890399200061,
      "rank": 14
    },
    {
      "profile": {
        "address": "0x9cc0111cf134ac9bfd752501bab786171dcb7faa",
        "name": "0x9cc0111cF134AC9bFD752501Bab786171Dcb7Faa-1773679878045",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-03-16T16:51:18Z",
        "last_trade_at": "2026-05-09T04:22:12Z"
      },
      "pnl": "212420601",
      "volume": "1040416599",
      "roi": 51.3098197840313,
      "rank": 15
    },
    {
      "profile": {
        "address": "0x63039b36db5b9356c5c85922eb872cda53e89556",
        "name": "Vesperwqw",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-05-01T12:42:20Z",
        "last_trade_at": "2026-05-09T04:32:35Z"
      },
      "pnl": "207485027",
      "volume": "1670284999",
      "roi": 28.368260351624162,
      "rank": 16
    },
    {
      "profile": {
        "address": "0xb3cfe7615d64db8dfa743a1b1a2b976911460ebd",
        "name": "omoi0i0",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-01-13T00:40:45Z",
        "last_trade_at": "2026-05-09T05:00:12Z"
      },
      "pnl": "200438127",
      "volume": "1403175409",
      "roi": 31.111111073169536,
      "rank": 17
    },
    {
      "profile": {
        "address": "0x53f1510341ffc0329c0d9968a28286e4d09d35f8",
        "name": "neophyter",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2025-06-26T14:12:20Z",
        "last_trade_at": "2026-05-09T04:56:13Z"
      },
      "pnl": "192460787",
      "volume": "592457148",
      "roi": 96.2321434815292,
      "rank": 18
    },
    {
      "profile": {
        "address": "0x0d2d845a6ff64e31e04a70afce8a573940767ff5",
        "name": "HeavyP1sser",
        "profile_image": "",
        "x_username": "",
        "profile_created_at": "2026-05-04T13:57:20Z",
        "last_trade_at": "2026-05-09T05:00:02Z"
      },
      "pnl": "179227750",
      "volume": "4168801181",
      "roi": 8.248544217450036,
      "rank": 19
    },
    {
      "profile": {
        "address": "0x2005d16a84ceefa912d4e380cd32e7ff827875ea",
        "name": "RN1",
        "profile_image": "https://polymarket-upload.s3.us-east-2.amazonaws.com/profile-image-1567750-84001aec-310a-470f-9584-67dfcaa61267.png",
        "x_username": "",
        "profile_created_at": "2024-12-12T16:25:53Z",
        "last_trade_at": "2026-05-09T05:00:33Z"
      },
      "pnl": "165945819",
      "volume": "9894902615",
      "roi": 3.8587971356057116,
      "rank": 20
    }
  ],
  "total_winners": 206
}
```
