const startButton = document.querySelector("#start-btn");
const submitButton = document.querySelector("#submitBtn");
const questionMainEl = document.querySelector(".question-container");
const questionEl = document.querySelector("#question");
const answerEl = document.querySelector("#answer");

var questionNumber = -1;
var answer;

startButton.addEventListener("click", startQuiz);
// submitButton.addEventListener("click", submitScores);

function startQuiz() {
  document.querySelector(".home").classList.add('d-none');
  document.querySelector(".controls").classList.remove('d-none');
  console.log("Started")
  score = 0;
  };

function nextQuestion() {
  questionNumber++;
  answer = questions[questionNumber].answer
  questionEl.textContent = questions[questionNumber].title;
  answerEl.innerHTML = "";

  var choices = questions[questionNumber].title;

  for (var q = 0; q = choices.length; q++) {
    var nextChoice = document.createElement("button");
    nextChoice.textContent = choices[q];
    answer
  };



function answer() {

}

// function submitScores() {

}
startQuiz()
nextQuestion()