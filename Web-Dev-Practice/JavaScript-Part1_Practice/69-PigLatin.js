function translatePigLatin(str) {
  // Case 1: word starts with a vowel
  if (/^[aeiou]/i.test(str)) {
    return str + "way";
  }
  // Case 2: word starts with consonant(s)
  const consonants = str.match(/^[^aeiou]+/i);

  if (consonants) {
    return str.slice(consonants[0].length) + consonants[0] + "ay";
  }

  // Case 3: no vowels
  return str + "ay";
}