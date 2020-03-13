const http = require("http");
const fs = require("fs");
const port = 3000;

const requestHandler = (request, response) => {
  fs.readFile("template.html", function(err, data) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(data);
    response.end();
  });
};

const server = http.createServer(requestHandler);

server.listen(port, err => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on ${port}`);
});
