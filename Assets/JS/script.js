
window.onload = function () {

// Selects element by class
var timeEl = document.querySelector(".time")
// Selects element by id
var mainEl = document.getElementById("main");
var secondsLeft = 60;
var timerEl = document.querySelector(".timer")
var questionEl = document.querySelector(".questionary")
var answerDivEl = document.querySelector(".answers");
var finalAnswerEl = document.querySelector(".finalAnswer");
// var choicesEl = document.getElementById("optionChoice")
var timerInterval;

function setTime() {

    // timeEl.setAttribute("class","hide")
    displayQuestions()
  // Sets interval in variable
  timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds left until the quiz ends.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      // Calls function to end quiz
      saveScore();
    }

  }, 1000);
}


function saveScore() {
    clearInterval(timerInterval);

  timeEl.textContent = " ";
  var quizEnd = document.createElement("p");
  quizEnd.textContent = "Your Final Score is = " + secondsLeft;
  finalAnswerEl.appendChild(quizEnd);

}

function analyseAnswer(event) {
// we need to determine if the user chose correct answer or not
// if the user chose  wrong answer, secondsLeft should be decremented by 10 seconds
var btnEl = event.target;

if (btnEl.textContent  !== currentQuestion.answer) {
    alert("Oops, wrong answer");
    secondsLeft -= 10;
    timerEl.textContent = secondsLeft + " seconds left until the quiz ends.";
} else {
    alert( "Correct Answer!");
}
count ++;
if ( count === setOfQuestions.length || secondsLeft <= 0) {
    saveScore();
} else {
    displayQuestions();
}

}

  var count = 0;
  var currentQuestion;

function displayQuestions() {
    console.log("displayQuestions - count = ", count);
    currentQuestion = setOfQuestions[count]
    answerDivEl.innerHTML = "";
    questionEl.textContent= currentQuestion.question
    for(var i=0; i<currentQuestion.choices.length; i++){
        var optionEl = document.createElement("button")
        optionEl.textContent = currentQuestion.choices[i]
        optionEl.setAttribute("id", "optionChoice")
        answerDivEl.appendChild(optionEl)
        optionEl.addEventListener("click", analyseAnswer)
    }
    
  //  count++;
}

//erase the contents of the answer div remove children metho
function afterQuestion() {
    currentQuestion.removeChild(currentQuestion.optionEl);
   
}

// QUESTIONARY

var containerQuestions = document.getElementsByClassName('QUIZme')[0];
var displayedAnswers = document.getElementsByClassName ('answers')[0];
var answerReviewer = document.getElementsByClassName ('answercheck')[0];

        // object containing questions that will be display on QUIZme
        setOfQuestions = [
            {
                question: "Commonly used data types DO NOT include:",
                choices: ["1.strings", "2.booleans", "3.alerts", "4.numbers"],
                answer: "1.strings",
            },
            {
                question: "The condition in an if / else statement is enclosed within ____.",
                choices: ["1.numbers and strings", "2.other arrays", "3.booleans", "4.all of the above"],
                answer: "4.all of the above"
            },
            {
                question: "A very useful tool used during development and debugging for printing content to the debuger is:",
                choices: ["1.JavaScript", "2.terminal / bash", "3.for loops", "4.console.log"],
                answer: "4.console.log"
            }
        ]
    // Generally, it is a transformation of functions.So, it translates a function from callable like f(a, b, c) to f(a)(b)(c) .
    // function displayQuestions(curr){
    // var questions = Object.keys(setOfQuestions)[curr];
    // console.log(questions);

    // }

    // choicesEl.addEventListener("click", displayQuestions)
    timeEl.addEventListener('click',setTime) 


            
    

    function saveLastGrade() {
        // save related form of dat as an object
        var quizMeTaker = {
            testTaker: testTaker.value.trim(),
            score: score.value.trim (),
        }
     parse(saveLastGrade, quizMeTaker), 

    localStorage.setItem("quizMeTaker", JSON.stringify(quizMeTaker));

    }
    function renderLastGrade() {
        var lastScore = JSON.parse(localStorage.getItem("quizMeTaker"));

        if (lastScore !== null) {
            document.getElementsByName("saved-name").innerHTML = lastScore.testTaker;
        }
    }
    console.log(renderLastGrade)
}