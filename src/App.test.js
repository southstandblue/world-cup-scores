import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Test the initial screen rendering of the application", () => {
  test("App renders the Main Heading in the document", () => {
    render(<App />);
    const headingText = screen.getByText(/Live Football World Cup Scoreboard/i);
    expect(headingText).toBeInTheDocument();
  });
  test("App renders the New Game button in the document", () => {
    render(<App />);
    const newGameButton = screen.getByRole("button");
    expect(newGameButton).toBeInTheDocument();
  });
  test("App renders the Games in Progress Sub-Heading in the document", () => {
    render(<App />);
    const subHeadingText = screen.getByText(/Games in Progress/i);
    expect(subHeadingText).toBeInTheDocument();
  });
  test("App renders the Game Summary Sub-Heading in the document", () => {
    render(<App />);
    const subHeadingText = screen.getByText(/Game Summary/i);
    expect(subHeadingText).toBeInTheDocument();
  });
});
