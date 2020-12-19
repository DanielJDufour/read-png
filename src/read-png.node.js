const { PNG } = require("pngjs");
const toab = require("toab");

module.exports = async function readPNG ({ data, debug }) {

  // convert data to an array buffer
  data = await toab(data);

  return new Promise((resolve, reject) => {
    new PNG({ filterType: 4 }).parse(data, function (error, parsed) {
      if (error) reject(error);
      if (debug) console.log("[read-png] parsed:", parsed);
      const { height, width } = parsed;
      const pixels = new Uint8Array(parsed.data);
      if (debug) console.log("[read-png] pixels:", pixels);
      resolve({ height, pixels, width });
    });
  });
};
