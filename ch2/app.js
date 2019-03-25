const http = require('http');
const os = require('os');

console.log('Kubia starting server ...');

const handle = (req, res)  => {
    console.log(`Receive request from: ${req.connection.remoteAddress}`)
    res.writeHead(200)
    res.end(`You ' ve hit ${os.hostname()} \n `)
}

http.createServer(handle).listen(8080);