import {WebSocketServer} from 'ws';

const clients  = new Set();

export function setupWebSocket(server){
    const wss = new WebSocketServer({ server });

    wss.on('connection', (ws, req) => {
        console.log("Admin client connected via WebSocket");
        clients.add(ws);

        ws.on('close', () => {
            clients.delete(ws);
            console.log('Admin client disconnected');
        });

        ws.on('error', (err) => {
            console.error("WebSocket error: ", err);
        });

        ws.send(JSON.stringify({ type: "CONNECTED", message: "WebSocket connection established." }));
    });
}

export function broadcastToAdmins(data){
    for (const client of clients){
        if (client.readyState === WebSocket.OPEN){
            client.send(JSON.stringify(data))
        }
    }
}