// node 2.events-and-http.js
const http = require("http");

const portA = 3000;
const portB = 3001;
let counter = 0; 

const handlerA = (request, response) => {
  counter += 1;
  response.end("This page was visited " + counter + " times!");
};

const handlerB = (request, response) => {
  response.end("You are not suppose to be here.");
  throw "Not Implemented";
};


const serverA = http.createServer(handlerA);
const serverB = http.createServer(handlerB);

serverA.listen(portA, () => console.log(`Server is listening on ${portA}`));
serverB.listen(portB, () => console.log(`Server is listening on ${portB}`));

process.on("unhandledRejection", () => {
  console.log("WARNING: Some Promise wanted to interrupt our counting.");
});
process.on("uncaughtException", () => {
  console.log("WARNING: Some Error wanted to interrupt our counting.");
});