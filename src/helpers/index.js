export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetters = secretWord.split("");
  const guessedLetterSet = new Set(guessedWord);
  return secretLetters.filter((letter) => guessedLetterSet.has(letter)).length;
}

// export const changeColor = (color) => {
//   if (color === "white") {
//     return "green";
//   }
//   if (color === "green") {
//     return "red";
//   }
//   if (color === "red") {
//     return "yellow";
//   }
//   if (color === "yellow") {
//     return "white";
//   }
// };
