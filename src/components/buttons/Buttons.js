import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Buttons.scss";
const upperCaseAlp = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const Buttons = () => {
  const [color, setColor] = useState("white");
  const newButtonColor =
    color === "white"
      ? "green"
      : color === "green"
      ? "red"
      : color === "red"
      ? "yellow"
      : color === "yellow"
      ? "white"
      : "white";
  const success = useSelector((state) => state.success);
  if (success) {
    return <div></div>;
  } else {
    return (
      <div className='buttons-container'>
        {upperCaseAlp.map((item, index) => {
          return (
            <button
              id={"letter " + index}
              key={index}
              className='button-colors'
              onClick={() => {
                document.getElementById(
                  "letter " + index
                ).style.backgroundColor = newButtonColor;

                setColor(newButtonColor);
              }}>
              {item}
            </button>
          );
        })}
      </div>
    );
  }
};
export default Buttons;
