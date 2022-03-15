// 1.) node wcat.js filepath => Display the content of a files in terminal
// 2.) node wcat.js filepath1 , filepath2 , filepath3 => display tje content of a file in concatinated
//frome in a given order;

//node wcat.js f1.txt; => read f1.txt content
//node wcat.js f1.txt , f2.txt , f3.txt => read all files content

//in js input always take in node js 
//let input/ = process.argv; //gives you path , roots frome  starting ,,, if you want not take root path
// [use => process.argv.slice();]
// console.log(input);

const fs = require("fs");
let input = process.argv.slice(2);

let filesArr = [];
//place file path in filesArr
for(let i =0; i<input.length; i++){
    filesArr.push(input[i]);
}

// console.log("file to be read are"+filesArr);

//chake if files is present

for(let i = 0; i<filesArr.length; i++){
    let doesFileEx = fs.existsSync(filesArr[i]);
    if(!doesFileEx){
        console.log("File Does Note Exists");
        
    }
    
}

//content read and appendin satarting

let content = "";
for(let i =0; i<filesArr.length; i++){
    let filecontent = fs.readFileSync(filesArr[i]);
    content += filecontent + "\n";
}

console.log(content);


