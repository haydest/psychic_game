var wins = 0;
var losses = 0;
var guessesLeft = 7;
var guesses = [];

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");
var guessesSoFar = document.getElementById("guesses-so-far");

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


function resetGame() {
  guessesLeft = 7;
  guesses = "";
};

document.onkeyup = function(event) {
  var userGuess = event.key;
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  console.log(computerGuess);
  console.log(userGuess);
    if (userGuess === computerGuess) {
      wins++;
      
    }
    else {
        guesses.push(userGuess);
        guessesLeft--;
    }
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    guessesText.textContent = "guesses left: " + guessesLeft;
    guessesSoFar.textContent = "guesses so far: " + guesses;
   
}