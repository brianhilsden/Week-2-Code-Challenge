function primeNumbers(arr) {
  const primeNumbersArray = arr.filter((num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  });
  return primeNumbersArray;
}
console.log(primeNumbers([12, 19, 97, 17]));
