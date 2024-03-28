function arrayGenerator(x, y) {
  let newArray = [];
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
console.log(arrayGenerator(-1, 9));
