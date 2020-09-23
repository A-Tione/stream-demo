const fs = require('fs')
const http = require('http')
const server = http.createServer()

server.on('request', (request, response) => {
  fs.readFile('./big_file.txt', (err, data) => {
    if (err) throw err
    response.end(data)
    console.log('done');
  })
})

server.listen(9999)
console.log('9999');
