const exec = require("child_process").exec;

const start = res => {
    console.log('Request handler \'start\' was called');

    exec('find /', { timeout: 10000, maxBuffer: 20000*1024 }, (error, stdout, stderr) => {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write(stdout);
        res.end();
    });
};

const upload = res => {
    console.log('Request handler \'upload\' was called');
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hello Upload");
    res.end();
};

exports.start = start;
exports.upload = upload;
