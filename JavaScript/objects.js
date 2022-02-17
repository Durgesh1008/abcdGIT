//javascript object are always in key value pair


let obj = {};  //empty object
console.log(obj);


let person = {
    //key value
    name : "Durgesh",  //name is key & Durgesh is value
    age : 18 ,
    gender : "male",
    mobile : 99999999 ,
    village : "gopalpur",
    gender : "male"
};

console.log(`hello ${person.name} Thanku for sing in  `)
console.log(person.gender);
console.log(person ["gender"]);

let str = "hello";
console.log(str);
console.log(str.length); //dot notation
console.log(str["length"]); // squre notation

let captainAmerica = {
    fristName : "steve",
    lastName : "Rogers",
    friends : ["Bucky" , "Tony Stark" , "Brue banner"],
    age : 102,
    isAvenger : true,
    address :{                    //object type
        state: "Manhattan",
        city: "New York",
        country: "USA"
    },
    sayHi : function(){
        console.log(`hello ${this.fristName} thanku for showing intrest`); // this --> object you use of (this) whene you are in same object 
    }
};

console.log(captainAmerica);
console.log(captainAmerica.name);
console.log(captainAmerica.friends[0]);
console.log(captainAmerica.sayHi()); //method accessing

//for loop

for(let key in captainAmerica){
    //key
    console.log(`${key}`);

    //if we unable to find key then 
    // hathi (here use any things) jo varibale h uske andar meri key ki value padi hui h 
    //value
    // varibale ke andar jo binded value h wo chahiye 

    console.log(captainAmerica [key]); //bracket notation uses
}


//this

// let car = {
//     name: "Ferrari",
//     model: 2022,
//     startEngine: function () {
//         console.log(`Starting the engine of the car ${this.name}`)
//     }
// }

// delete captainAmerica.lastName;
// console.log(captainAmerica);