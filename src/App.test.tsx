import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

// test("renders home link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/sign up!/i);
//   expect(linkElement).toBeInTheDocument();
// });

it("runs simple test to make sure tests are working", () => {
  expect(5).toBe(5);
});
