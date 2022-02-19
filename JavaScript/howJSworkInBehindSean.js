var num = 5;
function cube(num) {
    var res = num*num*num;
    return res;
}
var cube1 = cube(num);
var cube2 = cube(10);
var cube3 = cube (); 

console.log(cube1);
console.log(cube2);
console.log(cube3); //NAN  not a number
//console.log(""+cube); print full function 
console.log(undefined * 5 * undefined); // non scnscal calculation