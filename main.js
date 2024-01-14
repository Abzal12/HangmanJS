// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')
const words = ['python', 'java', 'swift', 'javascript'];
let index = Math.floor(Math.random() * words.length);
let rightWord = words[index];

let winNum = 0;
let loseNum = 0;
console.log("H A N G M A N");

while (true) {
    let playerChoice = input("Type \"play\" to play the game, \"results\" to show the scoreboard, and \"exit\" to quit: ");
    console.log();
    switch (playerChoice) {
        case "play":
            play();
            break;
        case "results":
            showResults();
            break;
        case "exit":
            return;
        default:
            console.log("Something goes wrong");
    }
}


function play() {
    let rightWordWithHyphens = "-".repeat(rightWord.length);
    let rightWordWithHyphensArr = rightWordWithHyphens.split("");
    let attempts = 8;
    let hasFinished = false;
    let guessedLetters = [];
    while (attempts > 0 && !hasFinished) {

        console.log(rightWordWithHyphens);
        let guessingLetter = input('Input a letter: ');

        if (guessingLetter.length !== 1) {
            console.log("Please, input a single letter.");
            continue;
        } else if (!(/[a-z]/.test(guessingLetter))) {
            console.log("Please, enter a lowercase letter from the English alphabet.");
            continue;
        }

        if (rightWordWithHyphens.includes(guessingLetter) || guessedLetters.includes(guessingLetter)) {
            console.log("You've already guessed this letter.");
        } else if (rightWord.includes(guessingLetter)) {
            for (let i = 0; i < rightWord.length; i++) {
                if (rightWord[i] === guessingLetter) {
                    rightWordWithHyphensArr[i] = guessingLetter;
                }
            }
        } else if (!rightWord.includes(guessingLetter)) {
            attempts--;
            console.log("That letter doesn't appear in the word.");
            guessedLetters.push(guessingLetter);
        }
        rightWordWithHyphens = rightWordWithHyphensArr.join("");

        if (!rightWordWithHyphens.includes("-")) {
            console.log();
            console.log(rightWordWithHyphens);
            console.log("You guessed the word " + rightWord + "!");
            console.log("You survived!")
            console.log("Thanks for playing!");
            winNum++;
            hasFinished = true;
        } else if (attempts === 0) {
            console.log("You lost!");
            console.log("Thanks for playing!");
            loseNum++
        }
        console.log();
    }
}

function showResults() {
    console.log(`You won: ${winNum} times.
You lost: ${loseNum} times.`)
}

