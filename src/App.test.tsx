import * as React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";

import App from "./App";

jest.mock("./components/ConfigContext");

declare global {
  var IS_REACT_ACT_ENVIRONMENT: boolean;
}

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

let container: HTMLElement;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
});

it("has the right header", () => {
  act(() => {
    ReactDOM.createRoot(container).render(<App />);
  });

  const label = container.querySelector("h1");
  expect(label?.textContent).toBe("Welcome to Nick's App");
});
