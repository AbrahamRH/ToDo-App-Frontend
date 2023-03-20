import "./Assets/index.css";
import App from "./Components/App";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./Utils/reportWebVitals";
import { TodosContextProvider } from "./Context/TodosContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TodosContextProvider>
    <App />
  </TodosContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
