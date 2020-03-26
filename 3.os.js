// node 3.os.js
const os = require("os");

const platform = os.platform();
const cpus = os.cpus();
const type = os.type(); 
const uptime = os.uptime();
const user = os.userInfo();

console.log("Platform", platform);
console.log("Type", type);
console.log("Uptime", uptime);
console.log("User", user);

console.log("CPUs", cpus.map(v => v.model));