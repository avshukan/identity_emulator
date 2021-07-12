// 51678f5a-d8b8-46b2-8bc7-04b26b471fe4
function getIdentityResponseNotIdentified(RequestMessageID){
      return `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:wsa="http://www.w3.org/2005/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
      <SOAP-ENV:Header>
        <wsse:Security>
          <wsse:BinarySecurityToken EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary" ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3" wsu:Id="X509-5455c1e5-2d82-403e-87cc-b5a42156d266">MIICYDCCAckCFEiCwZkkqouSFvNGwtPZiNCc1LhvMA0GCSqGSIb3DQEBCwUAMG8xCzAJBgNVBAYTAlJVMQ8wDQYDVQQIDAZNb3Njb3cxDzANBgNVBAcMBk1vc2NvdzEOMAwGA1UECgwFRUdJU1oxDDAKBgNVBAsMA0lQUzEgMB4GA1UEAwwXaXBzLXRlc3Qucm9zbWluemRyYXYucnUwHhcNMTgxMTE5MDU0ODQ4WhcNMjMxMTE5MDU0ODQ4WjBvMQswCQYDVQQGEwJSVTEPMA0GA1UECAwGTW9zY293MQ8wDQYDVQQHDAZNb3Njb3cxDjAMBgNVBAoMBUVHSVNaMQwwCgYDVQQLDANJUFMxIDAeBgNVBAMMF2lwcy10ZXN0LnJvc21pbnpkcmF2LnJ1MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDHAJ9IOLepLsJf7BNubEJVl+h69wMS/Y6FNCqY4bkNllG6nBFG77795s7L4BeTc6kIiDMKwu3LYlOJDV3umo7hi/LniNm3nkMxrma2/YndZ4meaRpuLQtBsszj2yngwZcUafNjshtZike4Q+7p2YMz/T8zwInsIl9zScCFfYDrEwIDAQABMA0GCSqGSIb3DQEBCwUAA4GBAA2v1aU8UfyD7KPtDlOsGufDFdXrQgxbpU+jVE06hcsyPGSFNHHrE/mEtvWvSdjUZA9hEzi6eKgP9ZarLcyAv4UOdqvi6cZTSSFPZu6F31Hwca3+oOuVzSgRkXv0OjZ0fbBgiRaFZSvLnP4I+Q6uUfd8RR3g3xakjjK3BLDdmHV+</wsse:BinarySecurityToken>
          <ds:Signature Id="SIG-c866759d-14eb-46ca-9164-61a02b562d10">
            <ds:SignedInfo>
              <ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
              <ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"/>
              <ds:Reference URI="#body">
                <ds:Transforms>
                  <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
                </ds:Transforms>
                <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
                <ds:DigestValue>lQTCKmL2lrXISQyAKWmGWDeji9w=</ds:DigestValue>
              </ds:Reference>
              <ds:Reference URI="#TS-ca6aa687-2dd6-4b7a-8298-10f31194ebf7">
                <ds:Transforms>
                  <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
                </ds:Transforms>
                <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
                <ds:DigestValue>bB7+Y4uo1d8UgsVgE5/JQNSMSC0=</ds:DigestValue>
              </ds:Reference>
              <ds:Reference URI="#id-481dac50-75f5-4415-9c08-828715d0ac01">
                <ds:Transforms>
                  <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
                </ds:Transforms>
                <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
                <ds:DigestValue>HtHHFHcWpfn0bVXqKNpZcpzxF7E=</ds:DigestValue>
              </ds:Reference>
              <ds:Reference URI="#id-04f6c8af-4193-4bdb-a9cd-a5bbdd13bdfc">
                <ds:Transforms>
                  <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
                </ds:Transforms>
                <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
                <ds:DigestValue>DByqxc7fPiLrCuXdNYt4KhiEZpM=</ds:DigestValue>
              </ds:Reference>
              <ds:Reference URI="#id-5c11b85a-d4f8-4b16-aded-5b16e83d6647">
                <ds:Transforms>
                  <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
                </ds:Transforms>
                <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
                <ds:DigestValue>We83U5yaAtldtFp2STjnTsMKF2U=</ds:DigestValue>
              </ds:Reference>
            </ds:SignedInfo>
            <ds:SignatureValue>fMD7bp1en3QKhazLicmRVgC3w2nDuw6b1EHd7H5C3VyiXn0Ob3YYLudjPQOeWlGrtGY32sA6L/WaZaUycz90tfMVq11QgpO93vVxe+tv/H5VmHGfbZ3MJy6i+6repIfeIofl5lofd+OkwRymXhnVUlPxhaZl/Gr/ZLYfpRSBuvA=</ds:SignatureValue>
            <ds:KeyInfo Id="KI-412b1541-fddf-447d-8a6a-c89e457c5a58">
              <wsse:SecurityTokenReference wsu:Id="STR-61a5a043-8f46-46de-a6d0-cd307ddcf379">
                <wsse:Reference URI="#X509-5455c1e5-2d82-403e-87cc-b5a42156d266" ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3"/>
              </wsse:SecurityTokenReference>
            </ds:KeyInfo>
          </ds:Signature>
          <wsu:Timestamp wsu:Id="TS-ca6aa687-2dd6-4b7a-8298-10f31194ebf7">
            <wsu:Created>2021-06-16T15:38:33.172Z</wsu:Created>
            <wsu:Expires>2021-06-16T15:48:33.172Z</wsu:Expires>
          </wsu:Timestamp>
        </wsse:Security>
        <egisz:transportHeader xmlns:egisz="http://egisz.rosminzdrav.ru">
          <egisz:authInfo>
            <egisz:clientEntityId>421d318d-2557-bdba-cf2c-21c20d3102be</egisz:clientEntityId>
          </egisz:authInfo>
        </egisz:transportHeader>
        <wsa:MessageID wsu:Id="id-481dac50-75f5-4415-9c08-828715d0ac01">499c1284-ac8e-41d8-8957-b9b83de9a638</wsa:MessageID>
        <wsa:Action wsu:Id="id-04f6c8af-4193-4bdb-a9cd-a5bbdd13bdfc">getIdentityResponse</wsa:Action>
        <wsa:To wsu:Id="id-5c11b85a-d4f8-4b16-aded-5b16e83d6647">https://ips-test.rosminzdrav.ru/9e8315b1d98db</wsa:To>
      </SOAP-ENV:Header>
      <SOAP-ENV:Body wsu:Id="body">
        <ns2:getIdentityResponse xmlns:ns2="http://egisz.rosminzdrav.ru">
          <ns2:IdentityResultResponse>
            <ns2:Result>NotIdentified</ns2:Result>
            <ns2:RequestMessageID>${RequestMessageID}</ns2:RequestMessageID>
            <ns2:status>success</ns2:status>
          </ns2:IdentityResultResponse>
        </ns2:getIdentityResponse>
      </SOAP-ENV:Body>
    </SOAP-ENV:Envelope>`
  };

module.exports = getIdentityResponseNotIdentified;