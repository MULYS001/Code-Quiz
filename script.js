const startButton = document.querySelector("#start-btn");
const submitButton = document.querySelector("#submitBtn");
const questionEl = document.querySelector("#question");
const answerEl = document.querySelector("#answer");

var questionNumber = 0;
var answer;
var choices = [questions[choices]];

document.querySelector(".home").classList.remove('d-none');
document.querySelector(".controls").classList.add('d-none');
document.querySelector(".scores").classList.add('d-none');

startButton.addEventListener("click", startQuiz);

availableQuestions = [...questions];
console.log(availableQuestions);

function startQuiz() {
  document.querySelector(".controls").classList.remove('d-none');
  document.querySelector(".home").classList.add('d-none');
  document.querySelector(".scores").classList.add('d-none');
  console.log("Started")
  score = 0;
  firstQuestion();
};


function firstQuestion() {
  questionEl.textContent = questions[questionNumber].title;
  answerEl.textContent = [questions[questionNumber]].choices;
  
    for (var i = 0; i < choices.length; i++) {
    var answer = choices[i];
    var li = document.createElement("li");
    li.textContent = answer;
    answerEl.appendChild(li);
  }
}

function nextQuestion() {
 questionNumber++;


  }
