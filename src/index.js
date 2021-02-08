import "./index.css";

import * as serviceWorker from "./serviceWorker";

import App from "./App";
import { I18nextProvider } from "react-i18next";
import React from "react";
import ReactDOM from "react-dom";
import common_es from "./locale/es.json";
import i18next from "i18next";

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "es", // language to use
  resources: {
    es: {
      translation: common_es, // 'common' is our custom namespace
    },
  },
});

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
