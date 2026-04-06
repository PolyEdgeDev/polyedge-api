# PolyEdge Python Example

This directory contains a complete Python example for the PolyEdge API V1. It includes a lightweight SDK (`polyedge.py`) and a demonstration script (`example.py`).

## Prerequisites

- Python 3.7 or higher
- `pip` (Python package installer)

## Installation

1. Navigate to this directory:
   ```bash
   cd examples/python
   ```

2. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Configuration

Open `example.py` and replace the `API_KEY` placeholder with your actual PolyEdge API key:

```python
API_KEY = 'your_api_key_here'
```

## Usage

Run the example script:

```bash
python example.py
```

## Project Structure

- `example.py`: The main entry point demonstrating all API capabilities.
- `polyedge.py`: A reusable client class for the PolyEdge API.
- `parser_compact_tx.py`: Utility to parse the optimized compact array format into structured dicts.
- `sseclient.py`: A lightweight, MIT-licensed Server-Sent Events client.
- `requirements.txt`: List of Python dependencies.

## Key Features

- **Automatic Reconnection**: The SSE client handles connection drops gracefully.
- **Compact Format Support**: Includes a parser for the high-performance array-based data format.
- **Type Hinting**: Clean, readable code using standard Python patterns.
