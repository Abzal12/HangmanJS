// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')
const words = ['python', 'java', 'swift', 'javascript'];
let index = Math.floor(Math.random() * words.length);
let rightWord = words[index];

console.log("H A N G M A N");
console.log();
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
        hasFinished = true;
    } else if (attempts === 0) {
        console.log("You lost!");
        console.log("Thanks for playing!");
    }
    //console.log("attepts: " + attempts);
    console.log();
}

