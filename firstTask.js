var http = require('http');
var { parse } = require('querystring');
var fs = require('fs');
var server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log(
                parse(body)
            );
            res.end(body);
    });
}
    else{
        res.end(`
        <!doctype html>
        <html>
        <head>
        <style>
        body {
            text-align: center;
        }
        form {
            display: inline-block;
        }
        </style>
        </head>
        <body>
            <form action="/message" method="post">
            <textarea id="message" name="message" rows="4" cols="50"> An input box is here where user submits their message </textarea><br />
                <button>Submit</button>
            </form>
        </body>
        </html>
    `);
    }
       
    
});
server.listen(8080, function(){
    console.log("server started")
});