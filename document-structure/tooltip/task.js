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
      activeTooltip.remove();
      return;
    }

    let position = link.getBoundingClientRect();
    let postionTop = position.top + window.pageYOffset;
    let positionLeft = position.left + window.pageXOffset;
    newTooltip.style.top = postionTop + position.height + "px";
    newTooltip.style.left = positionLeft + "px";

    link.insertAdjacentElement('afterEnd', newTooltip);
   
  }) 
});


