
const url = 'https://apigee-prod.api-wr.com/wx-infra-test-connection';
//const request = require ('request');
// request(url, { json: true }, (err, res, body) => {
//   if (err) { return console.log(err); }
//   console.log(body.url);
//   console.log(body.explanation);
// });


const axios = require('axios');
const https1 = require('https');

const callApi = async(url, clientid) => {

    
    const instance = axios.create({
        httpsAgent: new https1.Agent({  
          rejectUnauthorized: false
        }),
        headers: {'client_id': clientid}
      });

    const results = await instance.get(url);
    const data = results.data;

    return data;
}

var clientid = process.env.client_id;
console.log (clientid);
callApi(url, clientid).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});


