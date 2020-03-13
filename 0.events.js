let count = 0;

process.on("unhandledRejection", () => {
  console.log("WARNING: Some Promise wanted to interrupt our counting.");
});
process.on("uncaughtException", () => {
  console.log("WARNING: Some Error wanted to interrupt our counting.");
});

setInterval(() => {
  console.log(count);
  count += 1;
}, 1000);

setTimeout(() => {
  throw "Stopped by Error";
}, 10000);

setTimeout(() => {
  Promise.reject("Stopped by Promise");
}, 15000);
