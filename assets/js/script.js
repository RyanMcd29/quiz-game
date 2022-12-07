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
    },

    {
        question: "Mr fantastic:",
        answer1: "Deezus",
        answer2: "Nuttus",
        answer3: "Ryan",
        answer4: "Jim",
        correctAns: "Deezus",
    },

    {
        question: "Mr cool:",
        answer1: "my secretary",
        answer2: "bigdog",
        answer3: "Ryan",
        answer4: "Jim",
        correctAns: "bigdog",
    },

    {   
        question: "My name is:",
        answer1: "almomd",
        answer2: "Jacob",
        answer3: "kyre",
        answer4: "Jim",
        correctAns: "Ryan",
    },
];

// function saveQuestions () {
//     var questions = [
        
//         {
//             question: "My name is:",
//             answer1: "Ben",
//             answer2: "Jacob",
//             answer3: "Ryan",
//             answer4: "Jim",
//             correctAns: "Ryan",
//         },

//         {
//             question: "My favourite food:",
//             answer1: "Chocolate",
//             answer2: "Icecream",
//             correctAns: "Icecream",
//         },

//         {
//             question: "Mr fantastic:",
//             answer1: "Deezus",
//             answer2: "Nuttus",
//             answer3: "Ryan",
//             answer4: "Jim",
//             correctAns: "Deezus",
//         },

//         {
//             question: "Mr cool:",
//             answer1: "my secretary",
//             answer2: "bigdog",
//             answer3: "Ryan",
//             answer4: "Jim",
//             correctAns: "bigdog",
//         },

//         {   
//             question: "My name is:",
//             answer1: "almomd",
//             answer2: "Jacob",
//             answer3: "kyre",
//             answer4: "Jim",
//             correctAns: "Ryan",
//         },
//     ]
//     return;
// }

var randomNumber;
var score = '0';
var questionsAnswered = 0; 

// Start Button 
var start = document.getElementById("start-button");

// Game Sections
var main = document.getElementById("start-menu");
var quiz = document.getElementById("quiz-game");
var submitForm = document.getElementById("submit-result")

// Answer Buttons
var questionBox = document.getElementById("question");
var ansBtn1 = document.getElementById("answer1");
var ansBtn2 = document.getElementById("answer2");
var ansBtn3 = document.getElementById("answer3");
var ansBtn4 = document.getElementById("answer4");

// Timer
var timerEl = document.getElementById("timer");

// Start game
function hideMenu() {
    main.style.display = "none";
    quiz.style.display = "block";
    };

// Clear questions and answers
function clearQuestion (){
    questionBox.textContent = ""
    ansBtn1.textContent = ""
    ansBtn2.textContent = ""
    ansBtn3.textContent = ""
    ansBtn4.textContent = ""
return;
}

// Write new questions and answers
function writequestion (randomNumber){
questionBox.textContent = questions[randomNumber].question;
ansBtn1.textContent = questions[randomNumber].answer1;
ansBtn2.textContent = questions[randomNumber].answer2;
ansBtn3.textContent = questions[randomNumber].answer3;
ansBtn4.textContent = questions[randomNumber].answer4;
return;
}

// End game 
function endGame() {
    main.style.display = "none";
    quiz.style.display = "none";
    submitForm.style.display = "block";
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

        if (timerInterval = 0) {
            
        }

    }, 1000);
}
    

//Write new questions
function loadQuestion () {
    // Clear questions and answers
    // questionBox.textContent = ""
    // ansBtn1.textContent = ""
    // ansBtn2.textContent = ""
    // ansBtn3.textContent = ""
    // ansBtn4.textContent = ""
    clearQuestion ();
    // Load new question and answer set
    randomNumber = Math.floor(Math.random() * questions.length);
    writequestion (randomNumber);
    //Write new question and answers
    // questionBox.textContent = questions[randomNumber].question;
    // ansBtn1.textContent = questions[randomNumber].answer1;
    // ansBtn2.textContent = questions[randomNumber].answer2;
    // ansBtn3.textContent = questions[randomNumber].answer3;
    // ansBtn4.textContent = questions[randomNumber].answer4;

    // var answerBtn = document.querySelectorAll("#answer-list button")
    return randomNumber;
}

// Answer question
function answerQuestion () {
    console.log(questions[randomNumber].correctAns);
    var chosenAns = event.target.textContent;
    console.log(chosenAns)

// Check Answer, add score if correct, remove time if incorrect
   if (chosenAns === questions[randomNumber].correctAns) {
        score++
   } else {
    timerEl.textContent = timerEl.textContent - 10;
   }

   questionsAnswered++

   // Remove Question From Pool
   questions.splice(randomNumber, 1);
   console.log(questions)

   if (questionsAnswered < 5) {
    // Load next question
    loadQuestion ();
   } else {
    endGame();
   }
   // Remove question from pool

   // Load next question

}

function startquiz () {
    hideMenu ();
    startTimer ();
    loadQuestion ();
return;
}


// Make each answer button a clickable element
// var answerBtn = document.querySelectorAll('#answer-list button')
// console.log(answerBtn)

// for (var i = 0; i < answerBtn.length; i++) {
//    document.answerBtn.a
// }







// Event listeners
start.addEventListener('click', startquiz);
ansBtn1.addEventListener('click', answerQuestion);
ansBtn2.addEventListener('click', answerQuestion);
ansBtn3.addEventListener('click', answerQuestion);
ansBtn4.addEventListener('click', answerQuestion);

// answerBtn.addEventListener('click', answerQuestion);




//Write new question


// Submit Answer

// Save score to scoreboard