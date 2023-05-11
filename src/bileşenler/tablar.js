import axios from "axios";

const Tablar = (konu) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //

  const topicsDiv = document.createElement("div");
  topicsDiv.setAttribute("class", "topics");

  const jsDiv = document.createElement("div");
  jsDiv.setAttribute("class","tab");
  jsDiv.textContent = "javascript";
  topicsDiv.append(jsDiv);

  const bsDiv = document.createElement("div");
  bsDiv.setAttribute("class","tab");
  bsDiv.textContent = "bootstrap";
  topicsDiv.append(bsDiv);

  const teknoDiv = document.createElement("div");
  teknoDiv.setAttribute("class","tab");
  teknoDiv.textContent = "teknoloji";
  topicsDiv.append(teknoDiv);

  return topicsDiv;
}


  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  const tabEkleyici = (secici) => {
    axios
    .get("http://localhost:5001/api/konular")
    .then((response)=>{
      console.log("görev4",response.data.konular);

      const tabSecici = document.querySelector(secici);
      tabSecici.append(Tablar(response.data.konular));
    })
    .catch((error)=>{
      console.log(error);
    })
    .finally(()=>{

    });
  }  

export { Tablar, tabEkleyici }
