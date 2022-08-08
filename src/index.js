import React from "react";
//for new react version instead of using ReactDom use createRoot 
import { createRoot } from "react-dom/client"
//import component main file
import TodoContainer from "./components/TodoContainer";
//import css
import "./App.css"
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>
);