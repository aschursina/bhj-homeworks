let progress = document.getElementById("progress");
let form = document.getElementById("form");

document.forms.form.addEventListener("submit", (event) => {
    event.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
    xhr.upload.onprogress = (event) => {
      progress.value = (event.loaded / event.total).toFixed(1);
    }
    xhr.send(new FormData(form));
    xhr.addEventListener("readystatechange", () => {
      if(xhr.readyState !== xhr.DONE) {
        return console.error(xhr.status);
      } else {
        console.log(JSON.parse(xhr.responseText).message);
      }
    })
})

