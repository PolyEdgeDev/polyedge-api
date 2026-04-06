# PolyEdge Node.js Example

This directory contains a complete Node.js example for the PolyEdge API V1. It includes a lightweight SDK (`polyedge.js`) and a demonstration script (`example.js`).

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

## Installation

1. Navigate to this directory:
   ```bash
   cd examples/nodejs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

Open `example.js` and replace the `API_KEY` placeholder with your actual PolyEdge API key:

```javascript
const API_KEY = 'your_api_key_here';
```

## Usage

Run the example script:

```bash
npm start
```

## Project Structure

- `example.js`: The main entry point demonstrating all API capabilities.
- `polyedge.js`: A reusable client class for the PolyEdge API.
- `parser_compact_tx.js`: Utility to parse the optimized compact array format into structured objects.
- `package.json`: Project configuration and dependencies.

## Key Dependencies

- `eventsource-client`: A robust SSE client that supports auto-reconnect and async iterators.
