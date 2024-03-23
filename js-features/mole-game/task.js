let deadMole = document.getElementById("dead");
let lostMole = document.getElementById("lost");
let getHole = index => document.getElementById(`hole${index}`);

let clear = function clearMole() {
    deadMole.textContent = 0;
    lostMole.textContent = 0;
}

for (let i = 1; i < 10; i++){
  getHole(i).onclick = () => {  
    if (getHole(i).className.includes("hole_has-mole")) {
      deadMole.textContent++;
    } else {
      lostMole.textContent++;
    }

    if(deadMole.textContent == 10) {
      alert("Вы победили!");
      clear();  
    }

    if(lostMole.textContent == 5) {
      alert("Вы проиграли!");
      clear();
    }
  }
}