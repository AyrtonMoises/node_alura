const http = require('http');

const servidor = http.createServer(function (req, resp) {

    let html = '';

    if (req.url == '/'){
        html = `
        <html>
        <head>
        </head>
        <body>
        <h1>Casa do codigo</h1>
        </body>
        </html>`;    
    } else if (req.url == '/livros') {
        html = `
        <html>
        <head>
        </head>
        <body>
        <h1>Livros</h1>
        </body>
        </html>`; 
    }

    resp.end(html);

});
servidor.listen(3000);

