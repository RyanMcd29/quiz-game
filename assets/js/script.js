// Saved questions

var questions = [
    {
    question: "Who is deezus",
    answer1: "nuttus",
    answer2: "Meganut",
    answer3: "crumb",
    answer4: "rab",
    },

    {question: "Crab of the week",
    answer1: "Me",
    answer2: "You",
    }

]


// Start Button 
var start = document.getElementById("start-button");
var main = document.getElementById("start-menu");
var quiz = document.getElementById("quiz-game");


// Start game
function hideMenu() {
    main.style.display = "none";
    quiz.style.display = "block";
    };

// Start timer
function startTimer () {
    var timerEl = document.getElementById("timer");
    var secondsLeft = 90
    var timerInterval = setInterval(function(){
        secondsLeft --;
        timerEl.textcontent = secondsLeft + "seconds remaining.";
    }, 1000);
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
    var randomNumber = Math.floor(Math.random()*questions.length);

    //Write new question and answers
    q.textContent = questions[randomNumber].question;
    ans1.textContent = questions[randomNumber].answer1;
    ans2.textContent = questions[randomNumber].answer2;
    ans3.textContent = questions[randomNumber].answer3;
    ans4.textContent = questions[randomNumber].answer4;

    // Remove question from array
    delete questions[randomNumber]

    }
function startquiz () {
    hideMenu ();
    startTimer ();
    loadQuestion ();
    
    
}

start.addEventListener("click", startquiz);

//Write new question


// Submit Answer







// Save score to scoreboard
