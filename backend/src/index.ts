import 'dotenv/config';
import express from 'express';
import {dev_spin_up, dev_spin_down} from './server_dev';
import {prd_spin_up, prd_spin_down} from './server_prd';

const server = express();

server.get('/', (req, res) => {
  // serve a static HTML page
  res.send(`
    <html>
      <head>
        <title>Container Management</title>
      </head>
      <body>
        <h1>Container Management</h1>
        <button onclick="fetch('/spin_up')">Spin up</button>
        <button onclick="fetch('/spin_down')">Spin down</button>
      </body>
    </html>
  `);
});

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
