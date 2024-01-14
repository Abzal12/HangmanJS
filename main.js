// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')
const words = ['python', 'java', 'swift', 'javascript'];
let index = Math.floor(Math.random() * words.length);
let rightWord = words[index];
let hint = rightWord.slice(0, 3) + '-'.repeat(rightWord.length - 3);

let guessingWord = input(`Guess the word ${hint}: `);
if (guessingWord === rightWord) {
    console.log("You survived!");
} else {
    console.log("You lost!");
}