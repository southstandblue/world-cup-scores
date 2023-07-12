import { render, screen } from "@testing-library/react";
import NewMatchForm from "./NewMatchForm";

describe("Test the New Match Form", () => {
  test("NewMatchForm renders the New Match Sub-Heading in the document", () => {
    render(<NewMatchForm />);
    const headingText = screen.getByText(/New Match/i);
    expect(headingText).toBeInTheDocument();
  });
  test("NewMatchForm renders the Home Team Input field in the document", () => {
    render(<NewMatchForm />);
    const homeTeamInput = screen.getByPlaceholderText("Home Team");
    expect(homeTeamInput).toBeInTheDocument();
  });
  test("NewMatchForm renders the Away Team Input field in the document", () => {
    render(<NewMatchForm />);
    const awayTeamInput = screen.getByPlaceholderText("Away Team");
    expect(awayTeamInput).toBeInTheDocument();
  });
  test("NewMatchForm renders the Start Match button in the document", () => {
    render(<NewMatchForm />);
    const newGameButton = screen.getByTestId("startMatchButton");
    expect(newGameButton).toBeInTheDocument();
  });
});
