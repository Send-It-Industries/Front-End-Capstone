/* eslint-disable linebreak-style */
const express = require('express');

const app = express();
const path = require('path');
const axios = require('axios');
const token = require('../config/config'); 

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

app.all('/api*', (req, res) => {
  const {
    method,
    params,
    query,
  } = req;

  let {
    url,
  } = req;
  url = url.split('/api').join('');

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
