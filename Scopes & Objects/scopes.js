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

const person = {
  firstName: 'Toprak',
  lastName: 'Tüzün',
  age: 26,
  country: 'Turkey',
  city: 'Çanakkale',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
  ],
  isMarried: true,
  getFullName: ()=>`${person.firstName} ${person.lastName}`
  
};

// Object.freeze(person);
// console.log(person)
console.log(person.getFullName())

const formatter = new Intl.ListFormat('tr', {style:'long',type: 'conjunction'});

person.title= "Developer";
person.getInfo= function(){
  // let withoutLasSkills = this.skills.splice(0,this.skills.length-1).join(',');
  // let lastSkill = this.skills[this.skills.length-1] // daha kısa yolu olarak this.skills.at(-1)
  let lastSkill = formatter.format(this.skills);
  let last = `He is a ${this.title}, he knows ${lastSkill}`;
  return last;
}
console.log(person.getInfo());

//Object.Assign orjinal objeyi bozmadan objeyi kopyalamaktır
//atama ile koyapaldığımızda referans değer olduğu için bir objenin properysini değiştirdiğimizde her iki objeninde o ilgili property değeri değişir

let newPerson = Object.assign({},person);

console.log(person);

newPerson.age=27;

console.log(person);
console.log(newPerson)


//Object.keys, Object.values ve Object.entries

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

for(let [key, val] of Object.entries(person)){
  console.log(key, val)
}

//hasOwnProperty

console.log(person.hasOwnProperty('firstName'));

//Object.freeze(person) metodu ile obje değiştirilemez inmutable hale getirilebilir.

//Object.seal(person) metdou ile objenin olan propertylerini değiştirebiliyorsun fakat yeni bir property ekleyip çıkaramıyorsun.

