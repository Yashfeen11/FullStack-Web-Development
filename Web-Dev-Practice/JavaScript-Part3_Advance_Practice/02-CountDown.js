function countdown(number) {
  let countArray = [];

  if (number < 1) {
    return [];
  } 
  else {
    countArray.push(number);
    countArray = countArray.concat(countdown(number - 1));
    return countArray;
  }
}

console.log(countdown(5));