import React from "react";
import PropTypes from "prop-types";
import "./GuessedWords.scss";
import Buttons from "../buttons/Buttons";
const GuessedWords = (props) => {
  let contents;
  if (props.guessedWords.length === 0) {
    contents = (
      <span data-test='guess-instructions'>Try to guess the secret word!</span>
    );
  } else {
    const guessedWordsRows = props.guessedWords.map((word, index) => (
      <div data-test='guessed-word' key={index} className='content-row'>
        <h1>{word.guessedWord}</h1>
        <h1>{word.letterMatchCount}</h1>
      </div>
    ));
    contents = (
      <div className="guessed-words-container">
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
            <div className='content-row-container'>{guessedWordsRows}</div>
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
