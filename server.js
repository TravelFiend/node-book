const http = require('http');
const url = require('url');

const start = (route, handle) => {
    const onRequest = (req, res) => {
        const pathname = url.parse(req.url).pathname;
        console.log(`Request for ${pathname} recieved.`);

        res.writeHead(200, {"Content-Type": "text/plain"});
        const content = route(handle, pathname);
        res.write(content);
        res.end();
    };
    
    http.createServer(onRequest).listen(6789);
    console.log('Server has started');
}

exports.start = start;