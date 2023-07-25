var timer;
var time = 5;
var startBtn;
var score;
var timeInterval;
var q = 0;


var timerEl = document.querySelector("#timer");
var scoreEl = document.querySelector("#score");
var startBtn = document.querySelector("#startBtn");
var questionEl = document.querySelector("#questionEl");
var listEl = document.querySelector("#listEl");

var questions = [
    {
        question: "Which tag is accurate when linking JavaScript?" ,
        answer: ["<a>", "<href>", "<src>", "<link>", "<rel>"] ,
        correct: "<src>"
    },
    {
        question : "Where do you place your CSS Hypertext Reference in the HTML file?" ,
        answer : ["upper <body>", "lower <body>", "querySelector", "<head>", "<header>"] ,
        correct: "<head>"
    },
    {},
    {},
    {}
];

function textRemoval(){
    while(listEl.firstChild) {
        listEl.removeChild(listEl.firstChild);
    }
}

function displayQuestion() {
    if(q >= 4) {
        console.log("You Win")
    } else {
    questionEl.textContent = questions[q].question;
    textRemoval();
    for (i = 0; i < questions[q].answer.length; i ++) {
        var answerBtn = document.createElement("button");
        listEl.appendChild(answerBtn);
        answerBtn.setAttribute("class", "answerBtn")
        answerBtn.textContent = questions[q].answer[i];
        answerBtn.addEventListener("click", function(event) {
            if(event.target.textContent === questions[q].correct) {
                q++
                displayQuestion()

            } else {
                time = time - 5;
            }
           
        })
    } }
}


function countDown() {
    
    var timerInterval = setInterval(function() {
      time--;
      timerEl.textContent = time;
  
      if(time === 0) {
        
        clearInterval(timerInterval);
      }
  
    }, 1000);
  }

function startGame() {
    countDown();
    displayQuestion();
}


startBtn.addEventListener("click", startGame);
