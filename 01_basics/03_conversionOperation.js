let score = "33abc";

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score);  // will convert any string into number,but if value is not a number then output will give "NaN"
// console.log(typeof valueInNumber);
// console.log(valueInNumber); 

// "33" => 33
// "33abc" => NaN 
// true => 1 , false => 0
// undefined => NaN


let isLoggedIn = "poojan";
let booleanIsLoggdIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggdIn);
 
// 1 => true, 0 => false;
// "" => false;
// "poojan" => true;

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);