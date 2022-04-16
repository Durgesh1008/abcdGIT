const fs = require("fs");


console.log("before");
// let data = fs.readFileSync("f1.txt");

//work done in using cb 

// fs.readFile("f1.txt",cb);
// function cb(err,data){
//     if(err){
//         console.log(err);
//     }
//     else console.log(data+"");
// }
// console.log(data+"");

//Same Work do in using Promises

let PromiseTheFileWillBeRead = fs.promises.readFile("f1.txt");
console.log(PromiseTheFileWillBeRead);
PromiseTheFileWillBeRead.then(printData);
PromiseTheFileWillBeRead.catch(printErr)

console.log("after");

function printData(data){
    console.log("Promiss is full fill");
    console.log(data+"");
}

function printErr(err){
    console.log(err);
}