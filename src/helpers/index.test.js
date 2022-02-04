import Enzyme from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import { getLetterMatchCount } from "./index.js";
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("getLetterMatchCount", () => {
  const secretWord = "party";
  test("returns correct count when there are no matching letters", () => {
    const letterMatchCount = getLetterMatchCount("bones", secretWord);
    expect(letterMatchCount).toBe(0);
  });
  test("returns the correct count when there are three matching letters", () => {
    const letterMachCount = getLetterMatchCount("train", secretWord);
    expect(letterMachCount).toBe(3);
  });
  test("returns the correct count when there are duplicate letters in the guess", () => {
    const letterMachCount = getLetterMatchCount("again", secretWord);
    expect(letterMachCount).toBe(1);
  });
});
