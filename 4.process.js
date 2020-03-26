// node 4.process.js 1 0
const [by, what, firstArg, secondArg] = process.argv;

console.log("Started by ", by);
console.log("The file ", what);

const a = Number(firstArg);
const b = Number(secondArg);

if (Number(b) === 0) {
  process.exit();
}

const result = a / b;

console.log(result);