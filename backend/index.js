const express = require('express');
const mongoDB = require('./db');
const app = express();
const port = 7000;
mongoDB().then(() => {
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        if (req.method === "OPTIONS") {
            return res.sendStatus(200);
        }
        
        next();
    });
    app.use(express.json());
    app.use('/api', require("./Routes/CreateUser"));
    app.use("/api",require("./Routes/LeaveRoute"))
    app.use('/api',require("./Routes/DisplayData"));
    app.use('/api',require("./Routes/updateLeaveStatus"))
    app.use('/api',require("./Routes/CreateAdmin"))
    app.listen(port, () => {
        console.log(`🚀 Server running on http://localhost:${port}`);
    });
}).catch(err => {
    console.error("❌ Server startup failed due to DB connection error:", err);
}); 