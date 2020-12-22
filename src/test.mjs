// console.log('main starting');
// const a = require('./a');
// // const b = require('./b.js');
// console.log('in main, a.done = %j, b.done = %j', a.done, b.done);

import fs, { readFileSync } from 'fs';
import { syncBuiltinESMExports } from 'module';

fs.readFileSync = () => Buffer.from('Hello, ESM');
syncBuiltinESMExports();
console.log(fs.readFileSync === readFileSync);