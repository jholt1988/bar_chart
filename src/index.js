const http = require('http');
const fs = require('fs').promises;

const port = 8080;
const host= 'localhost';


const requestListener = function (req, res) {
    fs.readFile(__dirname + "/index.html")
    .then(contents => {
      res.setHeader("Content-Type", "text/html");
      res.setHeader("Access-Control-Allow-Origin", "*")
      res.setHeader("Referrer-Policy","no-referrer")
      res.writeHead(200);
      res.end(contents);
  
        })
        .catch(err => {
            res.writeHead(500);
            res.write(JSON.stringify(err))
            res.end();
            return;
        });
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
