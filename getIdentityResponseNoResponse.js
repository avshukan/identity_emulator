// 51678f5a-d8b8-46b2-8bc7-04b26b471fe4
function getIdentityResponseNoResponse(){
      return `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:wsa="http://www.w3.org/2005/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
      <SOAP-ENV:Header>
        <wsse:Security>
          <wsse:BinarySecurityToken EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary" ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3" wsu:Id="X509-18037c17-a3fd-4538-8639-e6d932283c67">MIICYDCCAckCFEiCwZkkqouSFvNGwtPZiNCc1LhvMA0GCSqGSIb3DQEBCwUAMG8xCzAJBgNVBAYTAlJVMQ8wDQYDVQQIDAZNb3Njb3cxDzANBgNVBAcMBk1vc2NvdzEOMAwGA1UECgwFRUdJU1oxDDAKBgNVBAsMA0lQUzEgMB4GA1UEAwwXaXBzLXRlc3Qucm9zbWluemRyYXYucnUwHhcNMTgxMTE5MDU0ODQ4WhcNMjMxMTE5MDU0ODQ4WjBvMQswCQYDVQQGEwJSVTEPMA0GA1UECAwGTW9zY293MQ8wDQYDVQQHDAZNb3Njb3cxDjAMBgNVBAoMBUVHSVNaMQwwCgYDVQQLDANJUFMxIDAeBgNVBAMMF2lwcy10ZXN0LnJvc21pbnpkcmF2LnJ1MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDHAJ9IOLepLsJf7BNubEJVl+h69wMS/Y6FNCqY4bkNllG6nBFG77795s7L4BeTc6kIiDMKwu3LYlOJDV3umo7hi/LniNm3nkMxrma2/YndZ4meaRpuLQtBsszj2yngwZcUafNjshtZike4Q+7p2YMz/T8zwInsIl9zScCFfYDrEwIDAQABMA0GCSqGSIb3DQEBCwUAA4GBAA2v1aU8UfyD7KPtDlOsGufDFdXrQgxbpU+jVE06hcsyPGSFNHHrE/mEtvWvSdjUZA9hEzi6eKgP9ZarLcyAv4UOdqvi6cZTSSFPZu6F31Hwca3+oOuVzSgRkXv0OjZ0fbBgiRaFZSvLnP4I+Q6uUfd8RR3g3xakjjK3BLDdmHV+</wsse:BinarySecurityToken>
          <ds:Signature Id="SIG-55167508-cda1-4ee0-856a-2184a8287ed0">
            <ds:SignedInfo>
              <ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
              <ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"/>
              <ds:Reference URI="#body">
                <ds:Transforms>
                  <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
                </ds:Transforms>
                <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
                <ds:DigestValue>qBTQPtK0qgMGZHTHa7d7KgYNUvM=</ds:DigestValue>
              </ds:Reference>
              <ds:Reference URI="#TS-2c1ce6a1-71d2-4016-9325-5534b6c0d1ec">
                <ds:Transforms>
                  <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
                </ds:Transforms>
                <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
                <ds:DigestValue>evAb2gtW42aR5DWnBRmGB9fDPCY=</ds:DigestValue>
              </ds:Reference>
              <ds:Reference URI="#id-b90e676f-d915-40d7-ae48-5d92832dc057">
                <ds:Transforms>
                  <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
                </ds:Transforms>
                <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
                <ds:DigestValue>tPtkirIBm+WAtSY6rKo+rOwTSv8=</ds:DigestValue>
              </ds:Reference>
              <ds:Reference URI="#id-67d91c4a-f7a8-4b82-b97e-8ab8362a4010">
                <ds:Transforms>
                  <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
                </ds:Transforms>
                <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
                <ds:DigestValue>yeHbgg67nvHrk6z36wAq/l5x1zU=</ds:DigestValue>
              </ds:Reference>
              <ds:Reference URI="#id-29f822eb-a7ac-49fb-840f-e617bbe56c10">
                <ds:Transforms>
                  <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
                </ds:Transforms>
                <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
                <ds:DigestValue>HbhNcALYbFbckf3yHpNKGWXaToI=</ds:DigestValue>
              </ds:Reference>
            </ds:SignedInfo>
            <ds:SignatureValue>mRoz4c839HcRbEyDye5q5tspBwQA72bLWB80esFJD/27fONH8GhzFLAfTdTDFX7wtEa75d6AECOyIrdXkI91U+ngx/tlB41YyzACEVlPS8jPr9sj3FOsMsSkQ/tUL/MITYXs1eDeyEYny0tKjD3AUqHtuSFgikgGQZ/I0WPqhRU=</ds:SignatureValue>
            <ds:KeyInfo Id="KI-064b8dff-f4c8-4b30-b44c-f5b510fc2851">
              <wsse:SecurityTokenReference wsu:Id="STR-05d81b9a-d3dd-480e-b3d4-ea5ece6aa097">
                <wsse:Reference URI="#X509-18037c17-a3fd-4538-8639-e6d932283c67" ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3"/>
              </wsse:SecurityTokenReference>
            </ds:KeyInfo>
          </ds:Signature>
          <wsu:Timestamp wsu:Id="TS-2c1ce6a1-71d2-4016-9325-5534b6c0d1ec">
            <wsu:Created>2021-06-16T08:35:31.907Z</wsu:Created>
            <wsu:Expires>2021-06-16T08:45:31.907Z</wsu:Expires>
          </wsu:Timestamp>
        </wsse:Security>
        <egisz:transportHeader xmlns:egisz="http://egisz.rosminzdrav.ru">
          <egisz:authInfo>
            <egisz:clientEntityId>421d318d-2557-bdba-cf2c-21c20d3102be</egisz:clientEntityId>
          </egisz:authInfo>
        </egisz:transportHeader>
        <wsa:MessageID wsu:Id="id-b90e676f-d915-40d7-ae48-5d92832dc057">0dbe46c0-7f1a-4baa-933d-1b7109d3e453</wsa:MessageID>
        <wsa:Action wsu:Id="id-67d91c4a-f7a8-4b82-b97e-8ab8362a4010">getIdentityResponse</wsa:Action>
        <wsa:To wsu:Id="id-29f822eb-a7ac-49fb-840f-e617bbe56c10">https://ips-test.rosminzdrav.ru/9e8315b1d98db</wsa:To>
      </SOAP-ENV:Header>
      <SOAP-ENV:Body wsu:Id="body">
        <ns1:getIdentityResponse xmlns:ns1="http://egisz.rosminzdrav.ru">
          <ns1:IdentityResultResponse>
            <ns1:Result>NoResponse</ns1:Result>
            <ns1:status>success</ns1:status>
          </ns1:IdentityResultResponse>
        </ns1:getIdentityResponse>
      </SOAP-ENV:Body>
    </SOAP-ENV:Envelope>`
  };

module.exports = getIdentityResponseNoResponse;