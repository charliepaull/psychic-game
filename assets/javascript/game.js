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
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var guessLetters = [];
var computerLetter = null;
var guessesLeft = 9;
var userGuess;


var wins = 0;
var losses = 0;

// Chapter 2: Functions for our Application
// We will create 3 functions:
    // update guesses
    // updates guessesLeft
    // update guessesSoFar

    // grabbed guessesLeft variable to use for event function
var updateGuessesLeft = function() {
    document.querySelector("#guesses-left").innerHTML = "Guesses Left: " + guessesLeft;
}

var updateComputerLetter = function() { 
    computerLetter = letters[Math.floor(Math.random() * letters.length)];
}

var updateGuessesSoFar = function() {
    document.querySelector("#guesses-so-far").innerHTML = "Guesses so far: " + guessLetters.join(", ");
}

var reset = function() {
    guessesLeft = 9;
    guessLetters = [];
    updateGuessesLeft();
    updateComputerLetter();
    updateGuessesSoFar();
}

// // Chapter 3: onPage Load
reset();

// Chapter 4: Event Handling:
    // this is the function that captures the keyboard press down

document.onkeydown = function(event) { 
    // lowercases every user input
    userGuess = event.key.toLowerCase();
    //event.key.toLowerCase()

    // captures the event when the user presses on the keyboard
    guessLetters.push(userGuess);

    //User guesses the computer's letter correctly!
    if (userGuess === computerLetter) {
        alert("Congrats! You've guessed correctly!");
        wins++;
        document.querySelector('#wins').innerHTML = "Wins: " + wins;
        reset();
    } else {
        // Decrease the guesses variable by 1 for guessing incorrectly
        guessesLeft--;
        updateGuessesSoFar();
        updateGuessesLeft();
    
        if (guessesLeft === 0) {
        losses++;
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        reset();
    }}

    

    }
    //end of if/else statements regarding possible outcomes

    // Compare user guess & computer generated letter

    // Print values of variables onto page
    
    //wins
    
    //losses
   
