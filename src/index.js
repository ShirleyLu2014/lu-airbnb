import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import { ThemeProvider } from "styled-components";
import theme from "@/assets/theme";
import { HashRouter } from "react-router-dom";
import "@/assets/styles/index.less";
import store from "@/store";
import { Provider } from "react-redux";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <HashRouter>
            <App />
          </HashRouter>
        </ThemeProvider>
      </Provider>
    </Suspense>
  </React.StrictMode>
);
