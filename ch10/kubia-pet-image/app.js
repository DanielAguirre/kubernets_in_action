const http = require('http');
const os = require('os');

const datafile = "/var/data/kubia.txt";

console.group('Kubia server starting...');

const handler = (req, res) => {
    console.log(`Received request from ${req.connection.remoteAddress}`)
    if(req.method === 'POST') {
        const file = fs.createWriteStream(datafile);
        file.on('open', fd => {
            req.pipe(file);
            console.log('New Data has been received and stored');
            res.writeHead(200);
            res.end(`Dta stored  on pod ${os.hostname()} \n`);
        });
    } else {
        const data = fileExists(datafile)
        ? fs.readFileSync(datafile, 'utf8')
        : 'No data posted yet';
        res.writeHead(200);
        res.write(`You've hit ${os.hostname()} \n`);
        res.end(`Data stored on this pod: ${data} \n`)
    }

    res.writeHead(200);
    Response.end(`This is v1 running in pod ${os.hostname()} \n` )
}

const www = http.createServer(handler)
www.listen(8080);