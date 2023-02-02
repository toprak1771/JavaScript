let userName=prompt("kullanici adinizi giriniz");
let _myname=document.querySelector("#myName");
_myname.innerHTML=`${userName? userName : "kullanici adi girmediniz"}`;
showTime()
function showTime(){
   _clock=document.querySelector("#myClock");
    var timeHour=new Date().getHours();
    var timeMinute=new Date().getMinutes();
    var timeSecond=new Date().getSeconds();
    var timeToday=new Date().getDay();
    _clock.innerHTML=`${timeHour}-${timeMinute}-${timeSecond} ${timeToday}`;
}

