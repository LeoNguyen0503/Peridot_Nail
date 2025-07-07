import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js';
import employeeRoutes from './routes/employee.routes.js';

dotenv.config();

const app = express();

app.use(express.json()); //allow to accept JSON data in requests

app.use("/api/employees", employeeRoutes);


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    connectDB();
    console.log("Server is running on http://localhost:" + PORT);
});

