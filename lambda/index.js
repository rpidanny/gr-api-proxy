const parser = require('xml2json');
const { handleError, handleSuccess, requestProxy } = require('./helper');

exports.handler = (event, context) =>
  new Promise((resolve, reject) => {
    const { GR_KEY } = process.env;
    const { queryStringParameters, path } = event;
    
    if (GR_KEY) {
      requestProxy(queryStringParameters, path, GR_KEY)
        .then(data => {
          console.log('[GR]: Parsing XML to JSON');
          const jsonData = parser.toJson(data, { object: true });
          // Delete Request key as it contains api key
          delete jsonData.GoodreadsResponse['Request']
          resolve(handleSuccess(jsonData.GoodreadsResponse))
        })
        .catch(err => handleError(err))
    } else {
      reject(handleError('GR_KEY not set in env'));
    }
  });
