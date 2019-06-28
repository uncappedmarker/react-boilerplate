import React from "react";
import ReactDOM from "react-dom";
import MainTemplate from "main"

ReactDOM.render(
  <MainTemplate />,
  document.getElementById("app")
);

module.hot.accept();