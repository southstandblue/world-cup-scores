import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";

const MatchesInProgressForm = ({ match, updateMatchScore, finishMatch }) => {
  const [homeScore, setHomeScore] = useState(match.homeScore);
  const [awayScore, setAwayScore] = useState(match.awayScore);

  return (
    <Form>
      <Row key={match.id}>
        <Form.Label column sm={2}>
          {match.homeTeam}
        </Form.Label>
        <Col>
          <Form.Control
            type="number"
            value={homeScore}
            onChange={(e) => setHomeScore(e.target.value)}
            min="0"
            step="1"
          />
        </Col>
        <Form.Label column sm={2}>
          Vs
        </Form.Label>
        <Form.Label column sm={2}>
          {match.awayTeam}
        </Form.Label>
        <Col>
          <Form.Control
            type="number"
            value={awayScore}
            onChange={(e) => setAwayScore(e.target.value)}
            min="0"
            step="1"
          />
        </Col>

        <Col xs="auto">
          <Button
            className="mb-2"
            variant="success"
            onClick={() => updateMatchScore(match.id, homeScore, awayScore)}
          >
            Update Score
          </Button>
        </Col>

        <Col xs="auto">
          <Button
            className="mb-2"
            variant="warning"
            onClick={() => finishMatch(match.id)}
          >
            Finish Match
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
export default MatchesInProgressForm;
