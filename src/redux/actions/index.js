import { getLetterMatchCount } from "../../helpers";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
  SET_SECRET_WORD: "SET_SECRET_WORD",
  RESET_GAME: "RESET_GAME",
};
export const guessWord = (guessedWord) => {
  return function (dispatch, getState) {
    
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount },
    });

    if (guessedWord === secretWord) {
      dispatch({ type: actionTypes.CORRECT_GUESS });
    }
  };
};

export const resetGame = (words) => {
  return function (dispatch, getState) {
    const secretWord = (getState().secretWord = words);
    const guessedWords = (getState().guessedWords = []);
    const success = (getState().success = false);
    dispatch({
      type: actionTypes.RESET_GAME,
      payload: {
        secretWord,
        guessedWords,
        success,
      },
    });
  };
};
