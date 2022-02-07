export const getLetterMatchCount = (guessedWord, secretWord) => {
  const secretLetters = secretWord.split("");
  const guessedLetterSet = new Set(guessedWord);
  return secretLetters.filter(letter => guessedLetterSet.has(letter)).length;
};
export const loadState = () => {
  try {
    const serialState = localStorage.getItem("appState");
    if (serialState === null) {
      return undefined;
    }
    return JSON.parse(serialState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serialState = JSON.stringify(state);
    localStorage.setItem("appState", serialState);
  } catch (err) {
    console.log(err);
  }
};
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
