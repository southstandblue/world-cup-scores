import { render, screen } from "@testing-library/react";
import GamesInProgressForm from "./GamesInProgressForm";

describe("Test the New Match Form", () => {
  test("GamesInProgressForm renders the Games In Progress Sub-Heading in the document", () => {
    render(<GamesInProgressForm />);
    const headingText = screen.getByText(/Games In Progress/i);
    expect(headingText).toBeInTheDocument();
  });
  test("GamesInProgressForm renders the Home Team Score Input field in the document", () => {
    render(<GamesInProgressForm />);
    const homeTeamScoreInput = screen.getByPlaceholderText("Home Score");
    expect(homeTeamScoreInput).toBeInTheDocument();
  });
  test("GamesInProgressForm renders the Away Team Score Input field in the document", () => {
    render(<GamesInProgressForm />);
    const awayTeamScoreInput = screen.getByPlaceholderText("Away Score");
    expect(awayTeamScoreInput).toBeInTheDocument();
  });
  test("GamesInProgressForm renders the Update Score button in the document", () => {
    render(<GamesInProgressForm />);
    const updateScoreButton = screen.getByTestId("updateScoreButton");
    expect(updateScoreButton).toBeInTheDocument();
  });
  test("GamesInProgressForm renders the Finish Match button in the document", () => {
    render(<GamesInProgressForm />);
    const finishMatchButton = screen.getByTestId("finishMatchButton");
    expect(finishMatchButton).toBeInTheDocument();
  });
});
