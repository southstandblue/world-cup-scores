import "./App.css";
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
    var matchTotalScore = parseInt(homeScore) + parseInt(awayScore);
    setMatches((prevMatches) =>
      prevMatches.map((match) =>
        match.id === matchId
          ? { ...match, homeScore, awayScore, totalScore: matchTotalScore }
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

  return (
    <Container>
      <NavigationBar />
      <h5>New Match</h5>
      {displayNewMatchForm()}
      <h5>Matches in Progress</h5>
      {displayMatchesInProgress()}
      <h5>Matches Summary</h5>
      <MatchesSummary />
    </Container>
  );
};

export default App;
