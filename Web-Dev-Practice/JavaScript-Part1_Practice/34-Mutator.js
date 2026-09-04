function mutation(arr) {
  let arr1 = arr[0].toLowerCase();
  let arr2 = arr[1].toLowerCase();

  for (let j = 0; j < arr2.length; j++) {
    let found = false;

    for (let i = 0; i < arr1.length; i++) {
      if (arr2[j] === arr1[i]) {
        found = true;
        break;
      }
    }

    if (found === false) {
      return false;
    }
  }

  return true;
}

console.log(mutation(["hello", "Hello"]));
console.log(mutation(["hello", "hey"]));
console.log(mutation(["Alien", "line"]));