const fs = require('fs')

const notFound = res => {
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ message: 'route not found' }))
}

const isUrlWithId = url => url.match(/\/api\/products\/([0-9]+)/)

const getIdFromUrl = url => url.split('/')[3]

const writeDataToFile = (filename, content) => {
    fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => err && console.log(err))
}

module.exports = {
    notFound,
    isUrlWithId,
    getIdFromUrl,
    writeDataToFile,
}