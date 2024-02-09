import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userController from '../controller/userController';
import setUser from '../controller/setUser';
import { log } from 'console';

dotenv.config();

const wappServer = express();
const API_PORT_SERVER = process.env.API_PORT_SERVER;

wappServer.use(bodyParser.json());

// Routes for the infra and user details
wappServer.use('/', userController, setUser);

wappServer.listen(API_PORT_SERVER, () => {
  console.log(`The server is running on port ${API_PORT_SERVER}`);
  log(`Um dia terá documentação`);
});
