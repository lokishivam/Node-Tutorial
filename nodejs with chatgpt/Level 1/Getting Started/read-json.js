const fs = require("fs");

fs.readFile("data.json", (err, res) => {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log(res); //we are expecting a json string
});

/*
The output you're getting is a Buffer object, which is a type of object in Node.js that's used to represent binary data.
 When you read a file using the fs.readFile method, the data that's read from the file is returned as a Buffer object.
 To convert the Buffer object to a string, you can use the toString method, like this:


const fs = require("fs");
fs.readFile("data.json", (err, res) => {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log(res.toString());
});

const fs = require("fs");
fs.readFile("data.json", (err, data) => {
  if (err) throw err;
  if (!data) throw new Error("No data in file");

  const parsedData = JSON.parse(data);
  console.log(parsedData);
});

const fs = require("fs");

fs.readFile("data.json", "utf8", (err, res) => {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log(res);
});
*/
