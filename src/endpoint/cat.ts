import { endpoint } from '@ev-fns/endpoint';
import fetch from 'node-fetch';

export const catGetOne = endpoint(async (req, res) => {
  const url = new URL('https://api.thecatapi.com/v1/images/search');

  const response = await fetch(url.toString(), {
    headers: {
      'x-api-key': '' + process.env.CAT_API_KEY,
    },
  });

  const json = await response.json();

  res.status(200).json(json);
});
