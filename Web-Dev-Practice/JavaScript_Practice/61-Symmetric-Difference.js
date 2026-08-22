function diffArray(arr1, arr2) {

  let filtered1 = arr1.filter((item) => {
    return !arr2.includes(item);
  });

  let filtered2 = arr2.filter((item) => {
    return !arr1.includes(item);
  });

  return filtered1.concat(filtered2);
}

console.log(
  diffArray(
    ["diamond", "stick", "apple"],
    ["stick", "emerald", "bread"]
  )
);