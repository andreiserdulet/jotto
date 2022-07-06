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
      case "cyan":
        return "cyan";
      case "orange":
        return "orange";
      case "purple":
        return "purple";
      case "red":
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
