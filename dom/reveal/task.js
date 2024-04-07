
let arrBox = Array.from(document.querySelectorAll(".reveal"));

window.addEventListener("scroll", event => {
  arrBox.forEach((e) => {
    let rect = e.getBoundingClientRect();
    if ((rect.top < window.innerHeight) && (rect.bottom > 0)) {
      e.classList.add("reveal_active");
    }
  })
})


