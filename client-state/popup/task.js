const subModal = document.querySelector(".modal");
const closedModal = document.querySelector(".modal__close");

const getCookie = (name) => {
  const value = "; " + document.cookie;
  let parts = value.split(";" + name + "=");
  if(parts.length === 2) {
    return parts.pop().split(";").shift();
  }
};

closedModal.addEventListener("click", () => {
  subModal.classList.remove("modal_active");
  document.cookie = "closedModal=yes";
});
  

if(getCookie("closedModal") !== "yes") {
  subModal.classList.add("modal_active");
  document.cookie = "closedModal=nope";
};