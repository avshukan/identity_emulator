const QUEUE = [];

const { v4 } = require('uuid');
const fs = require('fs');
const express = require('express');

const app = express();
// const http = require('http');

// const server = http.createServer(app);
const xmlparser = require('express-xml-bodyparser');
const processQueue = require('./processQueue');
const getPropertyByKeyFragment = require('./getPropertyByKeyFragment');
const sendIdentityResponseSuccess = require('./sendIdentityResponseSuccess');
const sendIdentityResponseError = require('./sendIdentityResponseError');
const getIdentityResponseIdentified = require('./getIdentityResponseIdentified');
const getIdentityResponseError = require('./getIdentityResponseError');
const getIdentityResponseNoData = require('./getIdentityResponseNoData');
const getIdentityResponseNoResponse = require('./getIdentityResponseNoResponse');
const getIdentityResponseNotIdentified = require('./getIdentityResponseNotIdentified');

// .. other middleware ...
app.use(express.json());
app.use(express.urlencoded());
app.use(xmlparser());
// ... other middleware ...

app.post('/', (req, res) => {
  fs.writeFileSync('body.json', JSON.stringify(req.body));
  res.set('content-type', 'text/xml');
  const envelope = getPropertyByKeyFragment(req.body, 'envelope');
  const body = getPropertyByKeyFragment(envelope, 'body');
  const sendidentityrequest = getPropertyByKeyFragment(body, 'sendidentityrequest');
  console.log('sendidentityrequest', sendidentityrequest);
  const getidentityrequest = getPropertyByKeyFragment(body, 'getidentityrequest');
  console.log('getidentityrequest', getidentityrequest);
  if (sendidentityrequest) {
    const requestMessageID = v4();
    const identityrequestrequest = getPropertyByKeyFragment(sendidentityrequest, 'identityrequestrequest');
    console.log('identityrequestrequest', identityrequestrequest);
    const familyname = getPropertyByKeyFragment(identityrequestrequest, 'familyname');
    const medicalorgoid = getPropertyByKeyFragment(identityrequestrequest, 'medicalorgoid');

    if (medicalorgoid !== '1.2.643.5.1.13.13.12.2.1.1378') {
      res.send(sendIdentityResponseError(requestMessageID));
      return;
    }

    const answer = sendIdentityResponseSuccess(requestMessageID);
    QUEUE.push({ RequestMessageID: requestMessageID, Result: 'NoResponse', FamilyName: familyname });
    processQueue(QUEUE);
    res.send(answer);
  } else if (getidentityrequest) {
    const identityresultrequest = getPropertyByKeyFragment(getidentityrequest, 'identityresultrequest');
    console.log('identityresultrequest', identityresultrequest);
    // NO DATA
    if (identityresultrequest['ns1:requestmessageid'] === undefined && QUEUE.length === 0) {
      res.send(getIdentityResponseNoData());
      return;
    }

    const requestMessageID = getPropertyByKeyFragment(identityresultrequest, 'requestmessageid');
    let response;
    if (requestMessageID) {
      const index = QUEUE.findIndex((item) => item.RequestMessageID === requestMessageID);
      const founded = QUEUE.splice(index, 1);
      console.log('index founded', index, founded);
      response = founded.shift();
    } else {
      response = QUEUE.shift();
    }
    console.log('response', response);

    switch ((response && response.Result) || '') {
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

module.exports = app;

process.on('SIGINT', () => process.exit());
process.on('SIGTERM', () => process.exit());

// server.listen(3000);
