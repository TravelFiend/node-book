const http = require('http');
const url = require('url');

const start = route => {
    const onRequest = (req, res) => {
        const pathname = url.parse(req.url).pathname;
        console.log(`Request for ${pathname} recieved.`);

        route(pathname);

        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write("GobblyGook");
        res.end();
    };
    
    http.createServer(onRequest).listen(6789);
    console.log('Server has started');
}

exports.start = start;