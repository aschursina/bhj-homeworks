let click = document.getElementById("clicker__counter");
let img = document.getElementById("cookie");

img.onclick = changeCookie;

function changeCookie() {
  if(img.width == 200) {
    img.width = 300;
  } else {
    img.width = 200;
  }
  click.textContent++;
}

