import React from "react";

const Letter = ({ letter }) => {
  const [color, setColor] = React.useState("white");
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
  return (
    <button
      style={{ background: `${color}` }}
      onClick={() => {
        setColor(newButtonColor);
      }}>
      {letter}
    </button>
  );
};
export default Letter;
