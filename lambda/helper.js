const request = require('request-promise');

const BASE_URL = 'https://www.goodreads.com';

exports.handleError = (err, statusCode=500) => {
  console.log(err);
  return {
    statusCode: err.statusCode || statusCode,
    headers: {
      "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
    },
    body: JSON.stringify(err)
  }
}

exports.handleSuccess = data => {
  // console.log(data);
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
    },
    body: JSON.stringify(data),
  }
}

exports.requestProxy = (query, path, key) =>
  request({
    method: 'GET',
    url: `${BASE_URL}${path}`,
    qs: {
      ...query,
      key
    }
  })