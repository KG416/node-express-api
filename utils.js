const fs = require('fs')

const notFound = res => {
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ message: 'route not found' }))
}

const writeDataToFile = (filename, content) => {
    fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => err && console.log(err))
}

module.exports = {
    notFound,
    writeDataToFile
}