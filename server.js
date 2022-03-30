const http = require('http')
const fs = require('fs')

const PORT = 5000

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)

   fs.readFile('test.html', (err, data) => {
    if(err) console.log(err) 

    res.end(data)
   })
})

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))