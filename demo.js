// setTimeout(() => {
//     for(let i = 1; i <= 10; i++){
//         console.log(i);
//     }
// }, 1000);

// for(let i = 1; i<=10; i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 1000*i);
// }
// for(var i = 1; i<= 10; i++){
//     function outer(a){
//         setTimeout(() => {
//             console.log(a);
//         }, 1000*a);
//     }
//     outer(i);
// }

// for(var i = 1; i <= 10; i++){
//     function cb(a){
//         console.log(a); 
//     }
//     setTimeout(cb , 1000*i , i);
// }


// fetch() api

console.log("before");
setTimeout(function () {
  console.log("time over");
}, 5000);
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(function (response)
  {
    return response.json() // when a promise is returned, it creates a promise and then return it , which is obviously of fuflfilled state 
  })
  .then(function (json) {
    console.log(json)
  });
console.log("after");
