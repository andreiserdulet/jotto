import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Congrats from "./components/congratulations/Congratulations.js";
import GuessedWords from "./components/guess-words/GuessedWords.js";
import InputJotto from "./components/input-component/InputJotto";
const Jotto = () => {
  const success = useSelector((state) => state.success);
  const guessedWords = useSelector((state) => state.guessedWords);
  const secretWord = useSelector((state) => state.secretWord);
  window.localStorage.setItem("secretWord", secretWord);
  window.localStorage.setItem("guessedWords", JSON.stringify(guessedWords));
  window.localStorage.setItem("guessedWords", success);

  return (
    <div data-test='component-app' className='container'>
      <h1>Jotto</h1>
      <Congrats
        success={success}
        secretWord={secretWord}
        guessedWords={guessedWords}
      />
      <InputJotto success={success} secretWord={secretWord} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
};
export default Jotto;
