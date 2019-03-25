const http = require('http');
const os = require('os');

console.log('Kubia starting server ...');

let intents = 1;
const handle = (req, res)  => {
    console.log(`Receive request from: ${req.connection.remoteAddress}`)
    if(intents > 5) {
        res.writeHead(500)
        res.end("I'm not well. Please restart me!");
        return;
    }
    intents+=1;
    res.writeHead(200)
    res.end(`You ' ve hit ${os.hostname()} \n `)
}

http.createServer(handle).listen(8080);