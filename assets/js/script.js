// Saved questions

var questions = [
    
    {
    question: "My name is:",
    answer1: "Ben",
    answer2: "Jacob",
    answer3: "Ryan",
    answer4: "Jim",
    correctAns: "Ryan",
    },

    {
    question: "My favourite food:",
    answer1: "Chocolate",
    answer2: "Icecream",
    correctAns: "Icecream",
    }

]

var randomNumber;
var score = '0'

// Start Button 
var start = document.getElementById("start-button");
var main = document.getElementById("start-menu");
var quiz = document.getElementById("quiz-game");
var timerEl = document.getElementById("timer");

var secondsLeft = 90;
timerEl.textContent = secondsLeft;


// Start game
function hideMenu() {
    main.style.display = "none";
    quiz.style.display = "block";
    };

// Start timer
function startTimer () {
    var timerInterval = setInterval(function(){
        secondsLeft --;
        timerEl.textcontent = secondsLeft;
    }, 1000);

    if (timerInterval = 0) {
        main.style.display = "none";
        quiz.style.display = "none";
    }
    };      

//Write new questions
function loadQuestion () {
    var q = document.getElementById("question")
    var ans1 = document.getElementById("answer1")
    var ans2 = document.getElementById("answer2")
    var ans3 = document.getElementById("answer3")
    var ans4 = document.getElementById("answer4")

    // Clear questions and answers
    q.textContent = ""
    ans1.textContent = ""
    ans2.textContent = ""
    ans3.textContent = ""
    ans4.textContent = ""

    // Load new question and answer set
    randomNumber = Math.floor(Math.random() * questions.length);

    //Write new question and answers
    q.textContent = questions[randomNumber].question;
    ans1.textContent = questions[randomNumber].answer1;
    ans2.textContent = questions[randomNumber].answer2;
    ans3.textContent = questions[randomNumber].answer3;
    ans4.textContent = questions[randomNumber].answer4;

    // var answerBtn = document.querySelectorAll("#answer-list button")

    return randomNumber;
}

// Answer question
function answerQuestion (event) {
    console.log(questions[randomNumber].correctAns);
    var chosenAns = event.target().textContent;
// Check Answer
   if (chosenAns === questions[randomNumber].correctAns) {
        score++
   }
}

function startquiz () {
    hideMenu ();
    startTimer ();
    loadQuestion ();
}

var answerBtn = document.querySelectorAll('#answer-list button')
console.log(answerBtn)
// Event listeners
start.addEventListener('click', startquiz);
answerBtn.addEventListener('click', answerQuestion);




//Write new question


// Submit Answer

// Save score to scoreboard