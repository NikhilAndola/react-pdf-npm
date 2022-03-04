import * as React from "react";
import { render } from "react-dom";

import PDFLink from "./PDFLink";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <PDFLink />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
