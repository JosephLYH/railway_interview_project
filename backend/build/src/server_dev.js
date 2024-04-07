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
exports.dev_spin_down = exports.dev_spin_up = void 0;
require("dotenv/config");
const STARTING_containerID = 0;
const spawn = require('child_process').spawn;
let containerID = Number(process.env.STARTING_containerID) || 0;
let unusedPort = Number(process.env.STARTING_PORT) || 3001;
const dev_spin_up = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    containerID += 1;
    unusedPort += 1;
    spawn('docker', [
        'run',
        '-d',
        '--rm',
        '-p',
        `${unusedPort}:8080`,
        '--name',
        `container_${containerID}`,
        'test',
    ], {
        detached: true,
    });
    console.log(`Spinning up container_${containerID}`);
    return res.send(`Container ${containerID} is spinning up`);
});
exports.dev_spin_up = dev_spin_up;
const dev_spin_down = (req, res) => {
    if (containerID === STARTING_containerID) {
        console.error('No containers to spin down');
        return res.status(400).send('No containers to spin down');
    }
    spawn('docker', ['stop', `container_${containerID}`]);
    spawn('docker', ['rm', `container_${containerID}`]);
    console.log(`Spinning down container_${containerID}`);
    res.send(`Container ${containerID} is spinning down`);
    containerID -= 1;
    unusedPort -= 1;
};
exports.dev_spin_down = dev_spin_down;
//# sourceMappingURL=server_dev.js.map