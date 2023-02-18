import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import hostConfig from "./hostConfig";

// See https://learn.microsoft.com/en-us/adaptive-cards/sdk/rendering-cards/javascript/native-styling
// for CSS styling options
import "./styles.css";

import { ProvidesHostConfigContext } from "adaptivecards-react";

// See https://learn.microsoft.com/en-gb/adaptive-cards/rendering-cards/host-config
// Standard across all card renderer libraries
// This should be used for "styling" as far as possible to remain cross platform

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProvidesHostConfigContext hostConfig={hostConfig}>
      <App />
    </ProvidesHostConfigContext>
  </React.StrictMode>
);
