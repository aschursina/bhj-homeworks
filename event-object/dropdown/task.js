let arrDropdown = Array.from(document.querySelectorAll(".dropdown"));
let arrLink = Array.from(document.querySelectorAll(".dropdown__link"));

arrDropdown.forEach((dropItem) => {
  let arrList = dropItem.querySelector(".dropdown__list");
  let arrValue = dropItem.querySelector(".dropdown__value");
  arrValue.addEventListener("click", event => {
    arrList.classList.toggle("dropdown__list_active");
  });

  arrLink.forEach((link) => {
    link.addEventListener("click", event => {
      event.preventDefault();
      arrValue.textContent = event.target.textContent;
      arrList.classList.remove("dropdown__list_active");
    });
  });
});





