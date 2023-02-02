let userName=prompt("kulanici adinizi giriniz");
let info=document.querySelector("#info");

info.innerHTML=`${userName ? userName : "kullanici adiniz yok"}`;
