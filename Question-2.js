const prompt = require("prompt-sync")({ sigint: true }); //Declares prompt variable to store the prompt-sync function

//function takes in two number parameters and returns an array of the numbers between the parameters
function arrayGenerator(x, y) {
  let newArray = []; //empty array to store number

  //Conditionals to first check which is the larger number, then loop through the numbers between them and push them to newArray
  if (x < y) {
    for (let i = x; i <= y; i++) {
      newArray.push(i);
    }
    return newArray;
  } else {
    for (let i = y; i <= x; i++) {
      newArray.push(i);
    }
    return newArray;
  }
}
console.log("Enter numbers between which you want to generate an array of numbers"); //Display welcome message
const num1=parseInt(prompt("First number: ")); //Gets first user input
const num2=parseInt(prompt("Second number: ")) //Gets second user input

/*Since the function returns an empty array if user entered an input that is not a number, we can use that in a conditional statement to ask user to enter valid numbers*/
if (arrayGenerator(num1,num2)[0]){
  console.log(arrayGenerator(num1, num2));
}
else{
  console.log("Kindly Enter valid numbers");
}

