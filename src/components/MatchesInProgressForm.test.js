import { render, screen, fireEvent } from "@testing-library/react";
import MatchesInProgressForm from "./MatchesInProgressForm";

// Create some dummy data so that at least one match is in progress and the form renders
const match = {
  awayScore: "0",
  awayTeam: "France",
  homeScore: "0",
  homeTeam: "England",
  id: 1689166145486,
  totalScore: 0,
};

const dummyUpdateMatchScoreFunction = (id, homeScore, awayScore) => {
  match.id = id;
  match.homeScore = homeScore;
  match.awayScore = awayScore;
  match.totalScore = parseInt(homeScore) + parseInt(awayScore);
  return match;
};

const dummyFinishMatchFunction = (id) => {
  return {};
};

describe("Test the Matches In Progress Form", () => {
  test("MatchesInProgressForm renders the Home Team Label in the document", () => {
    render(
      <MatchesInProgressForm
        key={match.id}
        match={match}
        updateMatchScore={dummyUpdateMatchScoreFunction}
        finishMatch={dummyFinishMatchFunction}
      />
    );
    const homeTeamLabel = screen.getByText(/England/i);
    expect(homeTeamLabel).toBeInTheDocument();
  });

  test("MatchesInProgressForm renders the Home Team Score Input Default Value (0) in the document", () => {
    render(
      <MatchesInProgressForm
        key={match.id}
        match={match}
        updateMatchScore={dummyUpdateMatchScoreFunction}
        finishMatch={dummyFinishMatchFunction}
      />
    );
    const homeTeamScore = screen.getByTestId("homeScore");
    expect(homeTeamScore).toHaveValue(0);
  });

  test("MatchesInProgressForm renders the 'Vs' Label in the document", () => {
    render(
      <MatchesInProgressForm
        key={match.id}
        match={match}
        updateMatchScore={dummyUpdateMatchScoreFunction}
        finishMatch={dummyFinishMatchFunction}
      />
    );
    const vsLabel = screen.getByText(/Vs/i);
    expect(vsLabel).toBeInTheDocument();
  });

  test("MatchesInProgressForm renders the Away Team Label in the document", () => {
    render(
      <MatchesInProgressForm
        key={match.id}
        match={match}
        updateMatchScore={dummyUpdateMatchScoreFunction}
        finishMatch={dummyFinishMatchFunction}
      />
    );
    const homeTeamLabel = screen.getByText(/France/i);
    expect(homeTeamLabel).toBeInTheDocument();
  });

  test("MatchesInProgressForm renders the Away Team Score Input Default Value (0) in the document", () => {
    render(
      <MatchesInProgressForm
        key={match.id}
        match={match}
        updateMatchScore={dummyUpdateMatchScoreFunction}
        finishMatch={dummyFinishMatchFunction}
      />
    );
    const awayTeamScore = screen.getByTestId("awayScore");
    expect(awayTeamScore).toHaveValue(0);
  });

  test("MatchesInProgressForm renders the Update Score Button in the document", () => {
    render(
      <MatchesInProgressForm
        key={match.id}
        match={match}
        updateMatchScore={dummyUpdateMatchScoreFunction}
        finishMatch={dummyFinishMatchFunction}
      />
    );
    const updateMatchScoreButton = screen.getByTestId("updateMatchScoreButton");
    expect(updateMatchScoreButton).toBeVisible();
  });

  test("MatchesInProgressForm renders the updated Home/Away Score field values in the document when the Update Score button is clicked", () => {
    render(
      <MatchesInProgressForm
        key={match.id}
        match={match}
        updateMatchScore={dummyUpdateMatchScoreFunction}
        finishMatch={dummyFinishMatchFunction}
      />
    );

    const homeTeamScore = screen.getByTestId("homeScore");
    fireEvent.change(homeTeamScore, { target: { value: "3" } });

    const awayTeamScore = screen.getByTestId("awayScore");
    fireEvent.change(awayTeamScore, { target: { value: "1" } });

    const updateMatchScoreButton = screen.getByTestId("updateMatchScoreButton");
    fireEvent.click(updateMatchScoreButton);

    const updatedHomeTeamScore = screen.getByTestId("homeScore");
    expect(updatedHomeTeamScore).toHaveValue(3);

    const updatedAwayTeamScore = screen.getByTestId("awayScore");
    expect(updatedAwayTeamScore).toHaveValue(1);
  });

  test("MatchesInProgressForm renders the Finish Match Button in the document", () => {
    render(
      <MatchesInProgressForm
        key={match.id}
        match={match}
        updateMatchScore={dummyUpdateMatchScoreFunction}
        finishMatch={dummyFinishMatchFunction}
      />
    );
    const finishMatchButton = screen.getByTestId("finishMatchButton");
    expect(finishMatchButton).toBeVisible();
  });
});
