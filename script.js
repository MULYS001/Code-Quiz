$(document).ready(function () {

  var questionIndex = 0;
  var counter = 0;
  var interval = -1;

  start();
  renderQuestion();
  setStorage();
  getScore();
  playAgain();

  function start() {
    $("#start-btn").click(function () {
      $("#home").hide();
      $("#questions").show();
      $("#listScores").hide();
      startTiming();
    })
  }

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
      $("#listScores").hide();
      clearInterval(interval);
    } else {
      renderQuestion()
    }
  };

  // Function to set the user Score into Storage
  var scoresList = [];

  function setStorage() {
    $("#save").on("click", function (event) {
      event.preventDefault();
      newScore = {
        scoreName: $("#userName").val(),
        scores: $("#final-score").text(),
      }
      console.log(newScore)

      var retrievedScore = JSON.parse(localStorage.getItem("scores", scoresList)) || [];
      console.log(retrievedScore);
      retrievedScore.push(newScore);

      localStorage.setItem("scores", JSON.stringify(retrievedScore))
    })
  }

  // Function to  list the scores saved
  function getScore() {
    $("#viewScores").on("click", function (event) {
      event.preventDefault();
      $("#listScores").show();
      retrievedScore = JSON.parse(localStorage.getItem("scores", scoresList));
      console.log(retrievedScore)
      for (var i = 0; i < retrievedScore.length; i++) {
        $("#scoresList").append("<li>" + retrievedScore[i] + "</li>");
      }
    })
  }

  // Function to play again
  function playAgain() {
    $("body").on("click", "#play-btn", function () {
      questionIndex = 0;
      counter = 0;
      interval = -1;
      $("#count").text(counter),
        $("#results").hide(),
        $("#home").show();
    })
  };


  $("#questions").hide(),
    $("#results").hide(),
    $("#listScores").hide(),
    $("#ans-a").click(answerClicked);
  $("#ans-b").click(answerClicked);
  $("#ans-c").click(answerClicked);
  $("#ans-d").click(answerClicked);

})