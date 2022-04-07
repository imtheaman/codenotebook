import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./state/store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
