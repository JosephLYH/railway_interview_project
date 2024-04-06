import 'dotenv/config';

const STARTING_containerID = 0;

const spawn = require('child_process').spawn;

let containerID = Number(process.env.STARTING_containerID) || 0;
let unusedPort = Number(process.env.STARTING_PORT) || 3001;

const dev_spin_up = async (req: any, res: any) => {
  containerID += 1;
  unusedPort += 1;

  spawn(
    'docker',
    [
      'run',
      '-d',
      '--rm',
      '-p',
      `${unusedPort}:8080`,
      '--name',
      `container_${containerID}`,
      'test',
    ],
    {
      detached: true,
    }
  );
  console.log(`Spinning up container_${containerID}`);
  return res.send(`Container ${containerID} is spinning up`);
};

const dev_spin_down = (req: any, res: any) => {
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

export {dev_spin_up, dev_spin_down};
