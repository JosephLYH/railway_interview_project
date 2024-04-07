"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prd_spin_down = exports.prd_spin_up = void 0;
require("dotenv/config");
const prd_spin_up = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Spinning up a container');
    const url = process.env.GRAPHQL_API_URL;
    const token = process.env.GRAPHQL_API_TOKEN;
    if (url === undefined || token === undefined) {
        return res.status(500).send('Environment variables not set');
    }
    const response = yield fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            query: `
        mutation {
          spinUpContainer {
            id
            status
          }
        }
      `,
        }),
    });
    const data = yield response.json();
    if (data === undefined) {
        return res.status(500).send('Error spinning up container');
    }
    return res.send('Container is spinning up');
});
exports.prd_spin_up = prd_spin_up;
const prd_spin_down = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Spinning down a container');
    return res.send('Container is spinning down');
});
exports.prd_spin_down = prd_spin_down;
//# sourceMappingURL=server_prd.js.map