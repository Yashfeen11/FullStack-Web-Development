function pyramid(pattern, rows, inverted) {
  let result = "\n";

  if (inverted === false) {
    for (let i = 1; i <= rows; i++) {
      let spaces = " ".repeat(rows - i);
      let symbols = pattern.repeat(2 * i - 1);

      result += spaces + symbols + "\n";
    }
  } else {
    for (let i = rows; i >= 1; i--) {
      let spaces = " ".repeat(rows - i);
      let symbols = pattern.repeat(2 * i - 1);

      result += spaces + symbols + "\n";
    }
  }

  return result;
}