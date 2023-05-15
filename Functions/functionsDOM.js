let info=document.querySelector("#deneme");
info.addEventListener("click",changestyle);

function changestyle() {
    console.log("alert");
    this.style.color=="red" ? this.style.color="black" : this.style.color="red";
}