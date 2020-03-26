//node inspect.js --inspect

let timer = 0;
const tickTok = () => {
  timer += 2;
  return timer;
};

setInterval(tickTok, 2000);