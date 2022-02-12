
//var keyword is global keyword

// var  a;

// a = 10;
// console.log(a);

// a = "Hello Durgesh"
// console.log(a)
// console.log(typeof a)


// a = true;
// console.log(a)
// console.log(typeof a)


// a = null;
// console.log(a);
// console.group(typeof a)

// //Number

// var num = 10;
// console.log(num);
// var num = 2.4;
// console.log(typeof num);

// //bullioon

// var t = true;
// console.log(t);
// var f = false;
// console.log(f);

// //string
// console.log(typeof "Jay Shree Ram")

// //use of backslesh for break the line use(\n)
// str = "How you doin ?\n i am fine and you? "
// console.log(str);

// //power of back tick break line without ust \ 
// var cst = `hii IASHBH AHUASDC
// IIUCSGVCS IASDDHVCSAAJ
// CIUC  `
// console.log(cst);

// //dynmic input 
// var num = 1441;
// console.log(`Half of ${num} is ${num/2}`);


// console.log("Ram JI KI Sarkar")


// //redeclaration is allowe  but this is Wrong
// var l = hello;
// console.log(l);
// var l = 200;
// console.log(l);

// //over come krne kai liyai
// //comes let veriabels
// let l = 100;
// console.log(l);
 
// //we can reintialization a veraiable but we cannot redeclara it
// //  l = 300;
// // console.log(l);  //SyntaxError: Identifier 'l' has already been declared

// //loops in Js

// let numb = 10;
// for(var i = 0; i < num; i++){
//     if(i % 2 == 0){
//         console.log("input is even");
//     }
// }

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

// //const
// //no reintialization and no redeclared

// const a = 100;
// console.log(a);

// const a = "100"
// console.log(a) // note working

// a = 100;
// console.log(a) // not working





