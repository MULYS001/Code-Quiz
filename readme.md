# Week 4 Homework: Web API's Code Quiz

## User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

For my reference:
https://codepen.io/Lyarz/pen/QWNxqGL?editors=1011 //Avi demo on interval timers
https://www.youtube.com/watch?v=rFWbAj40JrQ&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=2

Quiz Questions: https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS 


Required:
Start button
Questions
  for each question: indicator of correct or incorrect
    for incorrect - subtract time from clock
    for correct - add to score 
      local storage
End = all questions answered or timer reaches zero
  then 
    display score
    inputs for initials
    both submit 

Need starting time, then logic to count down & subtract time from clock
