import { render, screen } from "@testing-library/react";
import MatchesSummary from "./MatchesSummary";

// Create some dummy data so that at least one match is in progress and the form renders
const match = {
  awayScore: "0",
  awayTeam: "France",
  homeScore: "3",
  homeTeam: "England",
  id: 1689247504871,
  totalScore: 3,
};

describe("Test the Matches Summary", () => {
  test("MatchesSummary renders the Home Team Name in the document", () => {
    render(<MatchesSummary key={match.id} match={match} />);
    const homeTeamName = screen.getByText(/England/i);
    expect(homeTeamName).toBeInTheDocument();
  });

  test("MatchesSummary renders the Home Team Score in the document", () => {
    render(<MatchesSummary key={match.id} match={match} />);
    const homeTeamScore = screen.getByText(/3/i);
    expect(homeTeamScore).toBeInTheDocument();
  });

  test("MatchesSummary renders the ':' in the document", () => {
    render(<MatchesSummary key={match.id} match={match} />);
    const vsLabel = screen.getByText(/:/i);
    expect(vsLabel).toBeInTheDocument();
  });

  test("MatchesSummary renders the Away Team Name in the document", () => {
    render(<MatchesSummary key={match.id} match={match} />);
    const awayTeamName = screen.getByText(/France/i);
    expect(awayTeamName).toBeInTheDocument();
  });
  test("MatchesSummary renders the Away Team Score in the document", () => {
    render(<MatchesSummary key={match.id} match={match} />);
    const awayTeamScore = screen.getByText(/0/i);
    expect(awayTeamScore).toBeInTheDocument();
  });
});
