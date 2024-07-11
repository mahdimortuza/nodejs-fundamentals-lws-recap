const fs = require('fs')

const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`)
const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`)


// writing manually
// ourReadStream.on('data', (chunk) => {
//     ourWriteStream.write(chunk)
// })


// writing using pipe
ourReadStream.pipe(ourWriteStream)


