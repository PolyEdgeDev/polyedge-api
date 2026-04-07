import requests
from urllib.parse import urlencode
import json
from sseclient import SSEClient
from parser_compact_tx import parse_compact_tx

class PolyEdgeClient:
    """
    PolyEdge API Python SDK (V1)
    """
    def __init__(self, api_key, base_url="https://api.polyedge.dev/v1"):
        """
        Args:
            api_key (str): Your PolyEdge API Key
            base_url (str): Base API URL
        """
        self.api_key = api_key
        self.base_url = base_url
        self.headers = {
            "X-PolyEdge-Key": self.api_key,
            "Accept": "application/json"
        }
    
    def _get(self, endpoint, params=None):
        clean_params = {k: v for k, v in params.items() if v is not None} if params else {}
        url = f"{self.base_url}{endpoint}"
        response = requests.get(url, headers=self.headers, params=clean_params)
        response.raise_for_status()
        return response.json()

    def get_leaderboard(self, params=None):
        """
        Retrieve the trader leaderboard.
        
        Args:
            params (dict, optional): Query parameters
                limit (int): Number of results to return (Default: 50, Max: 100).
                offset (int): Pagination offset (Default: 0).
                time_frame (str): '1H', '4H', '1D', '3D', '7D', '30D' (Default: '30D').
                sort_by (str): 'pnl', 'roi', 'win_rate', 'market_count' (Default: 'pnl').
                tag (str): Filter by specific market tag (e.g., 'crypto', 'sports').
                min_win_rate (float): Minimum win rate (0-100).
                max_win_rate (float): Maximum win rate (0-100).
                min_roi (float): Minimum ROI percentage.
                max_roi (float): Maximum ROI percentage.
                last_active_hours (int): Filter traders active in the last N hours.
                min_market_count (int): Minimum number of markets traded.
                max_market_count (int): Maximum number of markets traded.
                
        Returns:
            dict: API response.
        """
        return self._get("/analytics/leaderboard", params)

    def get_trader_profile(self, address):
        """
        Get a trader's detailed profile including tags, stats, and metadata.
        
        Args:
            address (str): The EVM wallet address of the trader.
            
        Returns:
            dict: API response.
        """
        return self._get(f"/traders/{address}")

    def get_trader_markets(self, address, params=None):
        """
        Retrieve a trader's trading history aggregated by market.
        
        Args:
            address (str): The EVM wallet address of the trader.
            params (dict, optional): Query parameters
                limit (int): Number of markets to return (Default: 20, Max: 100).
                offset (int): Pagination offset (Default: 0).
                is_active (bool): Filter by active (unresolved) markets only.
                
        Returns:
            dict: API response.
        """
        return self._get(f"/traders/{address}/markets", params)

    def get_trader_market_orders(self, address, market_id):
        """
        Retrieve a specific trader's order history within a specific market.
        
        Args:
            address (str): The EVM wallet address of the trader.
            market_id (str|int): The specific market ID.
            
        Returns:
            dict: API response.
        """
        return self._get(f"/traders/{address}/markets/{market_id}/orders")

    def get_trader_hourly_stats(self, address, params=None):
        """
        Get hourly aggregated performance data for a specific trader.
        
        Args:
            address (str): The EVM wallet address of the trader.
            params (dict, optional): Query parameters
                tag (str): Filter by a specific market tag (e.g., 'crypto', 'politics').
                
        Returns:
            dict: API response.
        """
        return self._get(f"/traders/{address}/hourly_stats", params)

    def get_market_detail(self, market_id):
        """
        Retrieve detailed information about a specific market.
        
        Args:
            market_id (str|int): The unique numeric ID of the market.
            
        Returns:
            dict: API response.
        """
        return self._get(f"/markets/{market_id}")

    def stream_orders(self, params=None):
        """
        Subscribe to live mempool orders via SSE.
        Returns a generator that yields parsed order objects.
        
        Args:
            params (dict, optional): Query parameters for filtering the stream.
                traders (str): Comma-separated list of trader addresses.
                tags (str): Comma-separated list of market tags.
                series (str): Comma-separated list of series slugs.
                min_usdc (float): Minimum USDC amount.
                max_usdc (float): Maximum USDC amount.
                min_shares (float): Minimum Shares amount.
                max_shares (float): Maximum Shares amount.
                min_price (float): Minimum Price (0 to 100).
                max_price (float): Maximum Price (0 to 100).
                format (str): Output format (leave empty for compact optimized arrays).
                
        Yields:
            dict|list: Parsed order data.
        """
        headers = self.headers.copy()
        headers["Accept"] = "text/event-stream"
        
        clean_params = {k: v for k, v in params.items() if v is not None} if params else {}
        query = urlencode(clean_params)
        
        url = f"{self.base_url}/stream/orders"
        if query:
            url += f"?{query}"
            
        client = SSEClient(url, headers=headers)
        for event in client:
            if event.event == 'order' or not event.event:
                if event.data:
                    try:
                        raw_data = json.loads(event.data)
                        if params and params.get('format') == 'json':
                            yield raw_data
                        else:
                            yield parse_compact_tx(raw_data)
                    except Exception as e:
                        print(f"Failed to parse order data {e}")
