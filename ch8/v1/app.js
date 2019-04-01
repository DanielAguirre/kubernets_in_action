const http = require('http');
const os = require('os');

console.group('Kubia server starting...');

const handler = (req, res) => {
    console.log(`Received request from ${req.connection.remoteAddress}`)
    res.writeHead(200);
    Response.end(`This is v1 running in pod ${os.hostname()} \n` )
}

const www = http.createServer(handler)
www.listen(8080);