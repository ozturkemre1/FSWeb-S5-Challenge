import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

  const cardDiv = document.createElement("div");
  cardDiv.setAttribute("class", "card");

  const headlineDiv = document.createElement("div");
  headlineDiv.setAttribute("class", "headline");
  headlineDiv.textContent = `${makale.anabaslik}`;
  cardDiv.append(headlineDiv);

  const authorDiv = document.createElement("div");
  authorDiv.setAttribute("class", "author");
  cardDiv.append(authorDiv);

  const imgContainerDiv = document.createElement("div");
  imgContainerDiv.setAttribute("class", "img-container");
  authorDiv.append(imgContainerDiv);

  const imgItem = document.createElement("img");
  imgItem.setAttribute("src", makale.yazarFoto);
  imgContainerDiv.append(imgItem);

  const yazarAdıSpan = document.createElement("span");
  yazarAdıSpan.textContent = `${makale.yazarAdi} tarafından`
  authorDiv.append(yazarAdıSpan);

  cardDiv.addEventListener("click", (event) => {
    console.log(cardDiv.querySelector(".headline").textContent);
  });

  return cardDiv;

}

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

    axios.get("http://localhost:5001/api/makaleler").then((response)=>{
        console.log(response);
        for(let i in response.data.makaleler){
          response.data.makaleler[i].map((article)=>{
            document.querySelector(secici).append(Card(article))
          })
        }
    })
    .catch((error)=>{
      console.log(error)
    })
    .finally(()=>{
      
    })

}

export { Card, cardEkleyici }
