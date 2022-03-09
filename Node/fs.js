


// fs-> file system module -> it helps us to make files/folders append data in them , delete data , read data 
const fs = require("fs");//require("path_of_the_file");
// const f1 = require("./f1.txt");
// const abc = require("../JS/temp");
// console.log(abc);


// console.log(fs);
// appendfilesync appends data into a file , if file is not present, it creates the file and then appends the data
let res = fs.appendFileSync("f1.txt", "Hello i am f2 file");
fs.appendFileSync("f1.txt", "\nYou guys are smart");
// console.log(res);

let data = fs.readFileSync("f1.txt");
console.log(data+"");

// let data = fs.readFileSync("f1.txt", "utf-8");
// console.log(data); 



// multTwo(2, 3) == 6
// multTwo(1, 0) == 0
// console.log(45);



//     //    Error logged with the Track&Report JS errors API(http://tiny/1covqr6l8/wamazindeClieUserJava): {"m":"Client-side initialization timeout","csm":"v5 ueLogError callee","logLevel":"WARN","attribution":"cropped-image-link","pageURL":"https://www.amazon.in/?tag=msndeskabkin-21&hvadid=72705283629710&hvqmt=e&hvbmt=be&hvdev=c&ref=pd_sl_7qhce485bd_e","s":["function(a,b,c,f){b={message:b,logLevel:c||\"ERROR\",attribution:p(\":\",this.attribution,f)};if(d.ueLogError)return d.ueLogError(a||b,a?b:null),!0;console&&console.error&&(console.log(b),console.error(a));return!1}","function(a,b,c){return this.logError(null,a,b,c)}","function(){P.log(\"Client-side initialization timeout\",\"WARN\",a)}"],"t":93996}
        // {m: 'Client-side initialization timeout', name: undefined, type: undefined, csm