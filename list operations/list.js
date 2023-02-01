var elementlist=document.getElementById("list");
var liList=document.querySelectorAll(".deneme");

let lastChild=document.querySelector("ul#list>li:last-child");
lastChild.innerHTML="Son öge değişti";

let firstChild=document.querySelector("ul#list>li:first-child");
firstChild.innerHTML="İlk öge değişti";




var createLiElement=document.querySelector("#createlielement")
createLiElement.addEventListener("click",function createLi() {
   var newLiElement=document.createElement("li");
   var inputValue=document.querySelector("#veri");
   newLiElement.textContent=inputValue.value;
   elementlist.append(newLiElement);
   inputValue.value="";    
})

for (var index = 0; index < liList.length; index++) {
       liList[index].style.color="red";
}