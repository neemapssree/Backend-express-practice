//const fs = require("fs");

//Write file
// fs.writeFile("message.txt", "Hello from nodeJS", (err) => {
//     if (err) throw err;
//     console.log("File Has been saved");
// });

//read File
// fs.readFile("./message.txt", "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

//append to file
// fs.appendFile("./message.txt", " new text!!", (err) => {
//     if(err) throw err;
//     console.log ("Appended new text");
// });

//Use npm package, Silly name generate 
// var generateName = require("sillyname");  //common js type
import generateName from "sillyname";
var sillyname = generateName();

console.log(`The name generated is , ${sillyname}`);