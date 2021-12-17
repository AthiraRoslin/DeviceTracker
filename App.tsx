import React from "react";
import Main from "./src/Main";

import { Provider } from "react-redux";
import { createStore } from "redux";

import reducer from "./src/reducer/deviceList";

export default function App() {
  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
