import 'dotenv/config';

const STARTING_CONTAINER_ID = 0;

const spawn = require('child_process').spawn;

let container_id = Number(process.env.STARTING_CONTAINER_ID) || 0;
let unused_port = Number(process.env.STARTING_PORT) || 3000;

async function dev_spin_up(req: any, res: any) {
  console.log('Spinning up a container');

  container_id += 1;
  unused_port += 1;

  spawn(
    'docker',
    [
      'run',
      '-d',
      '--rm',
      '-p',
      `${unused_port}:8080`,
      '--name',
      `container_${container_id}`,
      'test',
    ],
    {
      detached: true,
    }
  );

  return res.send(`Container ${container_id} is spinning up`);
}

async function dev_spin_down(req: any, res: any) {
  if (container_id === STARTING_CONTAINER_ID) {
    return res.send('No containers to spin down');
  }

  console.log('Spinning down a container');

  spawn('docker', ['stop', `container_${container_id}`]);
  spawn('docker', ['rm', `container_${container_id}`]);

  res.send(`Container ${container_id} is spinning down`);

  container_id -= 1;
  unused_port -= 1;
}

export {dev_spin_up, dev_spin_down};
