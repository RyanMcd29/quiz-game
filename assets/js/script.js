// Saved questions

// Start Button
var start = document.getElementById("start-button");
var main = document.getElementById("start-menu");
var quiz = document.getElementById("quiz-game");
var timerEl = document.getElementById("timer");
var secondsLeft = 90

function hideMenu() {
    main.style.display = "none";
    quiz.style.display = "block";
    }
    
function startTimer () {
    var timerInterval = setInterval(function(){
        secondsLeft --;
        timerEl.textcontent = secondsLeft + "seconds remaining.";
    }, 1000);
    }       

function startquiz () {
    hideMenu ();
    startTimer ();
    
    
}

start.addEventListener("click", startquiz);

//Write new question


// Submit Answer







// Save score to scoreboard
