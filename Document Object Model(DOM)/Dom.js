let title=document.getElementById("title");
title.innerHTML="Nodejs"

let link=document.querySelector("#link"); //sayfada eşleşen ilk elemanı döndürür
link.innerHTML+=" degıstırıldı";
link.style.color="red";
link.classList.add("btn");

const emails=document.getElementsByName("email");
const services=document.getElementsByClassName("service");
const servicesquery=document.querySelector(".services"); //sayfada eşleşen ilk elemanı döndürür
const serviceall=document.querySelectorAll(".services"); //tüm hepsini döndürür

function getFormvalue(){
    var x=document.getElementById("form1");
    for (var i=0;i<x.length;i++)
    {
     if (x.elements[i].value!='Submit')
      {  
        console.log(x.elements[i].value);
       }  
     }
}



function set_background(){
    let bodylist=document.getElementsByTagName("body")[0];
    let pList=bodylist.getElementsByTagName("p");
    console.log(pList);
    let firstp=pList[0];
    let secondp=pList[1];
    firstp.style.background="red";
    secondp.style.background="blue";
}

function getAttributes(){
    let test=document.getElementById("w3r");
    let target=test.target;
    console.log(target);
    let type=document.getElementById("w3r").type;
    console.log(type);
    let hreflang=document.getElementById("w3r").getAttribute("hreflang");
    console.log(hreflang);
}

var changeColor=document.querySelector("#changeColor");
console.log(changeColor.classList);
changeColor.classList.add("changeColor");