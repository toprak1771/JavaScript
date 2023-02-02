user="guest";
price=1;
console.log((price>1 && user=="guest"));
console.log((price>1 || user=="guest"));

let kg=prompt("Lütfen kilograminizi giriniz, 70","70");
let hg=prompt("Lütfen boyunuzu giriniz")

function vkiHesapla(weight, height) {
  var vki = weight/(height*height);
  if(vki<18.5) return alert(`Vücut kitle indeksiniz: ${vki}, değerleriniz düşüktür`);
  if(vki>= 18.5 && vki <= 24.9) return alert(`Vücut kitle indeksiniz: ${vki}, normal değerdesiniz`);
  if(vki>= 25.0 && vki <= 29.9) return alert(`Vücut kitle indeksiniz: ${vki}, kilolusunuz`);
  if(vki>= 30) return alert(`Vücut kitle indeksiniz: ${vki}, aşiri kilolusunuz`);
  return alert("Girdiğiniz değerleri kontrol ediniz");
  };

  vkiHesapla(kg, hg);

  let sayi="17abc";
  let sayikontrol=Number(sayi);
 

if (sayikontrol==NaN || sayikontrol==null || sayikontrol=="") {
    console.log("integer değeri değildir");
}
else{
    console.log(sayikontrol);
}