import React from "react";
import * as ReactDOM from "react-dom";

export const reactDomRender = (
  reactElement: React.ReactElement
): HTMLElement | undefined => {
  const div = document.createElement("div");
  ReactDOM.render(reactElement, div);
  return div;
};
