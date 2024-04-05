import 'dotenv/config';
import server from './server';

const port = process.env.SERVER_PORT || 3000;

server.listen(port, () => {
  console.log('Environment:', process.env.NODE_ENV);
  console.log(`Server is listening on ${port}`);
});
