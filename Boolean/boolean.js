 Boolean("11") //true
 Boolean("0") //true
 Boolean("") //false

 userName = "user";
 console.log(Boolean(userName)) //true

 Boolean(0) //false
 Boolean(-0) //false
 Boolean(-0.1) //true

 console.log(Boolean(0 == 0)) //true

console.log(Boolean(1n));
console.log(Boolean(-1n));
console.log(Boolean(Infinity));
console.log(Boolean({}));
console.log(Boolean(Symbol()));