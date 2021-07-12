function sendIdentityResponseError(RequestMessageID) {
  return `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:wsa="http://www.w3.org/2005/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
    <SOAP-ENV:Header>
      <wsse:Security>
        <wsse:BinarySecurityToken EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary" ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3" wsu:Id="X509-c220dd4e-60f0-4dd0-813f-ddc1987e2f03">MIICYDCCAckCFEiCwZkkqouSFvNGwtPZiNCc1LhvMA0GCSqGSIb3DQEBCwUAMG8xCzAJBgNVBAYTAlJVMQ8wDQYDVQQIDAZNb3Njb3cxDzANBgNVBAcMBk1vc2NvdzEOMAwGA1UECgwFRUdJU1oxDDAKBgNVBAsMA0lQUzEgMB4GA1UEAwwXaXBzLXRlc3Qucm9zbWluemRyYXYucnUwHhcNMTgxMTE5MDU0ODQ4WhcNMjMxMTE5MDU0ODQ4WjBvMQswCQYDVQQGEwJSVTEPMA0GA1UECAwGTW9zY293MQ8wDQYDVQQHDAZNb3Njb3cxDjAMBgNVBAoMBUVHSVNaMQwwCgYDVQQLDANJUFMxIDAeBgNVBAMMF2lwcy10ZXN0LnJvc21pbnpkcmF2LnJ1MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDHAJ9IOLepLsJf7BNubEJVl+h69wMS/Y6FNCqY4bkNllG6nBFG77795s7L4BeTc6kIiDMKwu3LYlOJDV3umo7hi/LniNm3nkMxrma2/YndZ4meaRpuLQtBsszj2yngwZcUafNjshtZike4Q+7p2YMz/T8zwInsIl9zScCFfYDrEwIDAQABMA0GCSqGSIb3DQEBCwUAA4GBAA2v1aU8UfyD7KPtDlOsGufDFdXrQgxbpU+jVE06hcsyPGSFNHHrE/mEtvWvSdjUZA9hEzi6eKgP9ZarLcyAv4UOdqvi6cZTSSFPZu6F31Hwca3+oOuVzSgRkXv0OjZ0fbBgiRaFZSvLnP4I+Q6uUfd8RR3g3xakjjK3BLDdmHV+</wsse:BinarySecurityToken>
        <ds:Signature Id="SIG-23a19a84-f5e4-4ac0-a90a-d57938307d10">
          <ds:SignedInfo>
            <ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
            <ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"/>
            <ds:Reference URI="#body">
              <ds:Transforms>
                <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
              </ds:Transforms>
              <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
              <ds:DigestValue>SAutne5xo30Zsa68gNg9u/TD1bY=</ds:DigestValue>
            </ds:Reference>
            <ds:Reference URI="#TS-1e490524-6cbc-46c5-ae74-1c54a2c61a33">
              <ds:Transforms>
                <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
              </ds:Transforms>
              <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
              <ds:DigestValue>fKaTQM5x3GJJjTRl0TZqifKO+mA=</ds:DigestValue>
            </ds:Reference>
            <ds:Reference URI="#id-4253d8da-1933-4831-821c-eb59f9c60caa">
              <ds:Transforms>
                <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
              </ds:Transforms>
              <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
              <ds:DigestValue>G/iLm28Ewaavbi3ara23PAhRIv0=</ds:DigestValue>
            </ds:Reference>
            <ds:Reference URI="#id-d8e53e10-87b0-4342-b74d-31c98f4b95cf">
              <ds:Transforms>
                <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
              </ds:Transforms>
              <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
              <ds:DigestValue>GZvIku7ARvGd+ssMOqkECvnIhso=</ds:DigestValue>
            </ds:Reference>
            <ds:Reference URI="#id-1a620796-7ff5-46b5-be74-4a78767ed2e6">
              <ds:Transforms>
                <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
              </ds:Transforms>
              <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
              <ds:DigestValue>AHseFlyseGWqP0cXk01MJyVnNCU=</ds:DigestValue>
            </ds:Reference>
          </ds:SignedInfo>
          <ds:SignatureValue>a2KZrfQtDzvMasSePogqJJEwk/9jgcuVnNEB7sp/Mekt4Dh8LcZJSU+NmUiykMMR6f0jfg2LNoHt5bFb6YS5m4M6r9Qo2M8WsxMM3VpdiDHOGDrOKqViPbobigI1zuiYZehsClJdiC0f3GLkbTqPJ768+xZFDx1sD3KZ2gFT3Jc=</ds:SignatureValue>
          <ds:KeyInfo Id="KI-9674c21f-5225-4dd8-819f-276de2052571">
            <wsse:SecurityTokenReference wsu:Id="STR-9bc912b3-c20d-4475-bc0b-429fa7dc4abe">
              <wsse:Reference URI="#X509-c220dd4e-60f0-4dd0-813f-ddc1987e2f03" ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3"/>
            </wsse:SecurityTokenReference>
          </ds:KeyInfo>
        </ds:Signature>
        <wsu:Timestamp wsu:Id="TS-1e490524-6cbc-46c5-ae74-1c54a2c61a33">
          <wsu:Created>2021-06-16T08:26:22.339Z</wsu:Created>
          <wsu:Expires>2021-06-16T08:36:22.339Z</wsu:Expires>
        </wsu:Timestamp>
      </wsse:Security>
      <egisz:transportHeader xmlns:egisz="http://egisz.rosminzdrav.ru">
        <egisz:authInfo>
          <egisz:clientEntityId>421d318d-2557-bdba-cf2c-21c20d3102be</egisz:clientEntityId>
        </egisz:authInfo>
      </egisz:transportHeader>
      <wsa:MessageID wsu:Id="id-4253d8da-1933-4831-821c-eb59f9c60caa">97a9a2d5-d8eb-43d5-97df-36e00e1c4b82</wsa:MessageID>
      <wsa:Action wsu:Id="id-d8e53e10-87b0-4342-b74d-31c98f4b95cf">getIdentityResponse</wsa:Action>
      <wsa:To wsu:Id="id-1a620796-7ff5-46b5-be74-4a78767ed2e6">https://ips-test.rosminzdrav.ru/9e8315b1d98db</wsa:To>
    </SOAP-ENV:Header>
    <SOAP-ENV:Body wsu:Id="body">
      <ns2:getIdentityResponse xmlns:ns2="http://egisz.rosminzdrav.ru">
        <ns2:IdentityResultResponse>
          <ns2:Result>Error</ns2:Result>
          <ns2:RequestMessageID>${RequestMessageID}</ns2:RequestMessageID>
          <ns2:status>error</ns2:status>
          <ns2:errors>
            <ns2:item>
              <ns2:code>MEDICAL_ORG_OID_NOT_VALID</ns2:code>
              <ns2:message>ОИД медицинской организации не соответствует справочнику</ns2:message>
            </ns2:item>
          </ns2:errors>
        </ns2:IdentityResultResponse>
      </ns2:getIdentityResponse>
    </SOAP-ENV:Body>
  </SOAP-ENV:Envelope>`;
}

module.exports = sendIdentityResponseError;
