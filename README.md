# read-png
Universal PNG File Reader.  Uses read-pixels in the Browser and pngjs in NodeJS

# install
```bash
npm install read-png
```

# usage in the browser / frontend
```js
import readPNG from 'read-png';

const result = readPNG({ data: arrayBuffer });
// result is { height: 200, width: 100, pixels: [[[]]] }
```

# usage in NodeJS / backend
```js
const readPNG = require("read-png");

const result = readPNG({ data: buffer });
```