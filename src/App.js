import "./App.css";
import NavigationBar from "./components/NavigationBar";
import GamesInProgress from "./components/GamesInProgress";
import GamesSummary from "./components/GamesSummary";
import NewMatchForm from "./components/NewMatchForm";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <NewMatchForm />
      <GamesInProgress />
      <GamesSummary />
    </div>
  );
};

export default App;
