import sys
from polyedge import PolyEdgeClient

API_KEY = 'polyedge_live_demo'
client = PolyEdgeClient(API_KEY)

def format_amount(raw_str):
    if not raw_str:
        return "0.00"
    num = float(raw_str) / 1e6
    return f"{num:,.2f}"

def print_divider():
    print("\n=================================================================================================")

def main():
    try:
        print("🚀 Testing PolyEdge API Client...\n")

        print_divider()
        print("1. Fetching Leaderboard...")
        leaderboard = client.get_leaderboard({'limit': 3, 'sort_by': 'pnl', 'time_frame': '7D'})
        print("\n>>> Leaderboard (Top 3)")
        trader_address = '0x'
        if leaderboard.get('traders') and len(leaderboard['traders']) > 0:
            trader_address = leaderboard['traders'][0]['profile']['address']
            for t in leaderboard['traders']:
                name = t['profile'].get('name') or "Unknown"
                pnl = format_amount(t.get('total_pnl', '0'))
                print(f"{t.get('rank')}. {name} ({t['profile']['address']})")
                print(f"   PNL: ${pnl} | ROI: {t.get('roi', 0)}% | Win Rate: {t.get('win_rate', 0)}% | Markets: {t.get('markets_count', 0)}")

        print_divider()
        print(f"2. Fetching Trader Profile for {trader_address}...")
        profile_response = client.get_trader_profile(trader_address)
        print("\n>>> Trader Profile")
        p = profile_response.get('profile')
        if p:
            print(f"Name: {p.get('name') or 'Unknown'}")
            print(f"Address: {p.get('address')}")
            print(f"Joined: {p.get('profile_created_at')}")
        
        stats = profile_response.get('stats', {})
        if stats.get('t_30d'):
            s30 = stats['t_30d']
            print(f"30D PNL: ${format_amount(s30.get('pnl', '0'))} | 30D ROI: {s30.get('roi', 0)}% | Win Rate: {s30.get('win_rate', 0)}%")
        
        top_tags = profile_response.get('top_tags')
        if top_tags and len(top_tags) > 0:
            tags_str = ", ".join([f"{t['slug']} (${format_amount(t.get('pnl', '0'))})" for t in top_tags[:3]])
            print(f"Top Tags: {tags_str}")

        print_divider()
        print(f"3. Fetching Trader Markets for {trader_address}...")
        markets_response = client.get_trader_markets(trader_address, {'limit': 1})
        print("\n>>> Trader Markets (Latest 1)")
        market_id = '0'
        history = markets_response.get('history')
        if history and len(history) > 0:
            hm = history[0]
            market_id = hm['market']['id']
            print(f"Market: {hm['market']['question']}")
            print(f"Market ID: {hm['market']['id']}")
            print(f"Traded At: {hm.get('last_trade_at')}")
            print(f"Position PNL: ${format_amount(hm.get('pnl', '0'))} | ROI: {hm.get('roi', 0)}% | Volume: ${format_amount(hm.get('volume', '0'))}")
        else:
            print("No recent markets traded.")

        print_divider()
        print(f"4. Fetching Orders for Trader: {trader_address}, Market: {market_id}...")
        orders_response = client.get_trader_market_orders(trader_address, market_id)
        print("\n>>> Trader Market Orders")
        orders = orders_response.get('orders')
        if orders and len(orders) > 0:
            for i, o in enumerate(orders[:3]):
                price = f"{(float(o.get('price', '0')) / 1e6):.3f}"
                print(f"[Order {i+1}] {o.get('time')}")
                print(f"  Action: {o.get('side')} {o.get('outcome')} @ ${price}")
                print(f"  Shares: {format_amount(o.get('shares', '0'))} | USDC: ${format_amount(o.get('usdc', '0'))} | Fee: ${format_amount(o.get('fee', '0'))} | Taker: {'Yes' if o.get('is_taker') else 'No'}")
            if len(orders) > 3:
                print(f"  ... and {len(orders) - 3} more orders.")
        else:
            print("No orders found.")

        print_divider()
        print(f"5. Fetching Hourly Stats for Trader: {trader_address}...")
        hourly_stats_response = client.get_trader_hourly_stats(trader_address)
        print("\n>>> Trader Hourly Stats (Latest 3)")
        stats_list = hourly_stats_response.get('stats')
        if stats_list and len(stats_list) > 0:
            for s in stats_list[:3]:
                print(f"[{s.get('hour')}] PNL: ${format_amount(s.get('pnl', '0'))} | Volume: ${format_amount(s.get('volume', '0'))} | Markets: {s.get('market_count', 0)}")
        else:
            print("No hourly stats found.")

        print_divider()
        print(f"6. Fetching Market Detail for {market_id}...")
        market_detail_response = client.get_market_detail(market_id)
        print("\n>>> Market Detail")
        md = market_detail_response.get('market')
        if md:
            print(f"Question: {md.get('question')}")
            print(f"ID: {md.get('id')} | Slug: {md.get('slug')}")
            print(f"Dates: {md.get('start_date')} -> {md.get('end_date')}")
            print(f"Outcomes: {md.get('outcome_1')} vs {md.get('outcome_2')}")
            print(f"Total Volume: ${format_amount(market_detail_response.get('total_volume', '0'))}")
            print(f"Total Traders: {market_detail_response.get('total_traders', 0)}")

        print_divider()
        print("🔥 7. Starting PolyEdge SSE Stream...")
        print("Listening for new orders (will exit after 3 events)...\n")

        event_count = 0
        for order in client.stream_orders():
            if not order:
                continue
            event_count += 1
            taker = order.get('takerOrder')
            if taker and float(taker.get('shares', '0')) != 0:
                price = float(taker.get('usdc', '0')) / float(taker.get('shares', '0'))
                price_str = f"{price:.3f}"
            else:
                price_str = "0.000"
            
            market = order.get('market', {})
            trader_addr = taker.get('trader', {}).get('address') if taker and taker.get('trader') else 'Unknown'
            side = taker.get('side') if taker else ''
            outcome = taker.get('outcome') if taker else ''
            shares = taker.get('shares', '0') if taker else '0'
            usdc = taker.get('usdc', '0') if taker else '0'

            print(f"[Event #{event_count}] {order.get('timestamp')}")
            print(f"  Market: {market.get('question')} ({market.get('id')})")
            print(f"  Trader: {trader_addr}")
            print(f"  Action: {side} {outcome} @ ~${price_str}")
            print(f"  Size: {format_amount(shares)} shares (${format_amount(usdc)})")
            print("  ------------------------")
            
            if event_count >= 3:
                print("\nReceived 3 events. Exiting stream.")
                break

        print("\n✅ Finished successfully.")

    except Exception as e:
        print("\n❌ Error encountered during API tests:")
        print(e)

if __name__ == '__main__':
    main()
