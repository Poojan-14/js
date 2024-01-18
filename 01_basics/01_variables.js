const accountId = 123456789
let accountEmail = "poojan@gmail.com"
var accountPass = 12345
accountCity = "surat"
let accountState;

// accountId = 11 //not allowed

accountEmail ="pd@gmail.com"
accountPass = 223155
accountCity = "rajkot"

console.log(accountId);

/* prefer not to use var 
because issue of block and functional scope
*/

console.table([accountId, accountEmail, accountPass, accountCity, accountState]);