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
while (attempts > 0) {
    rightWordWithHyphens = rightWordWithHyphensArr.join("");
    console.log(rightWordWithHyphens);
    let guessingLetter = input('Input a letter: ');
    attempts--;


    if (rightWordWithHyphens.includes(guessingLetter)) {

    } else if (rightWord.includes(guessingLetter)) {
        for (let i = 0; i < rightWord.length; i++) {
            if (rightWord[i] === guessingLetter) {
                rightWordWithHyphensArr[i] = guessingLetter;
            }
        }
    } else if (!rightWord.includes(guessingLetter)) {
        console.log("That letter doesn't appear in the word.");
    }
    console.log();
}

console.log("Thanks for playing!");