import React from "react";
import PropTypes from "prop-types";
import "./Congratulations.scss";
import { useDispatch } from "react-redux";
import { resetGame } from "../../redux/actions";
import wordsData from "../../wordsData";
const Congratulations = ({ success, secretWord, guessedWords }) => {
  const dispatch = useDispatch();
  if (success) {
    return (
      <div data-test='component-congrats' className='congrats-container'>
        <span data-test='congrats-message' className='congrats-text'>
          Congratulations! You guessed the word {secretWord} in{" "}
          {guessedWords.length} tries!
        </span>
        <button
        className="reset-button"
          onClick={() => {
            const testWords = wordsData.filter((item) => item.length === 5);
            const testWords2 = testWords.filter((item) => {
              const checkUniqueArray2 = (word) =>
                [...word].every(
                  (letter, index) => word.indexOf(letter) === index
                );

              const checkItem = checkUniqueArray2(item);
              if (checkItem) {
                return item;
              }
            });
            const words =
              testWords2[Math.floor(Math.random() * testWords2.length)];
            dispatch(resetGame(words));
          }}>
          reset game
        </button>
      </div>
    );
  } else {
    return <div data-test='component-congrats' />;
  }
};
Congratulations.propTypes = {
  success: PropTypes.bool.isRequired,
};
export default Congratulations;
