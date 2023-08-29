import path from 'path';

const file = "hello-world.mjs"

console.info(path.extname(file));
console.info(path.dirname(file));
console.info(path.basename(file));