let title = document.getElementById("poll__title");
let answers = document.getElementById("poll__answers");

function createBtn (answer) {
  let btn = document.createElement("button");
  btn.classList.add("poll__answer");
  btn.textContent = answer;
  answers.appendChild(btn);
  return btn;
}

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();
xhr.addEventListener("readystatechange", () => {
  if(xhr.readyState !== xhr.DONE) {
    return;
  };
  
  let file = JSON.parse(xhr.responseText);
  title.innerText = file.data.title;
  answersTitle = file.data.answers;
  
  answersTitle.forEach(answer => {
    createBtn (answer);   
  })
  
  let arrAnswer = document.querySelectorAll(".poll__answer");
  arrAnswer.forEach(btn => {
    btn.addEventListener("click", (event) => {
      alert("Спасибо, ваш голос засчитан!");
    })
  });
})

