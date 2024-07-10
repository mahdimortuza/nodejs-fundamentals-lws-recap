// path modules==============================================
const path = require('path')
const myPath = '/home/rah/projects/lessons/nodejs-fundamentals-lws-recap/Readme.md'

// console.log(path.parse(myPath));



// os modules==============================================
const os = require('os')
// console.log(os.cpus());

const fs = require('fs')

// to write a file
fs.writeFileSync('myFile.txt', "hello world")

// to append content inside of file
fs.appendFileSync('myFile.txt', " i am rahat")


// read data in async way
 fs.readFile('myFile.txt', (err, data) => {
    // console.log(data.toString());
}) 

// event modules===========================================

const EventEmitter = require('events')
const emitter = new EventEmitter()

// register a listener for the event 
emitter.on('bellRing', (period) => {
    console.log(`we need to run. because, ${period}`);
})

// raise an event
setTimeout(() => {
emitter.emit('bellRing', 'second period ended')
}, 2000)