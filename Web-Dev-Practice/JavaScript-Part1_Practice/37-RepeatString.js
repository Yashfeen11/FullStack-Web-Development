function repeatStringNumTimes(str, num) {
  let repeat = [];

  for (let i = 0; i < num; i++) {
    repeat.push(str);
  }

  return repeat.join("");
}