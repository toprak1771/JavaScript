let city = "Çanakkale";


function letsLearnScope() {
  if (true) {
    let city = "İzmir";
    console.log(city);
  }
  console.log(city);
};

letsLearnScope();
console.log(city);
