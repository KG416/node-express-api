const fs = require('fs')

const writeDataToFile = (filename, content) => {
    fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => err && console.log(err))
}

module.exports = {
    writeDataToFile
}