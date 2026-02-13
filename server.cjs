const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 8080 });

console.log("WebSocket server running on port 8080");

server.on('connection', (ws) => {
  console.log('Client connected!');
  setInterval(() => {
    const telemetry = {
      fuel: Math.floor(Math.random() * 100),
      power: Math.floor(Math.random() * 100),
      temperature: Math.floor(Math.random() * 200)
    }
    const jsonData = JSON.stringify(telemetry);
    ws.send(jsonData);
  }, 2000);
});
