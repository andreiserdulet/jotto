import Enzyme, { shallow } from "enzyme";
import Congratulations from "./Congratulations";
import { findByAttr, checkProps } from "../../test/testUtils.js";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = { success: false, guessedWords: [] };
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congratulations {...setupProps} />);
};

test("renders without error", () => {
  const wrapper = setup({ success: false });
  const component = findByAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("renders no text when success prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findByAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});
test("renders non-empty congrats message when success prop is true", () => {
  const wrapper = setup({ success: true });
  const message = findByAttr(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
});
test("does not throw warnig with expected props", () => {
  const expectedProps = { success: false, guessedWords: [] };
  checkProps(Congratulations, expectedProps);
});
