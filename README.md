# psychic-game
easier hw3 - psychic game


Instructions:
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