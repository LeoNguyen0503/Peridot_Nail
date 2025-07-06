import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("Server is running!");
})

console.log(process.env.MONGO_URI);

app.listen(5000, () => {
    console.log("Server is running on http://locWalhost:5000");
});

