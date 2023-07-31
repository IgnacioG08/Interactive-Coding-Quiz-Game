var timerEl;
var timeEl = 60;
var scoreEl;
var listEl;
var questionEl;
var startBtnEl;
var timerInterval;
var q = 0;
var score = 0;

var startBtnEl = document.querySelector("#startBtnEl")
var timerEl = document.querySelector("#timerEl")
var scoreEl = document.querySelector("#scoreEl")
var listEl = document.querySelector("#listEl")
var questionEl = document.querySelector("#questionEl")

var questions = [
    {
        question : "Which tag is accurate when linking JavaScript?" ,
        answer : ["<a>", "<href>", "<src>", "<link>", "<rel>"] ,
        correct : "<src>"
    },
    {
        question : "Where do you place your CSS Hypertext Reference in the HTML file?" ,
        answer : ["upper <body>", "lower <body>", "querySelector", "<head>", "<header>"] ,
        correct : "<head>"
    },
    {
        question : "Which is not considered a primitive type?" ,
        answer : ["string", "bigint", "number", "null", "const"] ,
        correct : "const"
    },
    {
        question : "What is function scope" ,
        answer : ["global", "local", "if()", "block", "else if"] ,
        correct : "local"
    },
    {
        question : "Which is a considered a variable that never changes?" ,
        answer : ["var", "x", "let", "const", "y"] ,
        correct : "const"
    }
];

if(!localStorage.getItem("scores")) {
    localStorage.setItem("scores", "");
}

function countDown() {
timerInterval = setInterval (function() {
timeEl--;
timerEl.textContent = timeEl
if(timeEl <= 0) {
    clearInterval(timerInterval)
}


}, 1000)
}

function startGame() {
    q = 0;
    timeEl = 60;
    document.getElementById("scores").style.display="none"
countDown();
displayQuestions();
}

function endGame() {
scoreBoard();
document.getElementById("gameEnd").style.display="block"
clearInterval(timerInterval)
}

function displayQuestions () {
    if(q >= 5) {
        questionEl.textContent = "Congratulations";
        listEl.textContent = "Game is Complete";

    } else {
        questionEl.textContent = questions[q].question
        textRemoval()
        for(i = 0; i < questions[q].answer.length; i++) {
            answerBtn = document.createElement("button");
            listEl.appendChild(answerBtn)
            answerBtn.textContent = questions[q].answer[i]
            answerBtn.addEventListener("click", function(event){
                if(event.target.textContent === questions[q].correct) {
                    score++
                    q++
                    displayQuestions()
                } else {
                    timeEl = timeEl - 5; 
                }
                if(timeEl === 0 || q >= 5) {
                    endGame();
                }
            })
            }
        }
        
    }

function scoreBoard () {
 document.getElementById("scoreEl").innerHTML = "Score: " + timeEl
}

function textRemoval() {
    while(listEl.firstChild) {
        listEl.removeChild(listEl.firstChild);
    }
}


startBtnEl.addEventListener("click", function() {
 startGame();
})

document.getElementById("submit").addEventListener("click", function() {
    var initials = document.getElementById("initials").value;
    var record = initials + " " +  timeEl + "<br>";
    var records = localStorage.getItem("scores") + record;
    localStorage.setItem("scores", records);
    document.getElementById("scoreboard").innerHTML = records;
    document.getElementById("scores").style.display = "block";
    document.getElementById("gameEnd").style.display = "none";
   })
   document.getElementById("clear").addEventListener("click", function() {
    localStorage.setItem("scores", "");
    document.getElementById("scoreboard").innerHTML = "";
   })