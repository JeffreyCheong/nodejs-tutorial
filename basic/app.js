// const message = (name) => {
//     console.log(`${name} is a man`)
// }

// message('Jeffrey')

// console.log(global)
// global.setTimeout(() => {
//     console.log('Global Set Time Out')
// }, 2000);

// setTimeout(() => {
//     console.log('Local Set Time Out')
// }, 3000);

// console.log(__dirname)
// console.log(__filename)

const {users, num} = require('./users')
// console.log(users[0])
// console.log(num[1])
const fs = require('fs')

// // Write the File
// fs.writeFile('./note.txt', 'A New Text 3', (err, data)=> {
//     if(err){
//         console.log(err)
//     } else {
//         console.log('A new text is added')
//     }
// })

// // Read the File
// fs.readFile('./note.txt', (err, data) => {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log(data.toString())
//     }
// })

// // Append the File
// fs.appendFile('./note.txt', 'A New Text 4\r\n', (err, data)=> {
//     if(err){
//         console.log(err)
//     } else {
//         console.log('A new text is append')
//     }
// })

// // Create a folder
// if(!fs.existsSync('NewFolder')) {
//     fs.mkdir('NewFolder', (err, data)=> {
//         if(err){
//             console.log(err)
//         } else {
//             console.log('A folder is created')
//         }
//     })
// } else {
//     console.log('The folder already exist')
// }

// // Remove a folder
// if(fs.existsSync('NewFolder')) {
//     fs.rmdir('NewFolder', (err, data)=> {
//         if(err){
//             console.log(err)
//         } else {
//             console.log('A folder is removed')
//         }
//     })
// } else {
//     console.log('The folder does not exist')
// }

// // Remove a file
// if(fs.existsSync('./note.txt')) {
//     fs.unlink('./note.txt', (err, data)=> {
//         if(err){
//             console.log(err)
//         } else {
//             console.log('A file is removed')
//         }
//     })
// } else {
//     console.log('The file does not exist')
// }


const readStream = fs.createReadStream('./bibletest.txt', {encoding: 'utf-8'})
const writeStream = fs.createWriteStream('./writeStream.txt')
// readStream.on('data', chunk=> {
//     console.log('########## New Chunk ##########')
//     console.log(chunk)

//     writeStream.write('\n ######### New Write Chucnk #########\n')
//     writeStream.write(chunk)
// })

// Faster way to write stream
readStream.pipe(writeStream)