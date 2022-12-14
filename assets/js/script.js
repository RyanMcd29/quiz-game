var randomNumber;
var score = 0;
var questionsAnswered = 0; 
var index = 0;
var secondsLeft = 90;

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
var timerInterval

// Scoreboard
var dspScore = document.getElementById("scrHeading");
var submitBtn = document.getElementById("submit-btn")
var intlInput = document.getElementById("initials")
var scoreboard = document.getElementById("scoreboard")
var scoreboardLi = document.getElementById("scoreboard-list")
var restartBtn = document.getElementById("play-again");
var viewScoreEl = document.getElementById("view-score")
var clearBtn = document.getElementById("clear-scores");
var newScore = [];
var index = 0;


// Load and render previous scores
// console.log(savedScores)

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
    clearInterval(timerInterval);
    secondsLeft = 0;
return;
}

function viewScoreboard() {
    main.style.display = "none";
    quiz.style.display = "none";
    submitForm.style.display = "none";
    scoreboard.style.display = "block";
    clearInterval(timerInterval);
return;
}

// Start timer
function startTimer () {
    timerInterval = setInterval(function(){
     
        secondsLeft = secondsLeft -1 ;
        timerEl.textContent = secondsLeft;
         
         if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            endGame ();
         } 

    }, 1000)
    
    ;
}

// Update and Show Scoreboard ()
function showScrBoard () {
    main.style.display = "none";
    quiz.style.display = "none";
    submitForm.style.display = "none";
    scoreboard.style.display = "block";
    
    // Load from local storage
    
    console.log(savedScore)
    var savedScore = JSON.parse(localStorage.getItem('oldScores'));
    console.log(savedScore)

    // if (savedScore !== null) {
    newScore.push(savedScore)
    // savedScore.push(newScore)
    // }
   localStorage.setItem('oldScores',JSON.stringify(newScore));

    for (var i = 0; i < newScore.length; i++ ) {
        var scrBoardInt = document.createElement("li");
        scrBoardInt.textContent = "Initials: " + newScore[i].initials + " Score: " + newScore[i].endScore;
        scoreboardLi.appendChild(scrBoardInt);
    }
    // Convert local storage to obj array
    
    // Set variables using for loop
    // for (var i = 0; i < usrScore.length; i++) {
        // var scrBoardInt = document.createElement("li");
        // scrBoardInt.textContent = "Initials: " + usrScore.initials + " Score: " + usrScore.endScore;
        // console.log(scrBoardInt);
        // scoreboardLi.appendChild(scrBoardInt);
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
        if (answerBtnEl[ansBtnIndex].textContent !== "") {
            answerBtnEl[ansBtnIndex].style.display = "block"
        } else {
            answerBtnEl[ansBtnIndex].style.display = "none"
        }
     } 
    return randomNumber;
}


function answerCheck (x) {
    ansResultEl.textContent = x;
    if (x === "Correct"){
        ansResultEl.style.color = "green"
    } else {
    ansResultEl.style.color = "red"
    }
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
    newScore = [{
        initials: intlInput.value,
        endScore: score,
        }];
    showScrBoard()
    return;
    }

// Reset Variables
function restart () {
    secondsLeft = 90;
    main.style.display = "block";
    quiz.style.display = "none";
    submitForm.style.display = "none";
    scoreboard.style.display = "none";
    questionsAnswered = 0;
    score = 0;
    // Initialise Timer
    // secondsLeft = 90;
    timerEl.textContent = secondsLeft;
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

function clearLocalStorage () {
localStorage.clear();
newScore = [];
showScrBoard ();

return
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

// Initialise all variables and 
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
viewScoreEl.addEventListener('click', viewScoreboard);
clearBtn.addEventListener('click', clearLocalStorage)



