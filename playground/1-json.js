const fs = require('fs')
// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday'
// }

// // convert javascript object into json. usefull for restAPI
// const bookJSON = JSON.stringify(book)
// console.log(book, bookJSON)

// // convert json into javascript object. usefull for targeting what is inside that object.
// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json') // get buffer data from the filesync
// const dataJSON = dataBuffer.toString() // convert tha buffer data into json
// const data = JSON.parse(dataJSON) // convert the json into javascript object, so we can access the property.
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json') // get buffer data from json file
const dataJson = dataBuffer.toString() // convert buffer data into string, or we can say the actual json.
const data = JSON.parse(dataJson)

data.name = 'Jensen'
data.age = 23

const userJSON = JSON.stringify(data)

fs.writeFileSync('1-json.json', userJSON)
