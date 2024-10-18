// isimleri alfabetik sıralama

function isimGirisi() {
  let isimAdedi = prompt("kac adet isim girmek istersiniz");
  let isimler = [];

  for (let i = 0; i < isimAdedi; i++) {
    let isim = prompt((i + 1) + "ismi girin:");
    isimler.push(isim);
  }

  console.log("girilen isimler:", isimler);
  isimler.sort();

  console.log("alfabetik siralanmis isimler:", isimler);
}

isimGirisi();

// Kullanıcıdan kaç adet isim gireceğini soralım
// Girdiği her bir ismi "isimler" dizisine kaydedelim.
// Kaydettikten sonra bir listeleyelim.
// Daha sonra tüm girilen isimleri alfabetik olarak sıralayalım. (ipucu: sort() 'u araştırabilirsiniz)