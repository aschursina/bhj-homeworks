let timer = document.getElementById("timer");

let msg = function () {
    timer.textContent--;
    if(timer.textContent <= 0) {
      alert('Вы победили в конкурсе');
      clearInterval(decreaseTime);
    }
    
}

let decreaseTime = setInterval(msg, 100);
