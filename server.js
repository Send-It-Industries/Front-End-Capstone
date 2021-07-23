const express = require('express');

const app = express();
const axios = require('axios');
const token = require('./config');

app.use('/', express.static('/client/dist'));
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
    // auth: TOKEN,
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
