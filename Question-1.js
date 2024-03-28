const prompt = require("prompt-sync")({ sigint: true });

function caseSwapper(stringInput) {
  const stringArray = stringInput.split(" ");

  const newStringArray = stringArray.map((word) => {
    let newWord = [];
    for (const letter of word) {
      if (letter.toUpperCase() === letter) {
        newWord.push(letter.toLowerCase());
      } else {
        newWord.push(letter.toUpperCase());
      }
    }
    return newWord.join("");
  });
  return newStringArray.join(" ");
}
const input = prompt("Enter string to be case shifted: ");
console.log(`Result is: ${caseSwapper(input)}`);
