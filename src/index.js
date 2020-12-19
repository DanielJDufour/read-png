const readInNodeJS = require("./read-png.node.js");
const readInBrowser = require("./read-png.browser.js");

module.exports = input => {
  if (typeof window !== 'undefined') {
    return readInBrowser(input);
  } else if (typeof Buffer !== 'undefined') {
    return readInNodeJS(input);
  }
};
