const { readFileSync } = require("fs");
const test = require("ava");
const toab = require("toab");
const readPNG = require("./src/read-png.node.js");

test("reading buffer", async t => {
  const buffer = readFileSync("./test/flower.png");
  const result = await readPNG({
    data: buffer,
    debug: false
  });
  t.is(result.height, 10);
  t.is(result.width, 10);
  t.is(result.pixels.length, 400);
});

test("reading array buffer", async t => {
  const buffer = readFileSync("./test/flower.png");
  const arrayBuffer = await toab(buffer);
  const result = await readPNG({
    data: arrayBuffer,
    debug: false
  });
  t.is(result.height, 10);
  t.is(result.width, 10);
  t.is(result.pixels.length, 400);
});

test("reading data url", async t => {
  const base64 = readFileSync("./test/flower.png", 'base64');
  const dataurl = "data:image/png;base64," + base64;
  const result = await readPNG({
    data: dataurl,
    debug: false
  });
  t.is(result.height, 10);
  t.is(result.width, 10);
  t.is(result.pixels.length, 400);
});

test("reading promised buffer", async t => {
  const buffer = readFileSync("./test/flower.png");
  const result = await readPNG({
    data: Promise.resolve(buffer),
    debug: false
  });
  t.is(result.height, 10);
  t.is(result.width, 10);
  t.is(result.pixels.length, 400);
});