/* Psuedo Code:
how does this game work?
    1. the computer chooses a letter randomly from the alphabet.
    2. the user guesses a letter in the alphabet.
    3. computer is alerted a key has been pressed by the user: document.onkeyup = function () {}
    4. IF:
        user guess = computer letter:
            add +1 to wins column
            reset "guesses left" to 9
            clear "your guesses so far"
        user guess != computer letter:
            subtract 1 from "guesses left"
            keep guesses on screen until all 9 are used up
        WHEN:
            all 9 guesses are used up: 
                add +1 to losses column
                reset "guesses left" to 9
                clear "your guesses so far"

Variables needed:
    1. computerGuess - storing the computer's guessed variable
    2. userGuess - storing the user's letter guess
    3. wins - user guesses the letter correctly
    4. losses - user runs out of guesses
    5. currentGuesses - current guesses for using during this round
*/

// Chapter 1: Variable Initialization
var letters = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
var guessLetters = [];
var letterToGuess = null;
var guessesLeft = 9;

var wins = 0;
var losses = 0;

// Chapter 2: Functions for our Application
// We will create 3 functions:
    // update guesses
    // updates guessesLeft
    // update guessesSoFar

var updateGuessesLeft = function() {
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
}

var updateLetterToGuess = function() {
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
}

var updateGuessesSoFar = function() {
    document.querySelector("#guesses-so-far").innerHTML = guessLetters.join(", ");
}

var reset = function() {
    guessesLeft = 9;
    guessLetters = [];
    updateGuessesLeft();
    updateLetterToGuess();
    updateGuessesSoFar();
}

// Chapter 3: onPage Load
updateGuessesLeft();
updateLetterToGuess();[]

// Chapter 4: Event Handling:
    // this is the function that captures the keyboard press down
document.onkeydown = function(event) {
    
    // lowercase every user input
    var letter = String.fromCharCode(event.which).toLowerCase();

    // captures the event when the user presses on the keyboard
    guessLetters = event.key;

    // Compare user guess & computer generated letter
    if (guessLetters === updateLetterToGuess) {
        alert("Congrats! You've guessed correctly!");
        wins++;
    }
    else {
    // Decrease the guesses variable by 1 for every time the user pushes down on their keyboard
    guessesLeft--;
    }
    if (guessesLeft === 0) {
        loses--;
    } 
    
}
        
    // print user's guess into empty array on page
    updateGuessesSoFar.innerHTML;

}