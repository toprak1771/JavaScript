let username="Toprak"
const DOMAIN="matematika.com"
let mail=username + "@" + DOMAIN
let info=`
Merhaba ${username} sitemize hosgeldiniz..
mail adresin: ${mail}
mail adresinin uzunluğu:${mail.length}
borcunuz:${17*2}
kısa isminiz:${username[0]}.
`
console.log(info)

const kitap = {
    ad: "Fırtına",
    yazar: "Shakespeare",
    tarih: 1610
}

const bookTable=`<table border>
<tbody>
  <tr>
    <td>Kitap</td>
    <td>${kitap.ad}</td>
  </tr>
<tr>
    <td>Yazar</td>
    <td>${kitap.yazar}</td>
  </tr>
    <tr>
    <td>Tarih</td>
    <td>${kitap.tarih}</td>
  </tr>
</tbody>
</table>
`
document.body.innerHTML=bookTable