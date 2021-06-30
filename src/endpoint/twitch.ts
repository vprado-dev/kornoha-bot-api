import { endpoint } from '@ev-fns/endpoint';

export const twitchAccountLinkPost = endpoint(async (req, res) => {
  console.log(req.headers);

  res.status(200).end();
});
