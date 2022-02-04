import { actionTypes } from "../actions";
import wordsData from "../../wordsData";

const testWords = wordsData.filter((item) => item.length === 5);

const testWords2 = testWords.filter((item) => {
  const checkUniqueArray = (item) => {
    let check = true;
    for (let i = 0; i < item.length - 1; i++) {
      for (let j = i + 1; j < item.length; j++) {
        if (item[i] === item[j]) {
          check = false;
          return check;
        }
      }
    }
    return check;
  };

  const checkUniqueArray2 = (word) =>
    [...word].every((letter, index) => word.indexOf(letter) === index);

  const checkUniqueArray3 = (word) => new Set(word).size === word.length;

  const checkItem = checkUniqueArray2(item);
  if (checkItem) {
    return item;
  }
});
console.log(testWords2);
const words = testWords2[Math.floor(Math.random() * testWords2.length)];

export default (state = words, action) => {
  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
      return action.payload;
    default:
      return state;
  }
};
