function function1(username,lastname){
console.log(`${username} ${lastname}`)
}

function1()
function1("Toprak","Tüzün")

function function2(username="",takim=""){
    console.log(`${username} ${takim}`)
}
function2();
function2("toprak","gs");

function function3(num1,num2){
    return (num1+num2);
};

number=function3(17,35);
console.log(number);

function getHtml(id,text){
let div=document.querySelector(`#${id}`);
div.innerHTML=text;
}
getHtml("info","Basarili");

var number1=17;
var number2=35;

function function4(){
    var number3=34;
    number1 + number2 + number3
};

function function5(){
    number1+number2+number3 //number 3'Ü GLOBAL SCOPE DA DEĞİL DE FUNCTİON4 ÜN SCOPE'UNDA TANIMLADIĞIMIZDAN FUNCTİON5 HATA VERİR
}
// function4();
// function5();

//ArrowFunctions

let func=(param1,param2,param3)=>expression;
const carpim = (sayi1,sayi2) => sayi1*sayi2;

//console.log(carpim(2*17));

