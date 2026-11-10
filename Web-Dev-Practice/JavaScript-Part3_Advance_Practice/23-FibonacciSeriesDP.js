function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  let sequence = [0, 1];

  for (let i = 2; i <= n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }

  return sequence[n];
}

console.log(fibonacci(15)); // 610