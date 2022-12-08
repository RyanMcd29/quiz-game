// Saved questions
// var questions = [
//     {
//         question: "My name is:",
//         answer1: "Ben",
//         answer2: "Jacob",
//         answer3: "Ryan",
//         answer4: "Jim",
//         correctAns: "Ryan",
//     },

//     {
//         question: "My favourite food:",
//         answer1: "Chocolate",
//         answer2: "Icecream",
//         correctAns: "Icecream",
//     },

//     {
//         question: "Mr fantastic:",
//         answer1: "Deezus",
//         answer2: "Nuttus",
//         answer3: "Ryan",
//         answer4: "Jim",
//         correctAns: "Deezus",
//     },

//     {
//         question: "Mr cool:",
//         answer1: "my secretary",
//         answer2: "bigdog",
//         answer3: "Ryan",
//         answer4: "Jim",
//         correctAns: "bigdog",
//     },

//     {   
//         question: "My name is:",
//         answer1: "almomd",
//         answer2: "Jacob",
//         answer3: "kyre",
//         answer4: "Jim",
//         correctAns: "Ryan",
//     },
// ];

var randomNumber;
var score = 0;
var questionsAnswered = 0; 
var index = 0;

// Start Button 
var start = document.getElementById("start-button");

// Game Sections
var main = document.getElementById("start-menu");
var quiz = document.getElementById("quiz-game");
var submitForm = document.getElementById("submit-result")

// Answer Buttons
var answerBtnEl = document.querySelectorAll('#answer-list button')
var questionBox = document.getElementById("question");
var ansBtn1 = document.getElementById("answer1");
var ansBtn2 = document.getElementById("answer2");
var ansBtn3 = document.getElementById("answer3");
var ansBtn4 = document.getElementById("answer4");
var ansResultEl = document.getElementById("answer-result")

// Timer
var timerEl = document.getElementById("timer");

// Scoreboard
var dspScore = document.getElementById("scrHeading");
var submitBtn = document.getElementById("submit-btn")
var intlInput = document.getElementById("initials")
var scoreboard = document.getElementById("scoreboard")
var scoreboardLi = document.getElementById("scoreboard-list")
var restartBtn = document.getElementById("play-again");
var index = 0;


// Start game
function hideMenu() {
    main.style.display = "none";
    quiz.style.display = "block";
    };

// Clear questions and answers
function clearQuestion (){
    questionBox.textContent = "";
    ansBtn1.textContent = "";
    ansBtn2.textContent = "";
    ansBtn3.textContent = "";
    ansBtn4.textContent = "";
return;
}

// Write new questions and answers
function writeQuestions (){
    questionBox.textContent = questions[randomNumber].question;
    ansBtn1.textContent = questions[randomNumber].answer1;
    ansBtn2.textContent = questions[randomNumber].answer2;
    ansBtn3.textContent = questions[randomNumber].answer3;
    ansBtn4.textContent = questions[randomNumber].answer4;
    return;
}

function hideButtons () {
    ansBtn1.style.display = "none";
    ansBtn2.style.display = "none";
    ansBtn3.style.display = "none";
    ansBtn4.style.display = "none";
}

// End game 
function endGame() {
    main.style.display = "none";
    quiz.style.display = "none";
    dspScore.textContent = "You scored: " + score;
    submitForm.style.display = "block";
    timerEl.textContent = 0;
return;
}

// Initialise Timer
var secondsLeft = 90;
timerEl.textContent = secondsLeft;


// Start timer
function startTimer () {
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textcontent = secondsLeft;

        if (secondsLeft = 0) {
            endGame ();
            clearInterval(timerInterval);
        }
    }, 1000);
}

// Update and Show Scoreboard ()
function showScrBoard () {
    main.style.display = "none";
    quiz.style.display = "none";
    submitForm.style.display = "none";
    scoreboard.style.display = "block";
    // Convert local storage to obj array
    var usrScore = JSON.parse(localStorage.getItem("savedScore"));
    console.log(usrScore)
    // Set variables using for loop
    // for (var i = 0; i < usrScore.length; i++) {
        var scrBoardInt = document.createElement("li");
        scrBoardInt.textContent = "Initials: " + usrScore.initials + " Score: " + usrScore.endScore;
        console.log(scrBoardInt);
        scoreboardLi.appendChild(scrBoardInt);
    // };
    // Append variables as li
    return;
}

