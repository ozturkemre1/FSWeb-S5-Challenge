import axios from "axios";
const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //

  const divItem = document.createElement("div");
  divItem.setAttribute("class","header");

  const dateSpan = document.createElement("span");
  dateSpan.setAttribute("class", "date");
  dateSpan.textContent = `${tarih}`
  divItem.append(dateSpan);

  const h1Baslik = document.createElement("h1");
  h1Baslik.textContent = `${baslik}`;
  divItem.append(h1Baslik);

  const tempSpan = document.createElement("span");
  tempSpan.setAttribute("class", "temp");
  tempSpan.textContent = `${yazi}`
  divItem.append(tempSpan);

  return divItem;
}

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))

  document
  .querySelector(secici)
  .append(Header('Teknoloji Zamanı', '11 Kasım 2022', 'sağdaki yazı'));
 
}

export { Header, headerEkleyici }
