const randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
  const guess = Number(document.getElementById("guess").value);
  const message = document.getElementById("message");

  if (guess === randomNumber) {
    message.textContent = "🎉 Correct! You guessed the number.";
  } else {
    message.textContent = "❌ Wrong guess. Try again.";
  }
}
