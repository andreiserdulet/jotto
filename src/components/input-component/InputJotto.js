import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import "./InputJotto.scss";
import { guessWord } from "../../redux/actions";
const InputJotto = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState("");
  const dispatch = useDispatch();
  const success = useSelector((state) => state.success);

  if (success) {
    return <div data-test='component-input' />;
  }

  return (
    <div data-test='component-input'>
      <form
        className='form-jotto'
        onSubmit={(evt) => {
          evt.preventDefault();
          dispatch(guessWord(currentGuess.toLowerCase()));
          setCurrentGuess("");
        }}>
        <input
          data-test='input-box'
          className='input-jotto'
          type='text'
          placeholder='enter guess'
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value)}
          minLength={5}
          required
        />
        <button className='input-button-jotto' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};
InputJotto.propTypes = {
  secretWord: PropTypes.string.isRequired,
};
export default InputJotto;
