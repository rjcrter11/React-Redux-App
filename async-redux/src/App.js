import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { comicReducer as reducer } from "./reducers";
import Comic from "./components/Comic";
import ComicStrip from "./components/ComicStrip";

import "./App.css";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>XKCD</h1>
        <Comic />
        <ComicStrip />
      </div>
    </Provider>
  );
}

export default App;
