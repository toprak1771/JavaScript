let number=11
let stringNumber="11"
let bool=true

console.log("number:", typeof(number))
console.log("number:", typeof(stringNumber))
console.log("number:", typeof(bool))

//string ---> int&float
let _number="17"
_number=parseInt(_number)
console.log("_number:",_number,typeof(_number))

let newNumber=parseFloat(_number)
console.log("newNumber:",newNumber,typeof(newNumber))

let number3="11.1"
number3=Number(number3)
console.log("newNumber:",number3,typeof(number3))

let number4="11.4px"
number4=parseFloat(number4);
console.log("newNumber:",number3,typeof(number3))

//number--->string
let number5=35;
 number5=number5.toString();
 console.log(number5,typeof(number5))