//Write new questions
function loadQuestion () {
    clearQuestion ();
    // hideButtons ();
    randomNumber = Math.floor(Math.random() * questions.length);
    writeQuestions ();
     for (var ansBtnIndex = 0;  ansBtnIndex < answerBtnEl.length; ansBtnIndex++){
       console.log(answerBtnEl[ansBtnIndex].textContent)
        if (typeof answerBtnEl[ansBtnIndex].textContent == "string") {
            answerBtnEl[ansBtnIndex].style.display = "block"
        } else {
            answerBtnEl[ansBtnIndex].style.display = "none"
        }
     } 
    return randomNumber;
}


function answerCheck (x) {
    ansResultEl.textContent = x;
    ansResultEl.style.display = "block"
    var dspAnsReult = setInterval (function() {
        ansResultEl.style.display = "none";
        clearInterval(dspAnsReult);
    },2000)
}
// Answer question
function answerQuestion () {
    console.log(questions[randomNumber].correctAns);
    var chosenAns = event.target.textContent;
    console.log(chosenAns)

// Check Answer, add score if correct, remove time if incorrect
   if (chosenAns === questions[randomNumber].correctAns) {
        score++
        answerCheck("Correct")
   } else {
    answerCheck("Incorrect")
    timerEl.textContent = timerEl.textContent - 10;
   }
   console.log(score);
   questionsAnswered++;

   // Remove Question From Pool
   questions.splice(randomNumber, 1);
   console.log(questions);

   if (questionsAnswered < 5) {
    // Load next question
    loadQuestion ();
   } else {
    endGame();
   };
}

// Submit Score
function submitScore (event) {

    event.preventDefault();
    // var usrIndex = JSON.parse(localStorage.getItem("savedScore"));
    // var index = usrIndex[usrIndex.length].index;
    // console.log(index);
    index++
    var scrObj = {
        scrID: index,
        initials: intlInput.value,
        endScore: score,
        }
    
    const scrObjToString = JSON.stringify(scrObj);
    localStorage.setItem("savedScore", scrObjToString);

    console.log(localStorage)
    showScrBoard ();
    
    return;
    }


function restart () {
    main.style.display = "block";
    quiz.style.display = "none";
    submitForm.style.display = "none";
    scoreboard.style.display = "none";
    questionsAnswered = 0;
    secondsLeft = 90;
    score = 0;
    questions = [
    
    {
        question: "What is the square root of 4?",
        answer1: "8",
        answer2: "16",
        answer3: "2",
        answer4: "1",
        correctAns: "2",
    },

    {
        question: "What is 10 Squared?",
        answer1: "100",
        answer2: "1000",
        correctAns: "100",
    },

    {
        question: "What is 2+2^2 equal?",
        answer1: "8",
        answer2: "4",
        answer3: "6",
        correctAns: "6",
    },

    {
        question: "What is 5x5?",
        answer1: "10",
        answer2: "25",
        answer3: "50",
        answer4: "5",
        correctAns: "25",
    },

    {   
        question: "88/11 equals?",
        answer1: "11",
        answer2: "10",
        answer3: "8",
        answer4: "9",
        correctAns: "8",
    },
    ]
    return;
}

function startquiz () {
    hideMenu ();
    startTimer ();
    loadQuestion ();
return;
}


// Make each answer button a clickable element
var answerBtn = document.querySelectorAll('#answer-list button')
// console.log(answerBtn)
restart ();
// for (var i = 0; i < answerBtn.length; i++) {
//    document.answerBtn.a
// }

// Event listeners
start.addEventListener('click', startquiz);
ansBtn1.addEventListener('click', answerQuestion);
ansBtn2.addEventListener('click', answerQuestion);
ansBtn3.addEventListener('click', answerQuestion);
ansBtn4.addEventListener('click', answerQuestion);
submitBtn.addEventListener('click', submitScore);
restartBtn.addEventListener('click', restart);


