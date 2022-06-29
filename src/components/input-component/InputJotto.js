import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import "./InputJotto.scss";
import { guessWord } from "../../redux/actions";
const InputJotto = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState("");
  const [error, setError] = React.useState(false);
  const success = useSelector(state => state.success);
  const dispatch = useDispatch();
  const words = require("an-array-of-english-words");
  const checkFunction = (currentGuess, words) => {
    const check = words.includes(currentGuess.toLowerCase());
    return check;
  };
  const check = checkFunction(currentGuess, words);
  useEffect(() => {
    const interval = setInterval(() => {
      setError(false);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div data-test='component-input'>
      <form
        className='form-jotto'
        onSubmit={evt => {
          evt.preventDefault();
          if (check) {
            dispatch(guessWord(currentGuess.toLowerCase()));
            setCurrentGuess("");
          } else {
            setError(!error);
          }
        }}>
        {success ? (
          <div> </div>
        ) : (
          <>
            <input
              data-test='input-box'
              className='input-jotto'
              type='text'
              placeholder='enter guess'
              value={currentGuess}
              onChange={e => {
                const onlyLetters = e.target.value.replace(/[^a-zA-Z]/g, "");
                setCurrentGuess(
                  Array.from(new Set(onlyLetters.split(""))).join("")
                );
              }}
              minLength={5}
              maxLength={5}
              required
            />
            {error && (
              <p className='input-error'>
                This word {currentGuess} is not accepted{" "}
              </p>
            )}
            <button className='input-button-jotto' type='submit'>
              Submit
            </button>
          </>
        )}
      </form>
    </div>
  );
};
InputJotto.propTypes = {
  secretWord: PropTypes.string.isRequired,
};
export default InputJotto;
