/**
 * The difference between JSON and JS object is that the key in object has no quote
 */

const fs = require('fs');

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
};

// JSON.stringify converts JS object to JSON
const bookJSON = JSON.stringify(book);

// Save the data in JSON format into a json file
fs.writeFileSync('1-json.json', bookJSON);
