import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import http from 'http';
import {connectDB} from './config/db.js';
import employeeRoutes from './routes/employee.routes.js';
import bookingRoutes from './routes/booking.routes.js';
import adminRoutes from './routes/admin.routes.js';
import {setupWebSocket} from "./websocket.js";

dotenv.config();

const app = express();

app.use(express.json()); //allow to accept JSON data in requests

const allowedOrigins = ["https://www.peridotnailsmoncton.ca","http://localhost:5173"];

app.use(cors({
    origin: (origin, callback) =>{
        if(allowedOrigins.includes(origin) || !origin){
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
}));

app.use("/api/employees", employeeRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/admin", adminRoutes);

const server = http.createServer(app);
setupWebSocket(server);




const PORT = process.env.PORT || 5000;

connectDB().then( () => {
    server.listen(PORT, () => {
        console.log("Server and WebSocket is running on http://localhost:" + PORT);
    })
})

