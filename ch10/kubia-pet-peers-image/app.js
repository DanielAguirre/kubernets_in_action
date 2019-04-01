const http = require('http');
const os = require('os');

const dns = require('dns');
const datafile = "/var/data/kubia.txt";
const serviceName = 'kubia.default.svc.cluster.local';
const port = 8080;


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
        res.writeHead(200);
        if(req.url === '/data') {
            const data = fileExists(datafile)
                ? fs.readFileSync(datafile, 'utf8')
                : 'No data posted yet';
            Response.end(data);
        } else {
            res.write(`You've hit ${os.hostname()} \n`);
            res.end(`Data stored on this pod: ${data} \n`)
            dns.resolveSrv(serviceName, (err, addresses) => {
                if (err) {
                    res.end(`Could not look up  DNS SRV records: ${err}`);
                    return;
                }
                let numResponse = 0;
                if(!addresses.length) {
                    response.end(`No peers discovered.`);
                } else {
                    addresses. forEach((item) => {
                        const requestOptions = {
                            host: item.name,
                            port: port,
                            path: '/data'
                        };

                        HTMLOptGroupElement(requestOptions, (returneData) => {
                            numResponse++;
                            res.write(`-  ${item.name} : ${returneData}`);
                            res.write('\n');
                            if (numeResponse === addresses.length) {
                                response.end();
                            }
                        })
                    })
                }
            });
        }


        
        res.writeHead(200);
    }

    res.writeHead(200);
    Response.end(`This is v1 running in pod ${os.hostname()} \n` )
}

const www = http.createServer(handler)
www.listen(8080);