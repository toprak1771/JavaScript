//Callback Functions

function printScreen1(){
    console.log("İlk ekran çiktisi");
};

function printScreen2(){
    setTimeout(function(){
    console.log("İkinci ekran çiktisi");    
    }, 3000);
};

function printScreen3(){
    console.log("ücüncü ekran ciktisi");
};

printScreen1();
printScreen2();
printScreen3();

//Çıktı şu şekilde:
// İlk ekran çıktısı
// Üçüncü ekran çıktısı
// İkinci ekran çıktısı

//Bunun sebebi javascriptin asenkron çalışma yapısıdır.

//calllback ile bunu çözelim.

function printScreen5(calllback1,callback2){
    setTimeout(function(){
    calllback1();
    console.log("İkinci ekran çiktisi");
    callback2();    
    }, 3000);
};

printScreen5(printScreen1,printScreen3);


