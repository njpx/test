function isPalindrome(word) {
  if ("string" !== typeof word && word.length !== 0) {
    return false;
  }
  let wordLength = word.length;
  let firstWords;
  let lastWords;
  if (word.length % 2 === 0) {
    firstWords = word.substr(0, Math.floor(wordLength / 2) - 1);
    lastWords = word.substr(Math.floor(wordLength / 2) + 1);
  } else {
    firstWords = word.substr(0, Math.floor(wordLength / 2));
    lastWords = word.substr(Math.floor(wordLength / 2) + 1);
  }
  firstWordsSum = 0;
  lastWordsSum = 0;
  for (let i = 0; i < firstWords.length; i++) {
    firstWordsSum += firstWords
      .charAt(i)
      .toLowerCase()
      .charCodeAt(0);
  }
  for (let i = 0; i < lastWords.length; i++) {
    lastWordsSum += lastWords
      .charAt(i)
      .toLowerCase()
      .charCodeAt(0);
  }

  return firstWordsSum === lastWordsSum;
}

const words = [
  "Adventure",
  "Deleveled",
  "Terret",
  "Aha",
  "Dewed",
  "Access",
  "Lemel",
  "Hannah",
  "Dad",
  "Abandon",
  "Adult",
  "Deified",
  "Level",
  "Madam"
];
words.forEach(word => {
  console.log(word, isPalindrome(word));
});
