let arr = Array.from(document.querySelectorAll(".rotator"));

arr.forEach((e) => {
 let arrCase = Array.from(e.querySelectorAll(".rotator__case"));
 let currentRotator = arrCase.length - 1;
 
 let change = () => {
  if(currentRotator === arrCase.length - 1) {
    currentRotator = 0;
    arrCase[currentRotator].classList.remove("rotator__case_active")
  } else { 
    arrCase[currentRotator].classList.remove("rotator__case_active")
  }
  currentRotator++;
  arrCase[currentRotator].classList.add("rotator__case_active");
 }

 setInterval(change, 2000);
});



