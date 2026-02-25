import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Good Rizz Pick Up Lines/i);
  expect(linkElement).toBeInTheDocument();
});
