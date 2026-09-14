function myReplace(str, replace, newWord) {

  if (/^[A-Z]/.test(replace)) {
    newWord = newWord[0].toUpperCase() + newWord.slice(1);
  } else {
    newWord = newWord[0].toLowerCase() + newWord.slice(1);
  }

  return str.replace(replace, newWord);
}

console.log(myReplace("Hello my name is Yashfeen", "Yashfeen", "Kulsum"));