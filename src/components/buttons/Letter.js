import React from "react";

const Letter = ({ letter }) => {
  const [backgroundColor, setBackgroundColor] = React.useState("white");
  const newButtonColor = color => {
    switch (color) {
      case "white":
        return "yellow";
      case "yellow":
        return "lime";
      case "lime":
        return "red";
      case "red":
        return "cyan";
      case "cyan":
        return "orange";
      case "orange":
        return "purple";
      case "purple":
        return "white";
    }
  };

  return (
    <>
      <button
        style={{ background: `${backgroundColor}` }}
        className='button-colors'
        onClick={() => {
          setBackgroundColor(newButtonColor(backgroundColor));
        }}>
        {letter}
      </button>
    </>
  );
};
export default Letter;
