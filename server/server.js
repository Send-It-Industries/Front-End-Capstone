// This file odes not work for some reason. it appears that the path in
// express.static isn't working corectly. however I cannot figure out why
// This file is identical to server.js in the root directory however paths
// have been updated to account for moving this into a server folder

const express = require('express');

const app = express();
const axios = require('axios');
const token = require('../config/config'); // updated path works

app.use(express.static('../client/dist')); // updated path doesn't work
app.use(express.json());

app.all('/*', (req, res) => {
  const {
    method,
    url,
    params,
    query,
  } = req;
  console.log('url: ', url);
  console.log('query: ', query);
  console.log('params: ', params);

  axios({
    method,
    url,
    baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/',
    headers: {
      'User-Agent': 'request',
      Authorization: `${token.TOKEN}`,
    },
  })
    .then(({ data }) => {
      console.log('result data', data);
      res.send(data);
    })
    .catch((err) => {
      console.log('Error comminicating with Atlier API: ', err);
    });
//   next(); // pass control to the next handler
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('👂👀 Listening on PORT 3000 👂👀');
});
