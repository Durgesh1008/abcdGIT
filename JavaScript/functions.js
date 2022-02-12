// 3 types of function

//1) Normal Function

//function definiton
// function function_name(param1, param2) {
    //do something
// }

// function invoke
// function_name(arg1, arg2);

// function add(a, b) {
//     console.log( a + b);
// }


// add(2, 6);

// functions are treated as first class citizens in Javascript
//  -> functions can be returned 
//  -> functions can be passed as parameters/argument
//add , mul , sub , div 
// function calculator(str,a,b) {
//     if (str == 'add') {
//         return function add() {
//             console.log( a + b);
//         }
//     }
//      else if (str == 'sub') {
//         return function sub() {
//             console.log(a-b);
//         }
//      }
// }
// let returnedFunc = calculator('add', 2, 3);
// // console.log("returned function is\n" + returnedFunc); //get full return function
// returnedFunc();
// let returnedFunct = calculator('sub', 200, 113);
// // console.log("returned function is\n" + returnedFunct);
// returnedFunct();




// 2) Function Expression

// let variable_name = function () {
//     // do something
// }
// name of variable is ised to invoke the funciton
// variable_name();

// let sayHi=function () {
//      console.log("hello guys is am function expression");
// }

// console.log("line 54\n" + sayHi);
//sayHi();
//abcd(); // error abcd is not defined



// 3) IIFE-> Imediately invoke function expression

function add(a, b) {
    return a + b
}
add(2, 3);  //normel


// save line 
let additionIIFE = (function (a, b) {
  console.log(a + b);
})(20, 30);
