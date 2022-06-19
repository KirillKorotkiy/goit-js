function getEvenNumbers(start, end) {
  // Change code below this line
  let newArray = [];
  let array = [];
  for (let i = start; i <= end; i += 1) {
    newArray.push(i);
  }
  console.log(newArray);
  for (let i = 0; i < newArray.length; i += 1) {
    let number = newArray[i];
    if (number % 2 === 0) {
      array.push(newArray[i]);
    }
  }
  return array;
}

console.log(getEvenNumbers(2, 14));
