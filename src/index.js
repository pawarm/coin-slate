import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
// import CurrenciesContext from "Contexts/CurrenciesContext";
// import CMCCurrencyMapContext from "Contexts/CMCCurrencyMapContext";
// import BalancesContext from "Contexts/BalancesContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppStateProvider } from "contexts/app-context";
import Router from "router/router";

ReactDOM.render(
  <React.StrictMode>
    <AppStateProvider>
      <Router />
    </AppStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
