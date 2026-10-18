function countDigits(n) {
  if (n < 10) return 1;

  return 1 + countDigits(Math.floor(n / 10));
}

console.log(countDigits(4567));