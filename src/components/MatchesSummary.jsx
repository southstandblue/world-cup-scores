import Card from "react-bootstrap/Card";

const MatchesSummary = ({ match }) => {
  return (
    <Card body border="white">
      {match.homeTeam} {match.homeScore} : {match.awayTeam} {match.awayScore}
    </Card>
  );
};
export default MatchesSummary;
