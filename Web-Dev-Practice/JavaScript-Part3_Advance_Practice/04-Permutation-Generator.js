function permuteString(str, prefix = "", results = []) {
  if (str.length === 0) {
    results.push(prefix);
    return results;
  } else {
    for (let i = 0; i < str.length; i++) {
      let remaining = str.slice(0, i) + str.slice(i + 1);

      permuteString(remaining, prefix + str[i], results);
    }
  }

  return [...new Set(results)];
}

console.log(permuteString("cat"));
console.log(permuteString("fcc"));