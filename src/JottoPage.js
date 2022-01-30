import Jotto from "./Jotto";
import "./JottoPage.scss";
import { Provider } from "react-redux";
import store from "./redux/configureStore";
const JottoPage = () => {
  return (
    <Provider store={store}>
      <Jotto />
    </Provider>
  );
};
export default JottoPage;
