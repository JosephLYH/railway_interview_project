import 'dotenv/config';
import express from 'express';
import {dev_spin_up, dev_spin_down} from './server_dev';
import {prd_spin_up, prd_spin_down} from './server_prd';

const server = express();

if (process.env.NODE_ENV === 'development') {
  server.get('/spin_up', dev_spin_up);
  server.get('/spin_down', dev_spin_down);
} else {
  server.get('/spin_up', prd_spin_up);
  server.get('/spin_down', prd_spin_down);
}

const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log('Environment:', process.env.NODE_ENV);
  console.log(`Server is listening on ${port}`);
});

export default server;
