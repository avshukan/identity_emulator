function getIdentityResponseIdentified({
  RequestMessageID,
  Region,
  RegionName,
  InsuranceOrganizationCode,
  InsuranceOrganization,
  UnitedPolicyNumber,
  PolicyType,
  StartDate,
  InsuranceRepresentativePhoneNum,
  TfomsContactCenterHotlinePhoneNum,
}) {
  // console.log('object', {
  //   RequestMessageID,
  //   Region,
  //   RegionName,
  //   InsuranceOrganizationCode,
  //   InsuranceOrganization,
  //   UnitedPolicyNumber,
  //   PolicyType,
  //   StartDate,
  //   InsuranceRepresentativePhoneNum,
  //   TfomsContactCenterHotlinePhoneNum,
  // });
  return `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:wsa="http://www.w3.org/2005/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
      <SOAP-ENV:Header>
        <wsse:Security>
          <wsse:BinarySecurityToken EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary" ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3" wsu:Id="X509-d7413d70-d573-4592-9f61-a54cb28c8ed9">MIICYDCCAckCFEiCwZkkqouSFvNGwtPZiNCc1LhvMA0GCSqGSIb3DQEBCwUAMG8xCzAJBgNVBAYTAlJVMQ8wDQYDVQQIDAZNb3Njb3cxDzANBgNVBAcMBk1vc2NvdzEOMAwGA1UECgwFRUdJU1oxDDAKBgNVBAsMA0lQUzEgMB4GA1UEAwwXaXBzLXRlc3Qucm9zbWluemRyYXYucnUwHhcNMTgxMTE5MDU0ODQ4WhcNMjMxMTE5MDU0ODQ4WjBvMQswCQYDVQQGEwJSVTEPMA0GA1UECAwGTW9zY293MQ8wDQYDVQQHDAZNb3Njb3cxDjAMBgNVBAoMBUVHSVNaMQwwCgYDVQQLDANJUFMxIDAeBgNVBAMMF2lwcy10ZXN0LnJvc21pbnpkcmF2LnJ1MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDHAJ9IOLepLsJf7BNubEJVl+h69wMS/Y6FNCqY4bkNllG6nBFG77795s7L4BeTc6kIiDMKwu3LYlOJDV3umo7hi/LniNm3nkMxrma2/YndZ4meaRpuLQtBsszj2yngwZcUafNjshtZike4Q+7p2YMz/T8zwInsIl9zScCFfYDrEwIDAQABMA0GCSqGSIb3DQEBCwUAA4GBAA2v1aU8UfyD7KPtDlOsGufDFdXrQgxbpU+jVE06hcsyPGSFNHHrE/mEtvWvSdjUZA9hEzi6eKgP9ZarLcyAv4UOdqvi6cZTSSFPZu6F31Hwca3+oOuVzSgRkXv0OjZ0fbBgiRaFZSvLnP4I+Q6uUfd8RR3g3xakjjK3BLDdmHV+</wsse:BinarySecurityToken>
          <ds:Signature Id="SIG-05100e1c-5441-46d3-ad88-7d96e6dd18f5">
            <ds:SignedInfo>
              <ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
              <ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"/>
              <ds:Reference URI="#body">
                <ds:Transforms>
                  <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
                </ds:Transforms>
                <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
                <ds:DigestValue>QE63wCfRnfXjLKnNxzfYuTLCGNw=</ds:DigestValue>
              </ds:Reference>
              <ds:Reference URI="#TS-061c42ec-57f9-4980-adc8-4efdced1d072">
                <ds:Transforms>
                  <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
                </ds:Transforms>
                <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
                <ds:DigestValue>pmTp4LTT7LBAhPNsm4hI79YwXbo=</ds:DigestValue>
              </ds:Reference>
              <ds:Reference URI="#id-ad5cba5b-dbd2-4404-9b38-3389065a763b">
                <ds:Transforms>
                  <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
                </ds:Transforms>
                <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
                <ds:DigestValue>bslpLdDBUFyYC56jI/WmnRZrAeM=</ds:DigestValue>
              </ds:Reference>
              <ds:Reference URI="#id-4a97be8e-0408-41e6-a4b9-d47b185fcc97">
                <ds:Transforms>
                  <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
                </ds:Transforms>
                <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
                <ds:DigestValue>/BVCbu+SdDdsy3RU4Ry3uVfa6Ro=</ds:DigestValue>
              </ds:Reference>
              <ds:Reference URI="#id-ad1db1b9-2f33-4d28-87c8-e10580c1c744">
                <ds:Transforms>
                  <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
                </ds:Transforms>
                <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
                <ds:DigestValue>/7lOLMK9iXCAjK+FC3xDhhW93ww=</ds:DigestValue>
              </ds:Reference>
            </ds:SignedInfo>
            <ds:SignatureValue>xVHzoBZ52I7gNnwCqUyNSD4MYwkRugdJsSo6UCgBvQc6LBNH+6Uo8Vzm24dO6HWvXe6k/VivxI5D3J9v6qzS9HmxDaVzVCity16Qas157sJMtNXtOssGg9AK8OwwyFhHMfCfeE5kyxrBI3KAQEgySNLF/0z0o9Jwvx3tetpnem0=</ds:SignatureValue>
            <ds:KeyInfo Id="KI-1dbc7432-f1c8-46c8-94d1-46e1c1ad0d65">
              <wsse:SecurityTokenReference wsu:Id="STR-cedfd8a1-352d-4304-8c0b-44fe22585a23">
                <wsse:Reference URI="#X509-d7413d70-d573-4592-9f61-a54cb28c8ed9" ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3"/>
              </wsse:SecurityTokenReference>
            </ds:KeyInfo>
          </ds:Signature>
          <wsu:Timestamp wsu:Id="TS-061c42ec-57f9-4980-adc8-4efdced1d072">
            <wsu:Created>2021-06-16T15:34:03.767Z</wsu:Created>
            <wsu:Expires>2021-06-16T15:44:03.767Z</wsu:Expires>
          </wsu:Timestamp>
        </wsse:Security>
        <egisz:transportHeader xmlns:egisz="http://egisz.rosminzdrav.ru">
          <egisz:authInfo>
            <egisz:clientEntityId>421d318d-2557-bdba-cf2c-21c20d3102be</egisz:clientEntityId>
          </egisz:authInfo>
        </egisz:transportHeader>
        <wsa:MessageID wsu:Id="id-ad5cba5b-dbd2-4404-9b38-3389065a763b">07b3e39b-a544-465c-bef9-cc4e5a0eed8d</wsa:MessageID>
        <wsa:Action wsu:Id="id-4a97be8e-0408-41e6-a4b9-d47b185fcc97">getIdentityResponse</wsa:Action>
        <wsa:To wsu:Id="id-ad1db1b9-2f33-4d28-87c8-e10580c1c744">https://ips-test.rosminzdrav.ru/9e8315b1d98db</wsa:To>
      </SOAP-ENV:Header>
      <SOAP-ENV:Body wsu:Id="body">
        <ns2:getIdentityResponse xmlns:ns2="http://egisz.rosminzdrav.ru">
          <ns2:IdentityResultResponse>
            <ns2:Result>Identified</ns2:Result>
            <ns2:RequestMessageID>${RequestMessageID}</ns2:RequestMessageID>
            <ns2:Insurance>
              <ns2:Region>${Region}</ns2:Region>
              <ns2:RegionName>${RegionName}</ns2:RegionName>
              <ns2:InsuranceOrganizationCode>${InsuranceOrganizationCode}</ns2:InsuranceOrganizationCode>
              <ns2:InsuranceOrganization>${InsuranceOrganization}</ns2:InsuranceOrganization>
              <ns2:UnitedPolicyNumber>${UnitedPolicyNumber}</ns2:UnitedPolicyNumber>
              <ns2:PolicyType>${PolicyType}</ns2:PolicyType>
              <ns2:StartDate>${StartDate}</ns2:StartDate>
              <ns2:InsuranceRepresentativePhoneNum>${InsuranceRepresentativePhoneNum}</ns2:InsuranceRepresentativePhoneNum>
              <ns2:TfomsContactCenterHotlinePhoneNum>${TfomsContactCenterHotlinePhoneNum}</ns2:TfomsContactCenterHotlinePhoneNum>
            </ns2:Insurance>
            <ns2:status>success</ns2:status>
          </ns2:IdentityResultResponse>
        </ns2:getIdentityResponse>
      </SOAP-ENV:Body>
    </SOAP-ENV:Envelope>`;
}

module.exports = getIdentityResponseIdentified;
