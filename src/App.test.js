import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Test the initial screen rendering of the application", () => {
  test("App renders the Main Heading in the document", () => {
    render(<App />);
    const headingText = screen.getByText(/Live Football World Cup Scoreboard/i);
    expect(headingText).toBeInTheDocument();
  });

  test("NewMatchForm renders the New Match Sub-Heading in the document", () => {
    render(<App />);
    const subHeadingText = screen.getByText(/New Match/i);
    expect(subHeadingText).toBeInTheDocument();
  });

  test("App renders the Matches in Progress Sub-Heading in the document", () => {
    render(<App />);
    const subHeadingText = screen.getByText(/Matches in Progress/i);
    expect(subHeadingText).toBeInTheDocument();
  });
  test("App renders the No matches have been started... inthe Matches in Progress Sub-Heading in the document", () => {
    render(<App />);
    const noMatchesText = screen.getByTestId("inProgressNoMatchesText");
    expect(noMatchesText).toBeInTheDocument();
  });

  test("App renders the Match Summary Sub-Heading in the document", () => {
    render(<App />);
    const subHeadingText = screen.getByText(/Matches Summary/i);
    expect(subHeadingText).toBeInTheDocument();
  });
  test("App renders the No matches have been started... in the Match Summary Sub-Heading in the document", () => {
    render(<App />);
    const noMatchesText = screen.getByTestId("summaryNoMatchesText");
    expect(noMatchesText).toBeInTheDocument();
  });
});
