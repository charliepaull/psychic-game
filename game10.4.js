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
    updateGuessesSoFar = " ";
    updateGuessesLeft();
    computerLetter();
}

// // Chapter 3: onPage Load
// updateGuessesLeft();
// updateComputerLetter();
// updateGuessesSoFar();

// Chapter 4: Event Handling:
    // this is the function that captures the keyboard press down

// reset();

document.onkeydown = function(event) {
    
    // lowercase every user input
    letter = String.fromCharCode(event.which).toLowerCase();

    // captures the event when the user presses on the keyboard
    guessLetters = event.key;


    for (var i = 0; i < letter.length; i++) {
        letter[i] = guessLetters[i]
    }

    // **.push() below currently isn't working and is breaking my code**
    // letter.push(guessLetters);

    // Compare user guess & computer generated letter

    //User guesses the computer's letter correctly!
    if (guessLetters === computerLetter) {
        alert("Congrats! You've guessed correctly!");
        wins++;
        reset;
    }
    else {
    // Decrease the guesses variable by 1 for guessing incorrectly
    guessesLeft--;
    reset;  
    }
    if (guessesLeft === 0) {
        losses++;
        reset;
    }
    //end of if/else statements regarding possible outcomes

    // Print values of variables onto page
    
    //wins
    document.querySelector('#wins').innerHTML = "Wins: " + wins;
    //losses
    document.querySelector('#losses').innerHTML = "Losses: " + losses;
}

/*Current Problems:
    guessesLeft isn't resetting after 9.
    guessesSoFar has disappeared off page.
    guessesSoFar isn't displaying user's current guesses.
        should I be using a for loop that loops & prints each item onto the page?
    Reset is not working.
    game isn't randomizing a new number during a reset.
    all keys on keyboard are counting towards guessing.
*/