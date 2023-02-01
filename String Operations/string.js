let email="topraktuzun@hotmail.com"
let firstName="toprak"
let lastName="TUZUN"

//string karakter sayısı --> length
console.log(email.length)

//ilk karakteri bulmak --> [0]
console.log(email[0])

//metin birleştirme --> concat
console.log(firstName.concat(" ",lastName," ","Canakkale"))

// buyuk harf / kucuk harf
console.log(firstName.toUpperCase())
console.log(lastName.toLowerCase())

//Belirtile index numarasındaki karakterin unicode değerini vermek -->charCodeAt
console.log("---------------")
var _userName="Toprak Tuzun, Canakkale"
console.log(_userName.charCodeAt(0))
console.log("---------------")

//string metni diziye çevirmek -->split
console.log("---------------")
var names=_userName.split()
console.log(names)
console.log("---------------")

//string içinde istediğmiz bilgiyi aramak --> search
console.log(email.search("@"))
console.log(email[11])

console.log(email.search("asdf"))

//belli bir yere kadar almak --> slice
let DOMAIN= email.slice(12)
console.log(DOMAIN)
console.log("---------------")
console.log(email.slice(0,email.indexOf("@")))
console.log(email.slice(0,email.search("@")))
console.log(email.slice(0,11))

//replace kullanımı
console.log("---------------")
let _newMail=email.replace(email.slice(email.search("@")+1),"gmail.com")
console.log(_newMail)
console.log("---------------")

//istediğim bilgi var mı -->includes
console.log(email.includes("@"))
console.log(email.includes("asdf"))

//İlk harfleri büyük yapmak
let userName=`${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`
console.log(userName)

//istediğim bilgiyle basladı mı ? bitti mi? --> startsWidth, endsWidth
console.log(email.endsWith("com"))
console.log(email.endsWith("asdf"))
