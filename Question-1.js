const prompt = require("prompt-sync")({ sigint: true }); //Declares prompt variable to store prompt-sync function

//caseSwapper function that takes string input and returns new string with cases swapped for each letter
function caseSwapper(stringInput) {
  const stringArray = stringInput.split(" "); //Converts the string to an array to easier mapping

  const newStringArray = stringArray.map((word) => { //Maps through the array and returns array with letter cases swapped
    let newWord = []; //Empty array to store the case alternated letters
    for (const letter of word) {  //loops through each letter to check its case, alternate it, then push it to empty newWord array
      if (letter.toUpperCase() === letter) {
        newWord.push(letter.toLowerCase());
      } else {
        newWord.push(letter.toUpperCase());
      }
    }
    return newWord.join(""); //joins the letters in the newWord array to form a string/word then returns it to the newStringsArray
  });
  return newStringArray.join(" "); //joins the words in the array to form a string sentence if applicable then returns the value
}
const input = prompt("Enter string to be case shifted: "); //Prompts user to enter string input
console.log(`Result is: ${caseSwapper(input)}`); //Displays the case alternated output
