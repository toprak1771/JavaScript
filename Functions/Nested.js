function sayacartir() {
    let sayac = 0;
  
    return function () {
      return sayac++;
    };
  }
  
  let counter = makeCounter();
  
  console.log(sayacartir()); // 0
  console.log(sayacartir()); // 1
  console.log(sayacartir()); // 2