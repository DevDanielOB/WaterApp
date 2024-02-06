// wappServer.ts

import express from 'express';
import dotenv from 'dotenv';
import userController from '../controller/userController';
import { log } from 'console';

dotenv.config();

const wappServer = express();
const API_PORT_SERVER = process.env.API_PORT_SERVER;
const API_HOST_SERVER = process.env.SESSION_BASE_URL;

// Routes for the infra and user details
wappServer.use('/', userController);

wappServer.listen(API_PORT_SERVER, () => {
  console.log(`The server is running on port ${API_PORT_SERVER}`);
  log(`Um dia terá documentação`);

});
