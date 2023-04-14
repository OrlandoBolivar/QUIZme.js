
window.onload = function () {

// Selects element by class
var timeEl = document.querySelector(".time")
// Selects element by id
var mainEl = document.getElementById("main");
var secondsLeft = 60;
var timerEl = document.querySelector(".timer")
var questionEl = document.querySelector(".questionary")
var answerDivEl = document.querySelector(".answers")
// var choicesEl = document.getElementById("optionChoice")

function setTime() {

    timeEl.setAttribute("class","hide")
    displayQuestions()
  // Sets interval in variable
 setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds left until the quiz ends.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to end quiz
      saveScore();
    }

  }, 1000);
}

function saveScore() {
  timeEl.textContent = " ";
  var quizEnd = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

function displayQuestions() {
    var count = 0
    var currentQuestion = setOfQuestions[count]
    questionEl.textContent= currentQuestion.question
    for(var i=0; i<currentQuestion.choices.length; i++){
        var optionEl = document.createElement("button")
        optionEl.textContent = currentQuestion.choices[i]
        optionEl.setAttribute("id", "optionChoice")
        answerDivEl.appendChild(optionEl)
        // optionEl.addEventListener("click", displayQuestions)
    }
    
    count++;
}

//erase the contents of the answer div remove children metho
function afterQuestion() {

}

// QUESTIONARY

    var containerQuestions = document.getElementsByClassName('QUIZme')[0],
        displayedAnswers = document.getElementsByClassName ('answers')[0],
        answerReviewer = document.getElementsByClassName ('answercheck')[0]

        // object containing questions that will be display on QUIZme
        setOfQuestions = [
            {
                question: "What type of elements JavaScript is useful for?",
                choices: ['Static','Repetitive','Dinamic'],
                answer: "Dinamic"
            },
            {
                question: "second question",
                choices: ['Static','Repetitive','Dinamic'],
                answer: "Dinamic"
            },
            {
                question: "third question",
                choices: ['Static','Repetitive','Dinamic'],
                answer: "Dinamic"
            }
        ]
    // Generally, it is a transformation of functions.So, it translates a function from callable likef(a, b, c) to f(a)(b)(c) .
    // function displayQuestions(curr)
    // var questions = Object.keys(setOfQuestions)[curr];

    // choicesEl.addEventListener("click", displayQuestions)
    timeEl.addEventListener('click',setTime)

    function saveLastGrade() {
        // save related form of dat as an object
        var quizMeTaker = {
            testTaker: testTaker.value.trim(),
            score: score.value.trim (),
        }
    }    
    
    localStorage.setItem("quizMeTaker", JSON.stringify(quizMeTaker));
    function renderLastGrade() {
        var lastScore = JSON.parse(localStorage.getItem("quizMeTaker"));

        if (lastScore !== null) {
            document.getElementsByName("saved-name").innerHTML = lastScore.testTaker;
        }
    }
    console.log(renderLastGrade)
    
}

