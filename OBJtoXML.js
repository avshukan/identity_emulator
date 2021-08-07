const OBJtoXML = function (obj) {
  let xml = '';
  // for (const prop in obj) {
  Object.keys(obj).forEach((prop) => {
    xml += obj[prop] instanceof Array ? '' : `<${prop}>`;
    if (obj[prop] instanceof Array) {
      // for (const array in obj[prop]) {
      Object.keys(obj[prop]).forEach((array) => {
        xml += `<${prop}>`;
        xml += OBJtoXML({ ...obj[prop][array] });
        xml += `</${prop}>`;
      // }
      });
    } else if (typeof obj[prop] === 'object') {
      xml += OBJtoXML({ ...obj[prop] });
    } else {
      xml += obj[prop];
    }
    xml += obj[prop] instanceof Array ? '' : `</${prop}>`;
  // }
  });
  xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
  return xml;
};

module.exports = OBJtoXML;
