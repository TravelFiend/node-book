const querystring = require('querystring');
const fs = require('fs');
const formidable = require('formidable');

const start = res => {
    console.log(`Request handler 'start' was called`);

    const body = /*html*/`<html>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    </head>
    <body>
    <form action="/upload" enctype="multipart/form-data" method="post">
    <input type="file" name="upload" multiple="multiple">
    <input type="submit" value="Upload file" />
    </form>
    </body>
    </html>`;

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(body);
    res.end();
};

const upload = (res, req) => {
    console.log(`Request handler 'upload' was called`);

    const form = new formidable.IncomingForm();
    console.log('about to parse');
    form.parse(req, (error, fields, files) => {
        console.log('parsing done');

        fs.rename(files.upload.path, "./tmp/test.jpg", err => {
            if(err){
                fs.unlink('./tmp/test.jpg')
                fs.rename(files.upload.path, './tmp/test.jpg');
            }
        });
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(`received image: <br/>`);
        res.write(`<img src="/show" />`);
        res.end();
    });
};

const show = res => {
    console.log(`Request handler 'show' was called.`);
    res.writeHead(200, {"Content-Type": "image/jpg"});
    fs.createReadStream("./tmp/test.jpg").pipe(res);
}

exports.start = start;
exports.upload = upload;
exports.show = show;







// const upload = (response, request) => {
//   console.log('Request handler "upload" was called.');

//   const form = new formidable.IncomingForm();
//   console.log('About to parse');
//   form.parse(request, (error, fields, files) => {
//     console.log('parsing done');

//     fs.rename(files.upload.path, 'C:\\Users\\Dan\\Documents\\alchemy\\career-track\\labs\\node-code-along\\assets\\test.JPG', error => {
//       if(error){
//         fs.unlink('./assets/test.JPG', error => {
//           console.log(error);
//         });
//         fs.rename(files.upload.path, 'C:\\Users\\Dan\\Documents\\alchemy\\career-track\\labs\\node-code-along\\assets\\test.JPG');
//       }
//     });
//   response.writeHead(200, {"Content-Type": "text/html"});
//   response.write("Received image:<br/>");
//   response.write("<img src='/show' />");
//   response.end();
// });
// }

// const show = response => {
//   console.log('Requeset handler "show" was called.');
//   response.writeHead(200, {"Content-Type": "image/JPG"});
//   fs.createReadStream("./assets/test.JPG").pipe(response);
// };

// module.exports = { start, upload, show };