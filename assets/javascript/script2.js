var timerEl;
var timeEl = 5;
var scoreEl;
var listEl;
var questionEl;
var startBtnEl;
var timerInterval;
var q = 0;

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

function countDown() {
var timerInterval = setInterval (function() {
timeEl--;
timerEl.textContent = timeEl
if(timeEl <= 0) {
    clearInterval(timerInterval)
}


}, 1000)
}

function startGame() {
countDown();
displayQuestions();
}

function endGame() {

}

function displayQuestions () {
questionEl.textContent = questions.question[0]
textRemoval()


}

function scoreBoard () {

}

function textRemoval() {
    while(listEl.firstChild) {
        listEl.removeChild(listEl.firstChild);
    }
}


startBtnEl.addEventListener("click", function() {
 startGame();
})