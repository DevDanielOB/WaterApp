
import express from 'express';
import { env } from 'process';
const wappServer = express();


const port = env.API_PORT_SERVER || 3000;

wappServer.get("/", (req, res: any) => {
    res.send("The server is running");
})

wappServer.listen(port, () => {
    console.log(`The server is running on port ${port}`);
})