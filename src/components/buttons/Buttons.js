import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { changeColor } from "../../helpers";
import Letter from "./Letter";
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
let letterColor = [
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
];

const Buttons = () => {
  const success = useSelector((state) => state.success);

  if (success) {
    return <div></div>;
  } else {
    return (
      <div className='buttons-container'>
        {upperCaseAlp.map((item, index) => {
          return (
            <Letter
              letter={upperCaseAlp[index]}
              // id={"letter " + index}
              // key={index}
              // className='button-colors'
              // onClick={() => {
              //   // letterColor[index] = changeColor(letterColor[index]);
              //   // document.getElementById(
              //   //   "letter " + index
              //   // ).style.backgroundColor = letterColor[index];
              //   button.current.style.backgroundColor = changeColor("white", index);
              // }}
              // ref={button}
            ></Letter>
          );
        })}
      </div>
    );
  }
};
export default Buttons;
// const [color, setColor] = useState("white");
// const newButtonColor =
//   color === "white"
//     ? "green"
//     : color === "green"
//     ? "red"
//     : color === "red"
//     ? "yellow"
//     : color === "yellow"
//     ? "white"
//     : "white";

// onClick={() => {
//   document.getElementById(
//     "letter " + index
//   ).style.backgroundColor = newButtonColor;
//   console.log(index);
//   setColor(newButtonColor);
// }}
