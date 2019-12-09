const querystring = require('querystring');

const start = (res, postData) => {
    console.log('Request handler \'start\' was called');

    const body = `<html>
    <head>
    <meta heetp-equiv="Content-Type" content="text/html; 
    charset=UTF-8 />
    </head>
    <body>
    <form action="/upload" methos="post">
    <textarea name="text" rows="20" cols="60"></textarea>
    <input type="submit" vaule="submit-text" />
    </form>
    </body>
    </html>`;

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(body);
    res.end();
};

const upload = (res, postData) => {
    console.log('Request handler \'upload\' was called');
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write(`You've sent the text: ${querystring.parse(postData).text}`);
    res.end();
};

exports.start = start;
exports.upload = upload;
