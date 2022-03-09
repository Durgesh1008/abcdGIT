
//Operating System Module;;;;;


//  Returns the operating system CPU architecture for which the Node.
// js binary was compiled. Possible values are 
const os = require("os");
let mySystemArch = os.arch(); //show the arkitucture of your System use --> [os.arch()]
console.log(mySystemArch);

//information  of cpu use --> [os.cups();]
// Returns an array of objects containing information about each logical CPU core.
let myCpuInfo = os.cpus();
console.log(myCpuInfo);

// host name of your operating System --> use [os.hostname();]
// Returns the host name of the operating system as a string.
let  hostName = os.hostname();
console.log(hostName);

// Network info of your System use --> [os.networkInterFaces();]
// Returns an object containing network interfaces that have been assigned a network address.
let NetworkInfo = os.networkInterfaces();
console.log(NetworkInfo);

//returns the Operating System as a String
let release = os.release();
console.log(release);

//return totel amount of youe System Memory in bytes as an integer.
//  use --> [os.totelmem();]

let Totelme = os.totalmem();
console.log(Totelme);

//Return of System uptime in Number of Second use --> use [os.userInfo();]
let Uptimehours = os.uptime() / 3600;
console.log (Uptimehours);


// info of user
//return information of currently effective use os.userInfo();
let userinf = os.userInfo();
console.log(userinf);


// Return os name use --> [os.type();]
// Returns the operating system name as returned by uname(3).
// For example, it returns 'Linux' on Linux, 'Darwin' on macOS, and 'Windows_NT' on Windows.
let type = os.type();
console.log(type);





