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
// console.log(stringNumber);
// console.log(typeof stringNumber);

/**********************************************oprations**********************************************/

let value = 3;
// let negValue = -value;
// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 2);
// console.log(2 % 2);
// console.log(2 / 2);

let str1 = "hello";
let str2 = " poojan"

let str3 = str1 + str2 ;

// console.log(str3);

const gameName = new String("poojan-pd");
const newString = gameName.slice(-7, 4)
// console.log(newString)

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getMonth() + 1 );

// const myArr = [0, 1, 2, 3, 4, 5]
const myArr = new Array(0,1,2,3,4,5);

// console.log("A ",myArr);

let myn1 = myArr.slice(1,3);
// console.log(myn1);
// console.log("b ", myArr);

let myn2 = myArr.splice(1,3);
// console.log(myn2);
// console.log("c ", myArr)

const mysym = Symbol('mykey')

const jsUser = {
    name : "poojan",
    age : 19,
    email : "poojan@google.com",
    [mysym] : "key1"

}

// console.log(jsUser)

jsuser