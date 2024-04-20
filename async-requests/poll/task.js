let loader = document.getElementById("loader");
let items = document.getElementById("items");

function createItem(valutes) {
  items.innerText = '';
  Object.keys(valutes).forEach((valute) => {
    items.insertAdjacentHTML("beforeend",  
    `<div class="item">
    <div class="item__code">${valutes[valute].CharCode}</div>
    <div class="item__value">${valutes[valute].Value}</div>
    <div class="item__currency">руб.</div>
    </div>`);
  })
}

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.send();
xhr.addEventListener("readystatechange", () => {
  if(xhr.readyState !== xhr.DONE) {
    return;
  };
  
  let file = JSON.parse(xhr.responseText);
  valutes = file.response.Valute;
  createItem(valutes);

  if(loader.classList.contains("loader_active")) {
    loader.classList.remove("loader_active")
  };
})

