function steamrollArray(arr) {
  let result = [];

  function flatten(array) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        flatten(array[i]);
      } else {
        result.push(array[i]);
      }
    }
  }

  flatten(arr);

  return result;
}

console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));