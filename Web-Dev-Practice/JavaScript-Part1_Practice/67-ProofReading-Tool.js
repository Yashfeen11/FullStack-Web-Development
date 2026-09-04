function isPalindrome(word) {
  let newWord = word.toLowerCase();
  let reverseWord = newWord.split("").reverse().join("");

  if (newWord === reverseWord) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("hello"));


function findPalindromeBreaks(words) {
  let newArr = [];

  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      newArr.push(i);
    }
  }

  return newArr;
}

console.log(findPalindromeBreaks(["the", "cat", "sat", "the", "cat"]));


function findRepeatedPhrases(words, phraseLength) {
  let result = [];

  if (phraseLength >= words.length) {
    return result;
  }

  for (let i = 0; i <= words.length - phraseLength; i++) {

    for (let j = i + 1; j <= words.length - phraseLength; j++) {

      let same = true;

      for (let k = 0; k < phraseLength; k++) {

        if (words[i + k] !== words[j + k]) {
          same = false;
          break;
        }

      }

      if (same) {
        result.push(i);
        result.push(j);
      }
    }
  }

  return result;
}


function analyzeTexts(texts, phraseLength) {
  let result = [];

  for (let i = 0; i < texts.length; i++) {

    let obj = {
      repeatedPhrases: findRepeatedPhrases(texts[i], phraseLength),
      palindromeBreaks: findPalindromeBreaks(texts[i])
    };

    result.push(obj);
  }

  return result;
}