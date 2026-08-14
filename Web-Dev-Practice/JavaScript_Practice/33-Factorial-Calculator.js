let num =4;
function factorialCalculator(num){
  let result = 1;
  for( let i =1 ; i<=num; i++){
    result = i*result;
  }
  return result;
}
let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);