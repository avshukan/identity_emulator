// 51678f5a-d8b8-46b2-8bc7-04b26b471fe4
function sendIdentityResponseSuccess(RequestMessageID){
      return `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:wsa="http://www.w3.org/2005/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
  <SOAP-ENV:Header>
    <wsse:Security>
      <wsse:BinarySecurityToken EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary" ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3" wsu:Id="X509-ca2336ec-0d3f-420b-b9d7-bb378c51a5e2">MIICYDCCAckCFEiCwZkkqouSFvNGwtPZiNCc1LhvMA0GCSqGSIb3DQEBCwUAMG8xCzAJBgNVBAYTAlJVMQ8wDQYDVQQIDAZNb3Njb3cxDzANBgNVBAcMBk1vc2NvdzEOMAwGA1UECgwFRUdJU1oxDDAKBgNVBAsMA0lQUzEgMB4GA1UEAwwXaXBzLXRlc3Qucm9zbWluemRyYXYucnUwHhcNMTgxMTE5MDU0ODQ4WhcNMjMxMTE5MDU0ODQ4WjBvMQswCQYDVQQGEwJSVTEPMA0GA1UECAwGTW9zY293MQ8wDQYDVQQHDAZNb3Njb3cxDjAMBgNVBAoMBUVHSVNaMQwwCgYDVQQLDANJUFMxIDAeBgNVBAMMF2lwcy10ZXN0LnJvc21pbnpkcmF2LnJ1MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDHAJ9IOLepLsJf7BNubEJVl+h69wMS/Y6FNCqY4bkNllG6nBFG77795s7L4BeTc6kIiDMKwu3LYlOJDV3umo7hi/LniNm3nkMxrma2/YndZ4meaRpuLQtBsszj2yngwZcUafNjshtZike4Q+7p2YMz/T8zwInsIl9zScCFfYDrEwIDAQABMA0GCSqGSIb3DQEBCwUAA4GBAA2v1aU8UfyD7KPtDlOsGufDFdXrQgxbpU+jVE06hcsyPGSFNHHrE/mEtvWvSdjUZA9hEzi6eKgP9ZarLcyAv4UOdqvi6cZTSSFPZu6F31Hwca3+oOuVzSgRkXv0OjZ0fbBgiRaFZSvLnP4I+Q6uUfd8RR3g3xakjjK3BLDdmHV+</wsse:BinarySecurityToken>
      <ds:Signature Id="SIG-bf609e5d-de45-4646-8aec-598711c5e42f">
        <ds:SignedInfo>
          <ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
          <ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"/>
          <ds:Reference URI="#body">
            <ds:Transforms>
              <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
            </ds:Transforms>
            <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
            <ds:DigestValue>6AeBYgRl89VrrsE3H1M1RTeInHk=</ds:DigestValue>
          </ds:Reference>
          <ds:Reference URI="#TS-ac2675e9-2fdf-4011-8302-5bfe169c54a0">
            <ds:Transforms>
              <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
            </ds:Transforms>
            <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
            <ds:DigestValue>HB3PokrWzt+VU/WfhWS5UzHXHF8=</ds:DigestValue>
          </ds:Reference>
          <ds:Reference URI="#id-88e88f64-a844-4145-b696-099d0310af38">
            <ds:Transforms>
              <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
            </ds:Transforms>
            <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
            <ds:DigestValue>jn/ykJ9+ZgvyInD7ENE2tiW/f8Y=</ds:DigestValue>
          </ds:Reference>
          <ds:Reference URI="#id-85304bc7-ffd8-4246-a66c-c10155edfd82">
            <ds:Transforms>
              <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
            </ds:Transforms>
            <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
            <ds:DigestValue>TulZIJL/f0P/+EO3w+6+DtDUSKk=</ds:DigestValue>
          </ds:Reference>
          <ds:Reference URI="#id-43c0d0b1-e364-478e-9467-c522b993a44e">
            <ds:Transforms>
              <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
            </ds:Transforms>
            <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
            <ds:DigestValue>kiiK8V88ZTDsVh1Iu6aeKmYu2VI=</ds:DigestValue>
          </ds:Reference>
        </ds:SignedInfo>
        <ds:SignatureValue>jumyqSu10+bO56yzVYKxMvSEafA5speilfklkWXlbyIWoD72Wc19mWz6gTPbeeOsHRju7656x8+o4FbpO/I9MTOu9HF+SclrHaxDPrNn2zcL9ZFLr4dkohYgaxgGoTsgbJSCSV7kP7e91LWiiXQ0wo4CAJLY5aHgnuDqm/C6G1o=</ds:SignatureValue>
        <ds:KeyInfo Id="KI-09d1e166-04d6-4110-baf2-51ccd36056f1">
          <wsse:SecurityTokenReference wsu:Id="STR-8c8cf3df-8d2a-40a2-a999-99ee69d7162f">
            <wsse:Reference URI="#X509-ca2336ec-0d3f-420b-b9d7-bb378c51a5e2" ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3"/>
          </wsse:SecurityTokenReference>
        </ds:KeyInfo>
      </ds:Signature>
      <wsu:Timestamp wsu:Id="TS-ac2675e9-2fdf-4011-8302-5bfe169c54a0">
        <wsu:Created>2021-06-16T08:20:40.642Z</wsu:Created>
        <wsu:Expires>2021-06-16T08:30:40.642Z</wsu:Expires>
      </wsu:Timestamp>
    </wsse:Security>
    <egisz:transportHeader xmlns:egisz="http://egisz.rosminzdrav.ru">
      <egisz:authInfo>
        <egisz:clientEntityId>421d318d-2557-bdba-cf2c-21c20d3102be</egisz:clientEntityId>
      </egisz:authInfo>
    </egisz:transportHeader>
    <wsa:MessageID wsu:Id="id-88e88f64-a844-4145-b696-099d0310af38">d067bef9-1498-44d0-bd40-037a1e09f040</wsa:MessageID>
    <wsa:Action wsu:Id="id-85304bc7-ffd8-4246-a66c-c10155edfd82">sendIdentityResponse</wsa:Action>
    <wsa:To wsu:Id="id-43c0d0b1-e364-478e-9467-c522b993a44e">https://ips-test.rosminzdrav.ru/9e8315b1d98db</wsa:To>
  </SOAP-ENV:Header>
  <SOAP-ENV:Body wsu:Id="body">
    <ns2:sendIdentityResponse xmlns:ns2="http://egisz.rosminzdrav.ru">
      <ns2:IdentityRequestResponse>
        <ns2:RequestMessageID>${RequestMessageID}</ns2:RequestMessageID>
        <ns2:status>success</ns2:status>
      </ns2:IdentityRequestResponse>
    </ns2:sendIdentityResponse>
  </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`
  };

module.exports = sendIdentityResponseSuccess;