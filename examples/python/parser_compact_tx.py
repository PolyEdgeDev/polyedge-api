def parse_compact_trader(arr):
    if not arr or len(arr) == 0:
        return None
    return {
        "address": arr[0],
        "name": arr[1] if len(arr) > 1 else "",
        "x_username": arr[2] if len(arr) > 2 else "",
        "profile_image": arr[3] if len(arr) > 3 else "",
        "profile_created_at": arr[4] if len(arr) > 4 else ""
    }

def parse_compact_order(arr):
    if not arr or len(arr) == 0:
        return None
    return {
        "side": arr[0],
        "trader": parse_compact_trader(arr[1]),
        "outcome": arr[2],
        "tokenId": arr[3],
        "usdc": arr[4],
        "shares": arr[5],
        "fee": arr[6] if len(arr) > 6 else "0",
        "feeRateBps": arr[7] if len(arr) > 7 else "0"
    }

def parse_compact_market(arr):
    if not arr or len(arr) == 0:
        return None
    return {
        "id": arr[0],
        "question": arr[1] if len(arr) > 1 else "",
        "slug": arr[2] if len(arr) > 2 else "",
        "start_date": arr[3] if len(arr) > 3 else "",
        "end_date": arr[4] if len(arr) > 4 else "",
        "icon": arr[5] if len(arr) > 5 else "",
        "neg_risk": arr[6] if len(arr) > 6 else False,
        "event_slug": arr[7] if len(arr) > 7 else "",
        "series_slug": arr[8] if len(arr) > 8 else "",
        "tags": arr[9] if len(arr) > 9 else [],
        "outcome_1": arr[10] if len(arr) > 10 else "",
        "outcome_2": arr[11] if len(arr) > 11 else "",
        "group_item_title": arr[12] if len(arr) > 12 else "",
        "event_title": arr[13] if len(arr) > 13 else "",
        "event_icon": arr[14] if len(arr) > 14 else ""
    }

def parse_compact_tx(arr):
    if not arr or len(arr) != 5:
        return None
    
    makers = []
    if isinstance(arr[4], list):
        for maker_arr in arr[4]:
            makers.append(parse_compact_order(maker_arr))

    return {
        "txHash": arr[0],
        "timestamp": arr[1],
        "market": parse_compact_market(arr[2]),
        "takerOrder": parse_compact_order(arr[3]),
        "makerOrders": makers
    }