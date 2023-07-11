import "./App.css";
import Navbar from "./components/Navbar";
import GamesInProgress from "./components/GamesInProgress";
import GamesSummary from "./components/GamesSummary";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <GamesInProgress />
      <GamesSummary />
    </div>
  );
};

export default App;
