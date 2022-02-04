import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Button.scss";
const Button = () => {
  const secretWord = useSelector((state) => state.secretWord);
  const [showSecretWord, setShowSecretWord] = useState(false);
  return (
    <div className='giggle-container'>
      <img
        src='http://static.skaip.org/img/emoticons/180x180/f6fcff/giggle.gif'
        alt='giggle'
        className='giggle'
        onClick={() => {
          setShowSecretWord(!showSecretWord);
        }}
      />
      {showSecretWord && (
        <marquee>Ok... The secret word is: {secretWord}</marquee>
      )}
    </div>
  );
};
export default Button;
