/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import Router from "./Router";
import hideHeaderSlice from "./components/Common/hideHeaderSlice";
import "./App.css";

function App() {
    const rootReducer = combineReducers({
        hideHeaderSlice: hideHeaderSlice
    });

    const store = configureStore({
        reducer: rootReducer
    });

    return (
        <Provider store={store}>
            <div>
                <Router />
            </div>
        </Provider>
    );
}

export default App;