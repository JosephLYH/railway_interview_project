var http = require('http');

http.createServer((req, res) => {
  res.write('Hello World!')
  res.end('Hello World\n')
}).listen(8000);