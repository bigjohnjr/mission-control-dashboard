# Mission Control Dashboard

A real-time mission control dashboard for a space exploration company, built with React, Redux, and TypeScript. Telemetry data streams in via WebSocket and displays across dynamic panels with live health status indicators.

**Live Demo:** [mission-control-dashboard-eta.vercel.app](https://mission-control-dashboard-eta.vercel.app/)

## Features

- Real-time telemetry monitoring for fuel, power, and temperature
- WebSocket connection for live data streaming from a Node.js server
- Redux state management for centralized telemetry and connection data
- Dynamic health status indicators (healthy, warning, critical) based on configurable thresholds
- Live connection status that reflects the actual WebSocket state

## Tech Stack

- **Frontend:** React, Redux Toolkit, TypeScript
- **Server:** Node.js, ws (WebSocket library)
- **Build Tool:** Vite
- **Deployment:** Vercel

## Running Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/bigjohnjr/mission-control-dashboard.git
   cd mission-control
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the WebSocket server:

   ```bash
   node server.cjs
   ```

4. In a separate terminal, start the React app:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

> **Note:** Both the WebSocket server and the React dev server must be running for full functionality. The Vercel deployment displays the frontend only — the WebSocket server is not deployed, so the connection status will show as "Disconnected."
