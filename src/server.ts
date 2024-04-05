import 'dotenv/config';
import express from 'express';
import {dev_spin_up, dev_spin_down} from './dev_server';
import {prd_spin_up, prd_spin_down} from './prd_server';

const server = express();

if (process.env.NODE_ENV === 'dev') {
  server.get('/spin_up', dev_spin_up);
  server.get('/spin_down', dev_spin_down);
} else {
  server.get('/spin_up', prd_spin_up);
  server.get('/spin_down', prd_spin_down);
}

const port = process.env.SERVER_PORT || 3000;

server.listen(port, () => {
  console.log('Environment:', process.env.NODE_ENV);
  console.log(`Server is listening on ${port}`);
});

export default server;
