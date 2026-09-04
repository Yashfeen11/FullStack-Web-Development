function whatIsInAName(arrObj, src) {
  let srcKeys = Object.keys(src);

  let filtered = arrObj.filter((item) => {

    let isMatch = true;

    for (let i = 0; i < srcKeys.length; i++) {

      if (
        item[srcKeys[i]] !== src[srcKeys[i]]
      ) {
        isMatch = false;
      }

    }

    return isMatch;
  });

  return filtered;
}


console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
  )
);

console.log(
  whatIsInAName(
    [
      { apple: 1, bat: 2 },
      { bat: 2 },
      { apple: 1, bat: 2, cookie: 2 }
    ],
    { apple: 1, bat: 2 }
  )
);