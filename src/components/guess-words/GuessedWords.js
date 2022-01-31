import React from "react";
import PropTypes from "prop-types";
import "./GuessedWords.scss";
import Buttons from "../buttons/Buttons";
const GuessedWords = ({ guessedWords }) => {
  let contents;
  if (guessedWords.length === 0) {
    contents = (
      <span data-test='guess-instructions'>Try to guess the secret word!</span>
    );
  } else {
    contents = (
      <div className='guessed-words-container'>
        <Buttons />
        <div data-test='guessed-words' className='notebook-paper'>
          <header>
            <h1 className='title-jotto'>Guessed Words</h1>
          </header>

          <div className='wrapperr'>
            <div className='title-row'>
              <h1 className='title-row-text'>Guess</h1>
              <h1 className='title-row-text'>Matching Letters</h1>
            </div>
            <div className='content-row-container'>
              {guessedWords.map((word, index) => {
                const {guessedWord, letterMatchCount} = word;
                return (
                  <div
                    data-test='guessed-word'
                    key={index}
                    className='content-row'>
                    <h1>{guessedWord}</h1>
                    <h1>{letterMatchCount}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div data-test='component-guessed-words'>{contents}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default GuessedWords;
