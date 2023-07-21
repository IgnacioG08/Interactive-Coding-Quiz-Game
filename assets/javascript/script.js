var timerEl = document.querySelector(".timer");
var time = 60;
var startBtn = document.querySelector(".button")

function countdown() {
  time = time -1
  timerEl.textContent = time
}



function startGame() {
    var timeInterval = setInterval(countdown, 1000) 
}


startBtn.addEventListener("click", startGame) 