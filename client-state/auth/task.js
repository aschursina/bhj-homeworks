const form = document.getElementById("signin__form");
const signIn = document.getElementById("signin");
const welcome = document.getElementById("welcome");
const userHello = welcome.querySelector("#user_id");

function hello (userId) {
  signIn.classList.remove("signin_active");
  welcome.classList.add("welcome_active");
  userHello.innerText = userId; 
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
  xhr.responseType = "json";
  xhr.onload = () => {
    if(xhr.response.error) {
      alert(`Ошибка ${xhr.status}`);
    } else if (!xhr.response.success) {
      alert("Неверный логин/пароль");
    } else {
      let userId = xhr.response.user_id;
      localStorage.setItem("userId", userId);
      hello(userId);
    }
  }
  xhr.send(new FormData(form));
});

function checkUser() {
  userId = localStorage.getItem("userId");
  if(userId) {
    hello(userId);
  }
};

checkUser();
localStorage.clear();