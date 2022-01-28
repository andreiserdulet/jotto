import React from "react";
import PropTypes from "prop-types";
import "./Congratulations.scss";
const Congratulations = ({ success, secretWord, guessedWords }) => {
  if (success) {
    return (
      <div data-test='component-congrats' className='congrats-container'>
        <span data-test='congrats-message' className='congrats-text'>
          Congratulations! You guessed the word {secretWord} in{" "}
          {guessedWords.length} tries!
        </span>
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
