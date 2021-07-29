import { endpoint } from '@ev-fns/endpoint';
import fetch from 'node-fetch';

export const catGetOne = endpoint(async (req, res) => {
  const flagGif = Math.floor(Math.random() * 2);

  const url = new URL('https://api.thecatapi.com/v1/images/search');

  // eslint-disable-next-line no-extra-boolean-cast
  if (!!flagGif) {
    url.searchParams.append('mime_types', 'gif');
    console.log(url.toString());
  }

  const response = await fetch(url.toString(), {
    headers: {
      'x-api-key': '' + process.env.CAT_API_KEY,
    },
  });

  const jsonCat = await response.json();

  res.status(200).json(jsonCat);
});
