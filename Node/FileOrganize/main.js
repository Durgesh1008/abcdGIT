// entry point of my command line 
let help = require("./Commands/help")
let inputArr = process.argv.slice(2);
let command = inputArr[0];
let path = inputArr[1];
switch (command) {
    case "tree":
        //call tree function
        console.log("Tree functions called and executed sucessfully on path" + path);
        break;
    case "organize":
        //call organize function
        console.log("Tree functions called and executed sucessfully on path" + path);
        break;
    case "help":
        //call help function
        console.log("Tree functions called and executed sucessfully on path" + path);
        break;
    default:
        console.log("command not recognized :/")
        break;
} 