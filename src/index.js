import React from "react";
import ReactDOM from "react-dom";

import "./styles/sass/main.scss";

const App = () => {
  return <div>Hello React,Webpack 4 & Babel 7!</div>;
};

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
