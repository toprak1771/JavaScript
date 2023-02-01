let stringNumber="11"
console.log(stringNumber)
let newNumber=Number(stringNumber);
console.log(newNumber)
console.log("Number Constructed",Number("17"));

let price=10
let tax=0.2
let pricetax=price*tax;
let total = price + pricetax;
console.log("Fiyat:",price,"KDV Oranı:",tax,"KDV Tutari:",pricetax,"Fiyat:",total);

let counter=1;
counter += 1
console.log(counter);

counter -= 1
console.log(counter);

function btn() {
var w =window.open();
w.document.write("<h1>Hello world</h1>");
w.document.close();
}

function dom() {
    document.getElementById("domain").innerHTML="DOM Manipülasyonu yaptık..."
}

document.getElementById("btnClick").addEventListener("click",clicked);
function clicked() {
    alert("Buton!")
}