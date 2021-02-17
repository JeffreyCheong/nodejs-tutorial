const http = require('http')
const fs = require('fs')
const moment = require('moment')
hostname = 'localhost'
port = 3000 

const server = http.createServer((req, res, next) => {
    let route = './views/'

    if(req.url === '/favicon.ico') {
        res.writeHead(204, {'Content-Type': 'image/x-icon'} );
        res.end();
        return;
    }
    console.log(req.url)
    switch(req.url){
        case '/':
            route += 'index.html'
            res.statusCode = 200
            break;
        case '/contact':
            route += 'contact.html'
            res.statusCode = 200
            break;
        case '/contact-us':
            res.statusCode = 301
            res.setHeader('Location', '/contact')
            res.end()
            break;
        default:
            route += '404.html'
            res.statusCode = 404
            break;
    }
    res.setHeader('Content-Type', 'text/html')
    fs.readFile(route, (err, data) => {
        if(err){
            console.log('Fuck this is an error')
            res.end()
        } else {
            res.end(data)
        }
    })
})

server.listen(port, hostname, ()=>{
    console.log(`listening on port: ${port}`)
})