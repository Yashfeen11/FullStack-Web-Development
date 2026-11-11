function sumPrimes(n){
   let dp = new Array(n + 1).fill(false);

  let sum = 0;

  for (let i = 2; i <= n; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    dp[i] = isPrime;

    if (dp[i]) {
      sum += i;
    }
  }

  return sum;
}

console.log(sumPrimes(10)); 