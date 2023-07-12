import "./App.css";
import NavigationBar from "./components/NavigationBar";
import GamesInProgressForm from "./components/GamesInProgressForm";
import GamesSummary from "./components/GamesSummary";
import NewMatchForm from "./components/NewMatchForm";

import { useState, useEffect } from "react";

const App = () => {
  const [matches, setMatches] = useState(() => {
    const savedMatches = localStorage.getItem("matches");
    return savedMatches ? JSON.parse(savedMatches) : [];
  });

  useEffect(() => {
    localStorage.setItem("matches", JSON.stringify(matches));
  }, [matches]);

  const persistMatchDetails = (matchData) => {
    setMatches((prevMatches) => [...prevMatches, matchData]);
  };

  return (
    <div>
      <NavigationBar />
      <NewMatchForm persist={persistMatchDetails} />
      <GamesInProgressForm />
      <GamesSummary />
    </div>
  );
};

export default App;
