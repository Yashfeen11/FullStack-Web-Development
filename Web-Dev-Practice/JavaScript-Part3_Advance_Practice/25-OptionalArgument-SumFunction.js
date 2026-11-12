function addTogether(a, b) {
  if (typeof a !== "number") {
    return undefined;
  }

  if (arguments.length === 2) {
    if (typeof b !== "number") {
      return undefined;
    }

    return a + b;
  }

  return function (secondNumber) {
    if (typeof secondNumber !== "number") {
      return undefined;
    }

    return a + secondNumber;
  };
}

console.log(addTogether(2, 3)); // 5
console.log(addTogether(23.4, 30)); // 53.4
console.log(addTogether("2", 3)); // undefined
console.log(addTogether(5, undefined)); // undefined

const sumTwoAnd = addTogether(2);
console.log(sumTwoAnd(3)); // 5
console.log(addTogether(2)([3])); // undefined