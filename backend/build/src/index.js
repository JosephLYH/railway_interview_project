"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const server_dev_1 = require("./server_dev");
const server_prd_1 = require("./server_prd");
const server = (0, express_1.default)();
server.get('/', (req, res) => {
    // send a webpage with two buttons
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
    server.get('/spin_up', server_dev_1.dev_spin_up);
    server.get('/spin_down', server_dev_1.dev_spin_down);
}
else {
    server.get('/spin_up', server_prd_1.prd_spin_up);
    server.get('/spin_down', server_prd_1.prd_spin_down);
}
const port = process.env.PORT || 3001;
server.listen(port, () => {
    console.log('Environment:', process.env.NODE_ENV);
    console.log(`Server is listening on ${port}`);
});
exports.default = server;
//# sourceMappingURL=index.js.map