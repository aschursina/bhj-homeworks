arrTooltip = Array.from(document.getElementsByClassName("has-tooltip"));

arrTooltip.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    
    let newTooltip = document.createElement("div");
    newTooltip.classList.add("tooltip");
    newTooltip.textContent = link.getAttribute("title");
    newTooltip.classList.add("tooltip_active");

    let activeTooltip = link.querySelector(".tooltip_active");
    if(activeTooltip) {
        activeTooltip.classList.remove();
        return;
    }

    link.appendChild(newTooltip);
  }) 
});