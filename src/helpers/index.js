export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetters = secretWord.split("");
  const guessedLetterSet = new Set(guessedWord);
  return secretLetters.filter((letter) => guessedLetterSet.has(letter)).length;
}
export const changeColor = (color) => {
  if (color === "white") {
    return "green";
  }
  if (color === "green") {
    return "red";
  }
  if (color === "red") {
    return "yellow";
  }
  if (color === "yellow") {
    return "white";
  }
};
export const giveSecretWord = (secretWord) => {
  const word = secretWord.filter((item) => item.length === 5);
  const fiveLettersWord = word.filter((item) => {
    const checkUniqueArray = (item) => {
      let check = true;
      for (let i = 0; i < item.length - 1; i++) {
        for (let j = i + 1; j < item.length; j++) {
          if ((item[i] = item[j])) {
            check = false;
            return check;
          }
        }
      }
      return check;
    };
    const checkItem = checkUniqueArray(item);
    if (checkItem) {
      return item;
    }
  });
  return fiveLettersWord[Math.floor(Math.random() * fiveLettersWord.length)];
};
