//2nd diffrent in let and var
//var keyword is Function scoped
// it work is globaly it mins you call anywhere
var num = 10;
for(var i = 1; i <= 10; i++){
    if(i % 2==0){
        console.log(num);
        console.log(i);
    }
}
console.log("output is " + i);

//let keyword is Block scoped
//it alway work  only in coolion{} 

let j = 100;
for(let i = 1; i <= 10; i++){
    if(i%2==0){
        let hallo = 1000;
        console.log(i);
        
    }
    
}
console.log(hello);  //error 
console.log(j);
console.log( "output"+j);
