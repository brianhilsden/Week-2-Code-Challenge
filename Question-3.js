const prompt = require("prompt-sync")({ sigint: true }); //Declare vairiable to store prompt-sync function

//Function takes in array of numbers and returns an array with only prime numbers
function primeNumbers(array) {
  const primeNumbersArray = array.filter((num) => { //Filter through array to check prime numbers and store them

    /*Since prime numbers are only divisible by 1 and themselves, we loop through numbers between 2 and the number in question while attempting to get a 0 modulus between the numbers and the number in question. If modulus is 0, the number is not prime*/
    for (let i = 2; i < num; i++) { //
      if (num % i === 0) {
        return false;
      }
    }
    if (num === 1) { //Eliminates number 1 from the array as well
      return false;
    } else {         //returns true for all numbers that have not been eliminated by the conditions above hence adding to array
      return true;
    }
  });
  return primeNumbersArray; //returns the prime number array
}
let input; //declares input variable to store user input
let numbersArray = []; //declares empty array to be used to store array of user inputs
console.log("Kindly enter the numbers you want to add to your array for prime number checking. Enter 0 when you're done.");

//Continuously accept inputs while adding them to numbersArray until user enters 0, at which point it stops taking inputs
while (input != 0) { 
  input = parseInt(prompt("Enter number: "));
  if(isNaN(input)){
    console.log("Kindly enter valid number \n");
  }
  else{
    numbersArray.push(input);
  }
  
}
numbersArray.pop() //Remove the 0 we used to stop our loop
console.log(`The prime numbers are [${primeNumbers(numbersArray)}]`); //Pass array into the function and display result
