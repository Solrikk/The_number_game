var secretNumber = Math.floor(Math.random() * 100) + 1;
var remainingGuesses = 10;

function checkGuess() {
  var guess = parseInt(document.getElementById("guessInput").value);
  var result = document.getElementById("result");
  var guessHistory = document.getElementById("guessHistory");
  var remainingGuessesElement = document.getElementById("remainingGuesses");

  if (guess === secretNumber) {
    result.innerHTML = "Congratulations, you guessed the number!";
    result.style.color = "green";
    document.getElementById("guessInput").disabled = true;
    document.getElementById("checkButton").disabled = true;
  } else if (guess < secretNumber) {
    result.innerHTML = "The secret number is higher than " + guess + ".";
    result.style.color = "red";
  } else {
    result.innerHTML = "The secret number is lower than " + guess + ".";
    result.style.color = "red";
  }

  guessHistory.innerHTML += guess + ", ";
  remainingGuesses--;
  remainingGuessesElement.innerHTML = remainingGuesses;

  if (remainingGuesses === 0) {
    result.innerHTML = "Game over. You didn't guess the number. The secret number was " + secretNumber + ".";
    result.style.color = "red";
    document.getElementById("guessInput").disabled = true;
    document.getElementById("checkButton").disabled = true;
  }
}