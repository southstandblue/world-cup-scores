import NavigationBar from "./components/NavigationBar";
import MatchesInProgressForm from "./components/MatchesInProgressForm";
import MatchesSummary from "./components/MatchesSummary";
import NewMatchForm from "./components/NewMatchForm";
import Container from "react-bootstrap/Container";

import { useState, useEffect } from "react";

const App = () => {
  // All state functions are in the parent and will be passed to components when required...
  const [matches, setMatches] = useState(() => {
    const savedMatches = localStorage.getItem("matches");
    return savedMatches ? JSON.parse(savedMatches) : [];
  });

  const persistMatchDetails = (matchData) => {
    setMatches((prevMatches) => [...prevMatches, matchData]);
  };

  const updateMatchScore = (matchId, homeScore, awayScore) => {
    setMatches((prevMatches) =>
      prevMatches.map((match) =>
        match.id === matchId
          ? {
              ...match,
              homeScore: parseInt(homeScore),
              awayScore: parseInt(awayScore),
              totalScore: parseInt(homeScore) + parseInt(awayScore),
            }
          : match
      )
    );
  };

  const finishMatch = (matchId) => {
    setMatches((prevMatch) =>
      prevMatch.filter((match) => match.id !== matchId)
    );
  };

  // Update the localStorage whenever a match is updated
  useEffect(() => {
    localStorage.setItem("matches", JSON.stringify(matches));
  }, [matches]);

  // Display the New Match Form
  const displayNewMatchForm = () => {
    return <NewMatchForm persistMatch={persistMatchDetails} />;
  };

  // Display the Matches In Progress Form
  const displayMatchesInProgress = () => {
    return matches.map((match) => {
      if (!match) return null;
      return (
        <MatchesInProgressForm
          key={match.id}
          match={match}
          updateMatchScore={updateMatchScore}
          finishMatch={finishMatch}
        />
      );
    });
  };

  // Display the Matches Summary
  const displayMatchesSummary = () => {
    // Here we need to sort the Summary
    // 1. By the total score
    // 2. If total score is the same then sort by recently started
    const sortedMatches = [...matches].sort((a, b) => {
      const checkTotalScoreA = a.totalScore;
      const checkTotalScoreB = b.totalScore;
      const checkIdA = a.id;
      const checkIdB = b.id;

      if (
        checkTotalScoreA === checkTotalScoreB &&
        checkTotalScoreA === 0 &&
        checkTotalScoreB === 0
      ) {
        return checkIdA - checkIdB;
      }

      if (checkTotalScoreA === checkTotalScoreB) {
        return checkIdB - checkIdA;
      }

      return checkTotalScoreB - checkTotalScoreA;
    });

    return sortedMatches.map((match) => {
      return <MatchesSummary key={match.id} match={match} />;
    });
  };

  return (
    <Container>
      <NavigationBar />
      <h5>New Match</h5>
      {displayNewMatchForm()}
      <h5>Matches in Progress</h5>
      {matches.length !== 0 ? (
        displayMatchesInProgress()
      ) : (
        <>
          <i data-testid="inProgressNoMatchesText">
            No matches have been started...
          </i>
          <br />
          <br />
        </>
      )}
      <h5>Matches Summary</h5>
      {matches.length !== 0 ? (
        displayMatchesSummary()
      ) : (
        <i data-testid="summaryNoMatchesText">
          No matches have been started...
        </i>
      )}
    </Container>
  );
};

export default App;
