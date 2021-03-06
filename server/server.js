/* eslint-disable max-len */
/* eslint-disable linebreak-style */
const express = require('express');

const app = express();
const path = require('path');
const axios = require('axios');

require('dotenv').config();

const token = require('../config/config');

console.log('token: ', token);

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

app.all('/api*', (req, res) => {
  const {
    method,
    params,
    query,
    body,
  } = req;

  let {
    url,
  } = req;
  url = url.split('/api').join('');

  // console.log('url: ', url);
  // console.log('query: ', query);
  // console.log('params: ', params);
  // console.log('body: ', body);

  axios({
    method,
    url,
    baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/',
    data: body,
    headers: {
      'User-Agent': 'request',
      Authorization: `${token.TOKEN}`,
      'Content-Type': 'application/json',
    },
  })
    .then(({ data }) => {
      // console.log('result data', data);
      res.send(data);
    })
    .catch((err) => {
      console.log('Error comminicating with Atlier API: ', err);
    });
//   next(); // pass control to the next handler
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`👂👀 Listening on PORT ${port} 👂👀`);
});
