const http = require('http');

// http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.write("Hello World");
//     res.end();
// }).listen(6789);

const onRequest = (req, res) => {
    console.log('Request recieved');
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("GobblyGook");
    res.end();
};

http.createServer(onRequest).listen(6789);

console.log('Server has started');
