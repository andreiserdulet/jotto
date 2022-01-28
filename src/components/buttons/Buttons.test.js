import Enzyme, { shallow } from "enzyme";
import Buttons from "./Buttons";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => {
  return shallow(<Buttons />);
};
test("renders with no error", () => {});
