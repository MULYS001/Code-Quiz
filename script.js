var questionIndex = 0;
var counter = 0;
var interval = -1;

function start() {
$("#start-btn").click(function () {
  $("#home").hide();
  $("#questions").show();
  startTiming();
})}

function startTiming() {
  $("#count").text(counter);
  interval = setInterval(function () {
    counter++;
    $("#count").text(counter);
  }, 1000);
}

function renderQuestion() {
  var currentQuestion = questions[questionIndex];
  $("#question").text(currentQuestion.title);
  $("#ans-a").text(currentQuestion.choices[0]);
  $("#ans-b").text(currentQuestion.choices[1]);
  $("#ans-c").text(currentQuestion.choices[2]);
  $("#ans-d").text(currentQuestion.choices[3]);
}

// function that determines if the answer selected is correct, if not adds 10 seconds to score
function answerClicked(event) {
  event.preventDefault();

  if (questions[questionIndex].answer != $(this).data("index")) {
   
    //  for the wrong answer:
    counter += 10;
  }

  // Display next question
  questionIndex++;

  if (questionIndex >= questions.length) {
    $("#final-score").text(counter);
    $("#results").show();
    $("#questions").hide();
    clearInterval(interval);
  } else {
    renderQuestion()
  }
}
// Function to set the user Score into Storage
function setStorage() {
$("#save").click(function (event) {
  event.preventDefault();
  localStorage.setItem("scoreName", document.getElementById("userName").value);
  localStorage.setItem("score", counter);
})
}

start();
renderQuestion();
setStorage();
$("#questions").hide();
$("#results").hide();
$("#ans-a").click(answerClicked);
$("#ans-b").click(answerClicked);
$("#ans-c").click(answerClicked);
$("#ans-d").click(answerClicked);
