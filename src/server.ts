import express from 'express';

const server = express();

server.get('/spin_up', (req, res) => {
  console.log('Spinning up a container');
  res.send('Container is spinning up');
});

server.get('/spin_down', (req, res) => {
  console.log('Spinning down a container');
  res.send('Container is spinning down');
});

export default server;
