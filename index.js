const QUEUE = [];

const { v4 } = require('uuid');
const express = require('express');

const app = express();
const http = require('http');

const server = http.createServer(app);
const xmlparser = require('express-xml-bodyparser');
const processQueue = require('./processQueue');
const sendIdentityResponseSuccess = require('./sendIdentityResponseSuccess');
const sendIdentityResponseError = require('./sendIdentityResponseError');
const getIdentityResponseIdentified = require('./getIdentityResponseIdentified');
const getIdentityResponseError = require('./getIdentityResponseError');
const getIdentityResponseNoData = require('./getIdentityResponseNoData');
const getIdentityResponseNoResponse = require('./getIdentityResponseNoResponse');
const getIdentityResponseNotIdentified = require('./getIdentityResponseNotIdentified')
    ;

// .. other middleware ...
app.use(express.json());
app.use(express.urlencoded());
app.use(xmlparser());
// ... other middleware ...

app.post('/', (req, res, next) => {
  const envelopeBody = req.body['s:envelope']['s:body'][0];
  // console.log(envelopeBody);
  // console.log(envelopeBody[0]);
  if ('ns1:sendidentityrequest' in envelopeBody) {
    const requestMessageID = v4();
    const sendidentityrequest = envelopeBody['ns1:sendidentityrequest'];
    // console.log(sendidentityrequest);
    const identityrequestrequest = sendidentityrequest[0]['ns1:identityrequestrequest'];
    // console.log('identityrequestrequest', identityrequestrequest);
    const familyname = identityrequestrequest[0]['ns1:familyname'][0];
    const medicalorgoid = identityrequestrequest[0]['ns1:medicalorgoid'];
    // console.log('medicalorgoid', medicalorgoid);

    if (medicalorgoid[0] !== '1.2.643.5.1.13.13.12.2.1.1378') {
      res.send(sendIdentityResponseError(requestMessageID));
      return;
    }

    const answer = sendIdentityResponseSuccess(requestMessageID);

    QUEUE.push({ RequestMessageID: requestMessageID, Result: 'NoResponse', FamilyName: familyname });
    processQueue(QUEUE);
    res.send(answer);
  } else if ('ns1:getidentityrequest' in envelopeBody) {
    // console.log(envelopeBody[0]);
    const getidentityrequest = envelopeBody['ns1:getidentityrequest'][0];
    console.log('getidentityrequest', getidentityrequest);
    const identityresultrequest = getidentityrequest['ns1:identityresultrequest'][0];
    console.log('identityresultrequest', identityresultrequest);
    const medicalorgoid = identityresultrequest['ns1:medicalorgoid'][0];
    // NO DATA
    if (identityresultrequest['ns1:requestmessageid'] === undefined && QUEUE.length === 0) {
      res.send(getIdentityResponseNoData());
      return;
    }

    let response;
    if (identityresultrequest['ns1:requestmessageid'] !== undefined) {
      const requestMessageID = identityresultrequest['ns1:requestmessageid'][0];
      const index = QUEUE.findIndex((item) => item.RequestMessageID === requestMessageID);
      const founded = QUEUE.splice(index, 1);
      console.log('index founded', index, founded);
      response = founded.shift();
    } else {
      response = QUEUE.shift();
    }
    console.log('response', response);

    switch (response.Result) {
      case 'NoResponse':
        res.send(getIdentityResponseNoResponse());
        QUEUE.push(response);
        break;
      case 'Error':
        res.send(getIdentityResponseError());
        break;
      case 'NotIdentified':
        res.send(getIdentityResponseNotIdentified(response.RequestMessageID));
        break;
      case 'Identified':
        res.send(getIdentityResponseIdentified({ RequestMessageID: response.RequestMessageID, ...response.Payload }));
        break;
      default:
        res.send('default');
        break;
    }
    processQueue(QUEUE);
  } else {
    res.send('UNKNOWN!!!');
  }
});

server.listen(3000);
