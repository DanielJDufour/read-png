// insert readPixels here

async function readPNG ({ data, debug=false }) {
  if (debug) console.log("[read-png] starting with", { data, debug });
  const result = await readPixels({ data, debug });
  if (debug) console.log("[read-png] finishing with", { data, debug });
  return result;
};

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = readPNG;
}
if (typeof window !== 'undefined') window.readPNG = readPNG;
if (typeof self !== 'undefined') self.readPNG = readPNG;
