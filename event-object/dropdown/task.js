let arrDropdown = Array.from(document.querySelectorAll(".dropdown"));
let arrLink = Array.from(document.querySelectorAll(".dropdown__link"));

arrDropdown.forEach((dropItem) => {
  let arrList = dropItem.querySelector(".dropdown__list");
  let arrValue = dropItem.querySelector(".dropdown__value");
  let changeStatus = function(event) {
    arrList.classList.toggle("dropdown__list_active");
  }
  
  arrValue.addEventListener("click", changeStatus);

  arrLink.forEach((link) => {
    let changeLink = function(event) {
      event.preventDefault();
      arrValue.textContent = this.textContent;
      arrList.classList.remove("dropdown__list_active");
    }
    
  link.addEventListener("click", changeLink);
  });
})




