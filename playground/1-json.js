/**
 * The difference between JSON and JS object is that the key in object has no quote
 */

const fs = require('fs');

/** 
const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
};

// JSON.stringify converts JS object to JSON
const bookJSON = JSON.stringify(book);

// Save the data in JSON format into a json file
fs.writeFileSync('1-json.json', bookJSON);

// Note: the dataBuffer is a string of binary code
const dataBuffer = fs.readFileSync('1-json.json');
// The dataBuffer.toString() gets the JSON data
const dataJSON = dataBuffer.toString();
// The data is JS Object format
const data = JSON.parse(dataJSON);

console.log(data.title);

*/

const inputJSON = fs.readFileSync('1-json.json');

const userInfo = JSON.parse(inputJSON);

userInfo.name = 'Ryan';
userInfo.age = 25;

fs.writeFileSync('1-json.json', JSON.stringify(userInfo));
