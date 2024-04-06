import 'dotenv/config';

const prd_spin_up = async (req: any, res: any) => {
  console.log('Spinning up a container');

  const url: string | undefined = process.env.GRAPHQL_API_URL;
  const token: string | undefined = process.env.GRAPHQL_API_TOKEN;

  if (url === undefined || token === undefined) {
    return res.status(500).send('Environment variables not set');
  }

  const response = await fetch(url, {
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

  const data = await response.json();

  if (data === undefined) {
    return res.status(500).send('Error spinning up container');
  }

  return res.send('Container is spinning up');
};

const prd_spin_down = async (req: any, res: any) => {
  console.log('Spinning down a container');
  return res.send('Container is spinning down');
};

export {prd_spin_up, prd_spin_down};
