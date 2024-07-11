const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('<html><head><title>form</title></head>');
        res.write('<body><form method="post" action="/process"><input name="message"/></form><body>');
        res.end()
    }else if(req.url === '/process'&&  req.method==='POST'){
        const body = []
        
        req.on('data', (chunk) => {
            body.push(chunk)
        })

        req.on('end', () => {
            console.log('finished');
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody);
            res.write('thank you');
            res.end()
        })

    }else{
        res.write('page not found');
        res.end()
    }
})

 
server.listen(3000) 

console.log('listening on port 3000');