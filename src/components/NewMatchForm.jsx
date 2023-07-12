import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { useState, useRef } from "react";

const NewMatchForm = ({ persistMatch }) => {
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");
  const [saveButtonDisabled, setSaveButtonDisabled] = useState(true);

  const homeTeamInputRef = useRef(null);

  const focus = () => {
    homeTeamInputRef.current.focus();
  };

  const handleHomeTeam = (e) => {
    if (e.target.value.trim() !== "" && awayTeam.trim() !== "") {
      setSaveButtonDisabled(false);
    } else {
      setSaveButtonDisabled(true);
    }
    setHomeTeam(e.target.value.trim());
  };

  const handleAwayTeam = (e) => {
    if (e.target.value.trim() !== "" && homeTeam.trim() !== "") {
      setSaveButtonDisabled(false);
    } else {
      setSaveButtonDisabled(true);
    }
    setAwayTeam(e.target.value.trim());
  };

  const clearFields = () => {
    setHomeTeam("");
    setAwayTeam("");
    setSaveButtonDisabled(true);
  };

  const handleSave = () => {
    // Create a match object
    const matchData = {
      id: Date.now(),
      homeTeam,
      homeScore: 0,
      awayTeam,
      awayScore: 0,
      totalScore: 0,
    };

    // Call parent function to presist the match details
    persistMatch(matchData);

    // Clear input fields
    clearFields();

    // Set the focus to the Home Team input
    focus();
  };

  return (
    <Form>
      <Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="Home Team"
            ref={homeTeamInputRef}
            value={homeTeam}
            onChange={handleHomeTeam}
            autoFocus
          />
        </Col>
        <Col>
          <Form.Control
            type="text"
            placeholder="Away Team"
            value={awayTeam}
            onChange={handleAwayTeam}
          />
        </Col>
        <Col xs="auto">
          <Button
            onClick={handleSave}
            disabled={saveButtonDisabled}
            className="mb-2"
            data-testid="startMatchButton"
          >
            Start Match
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
export default NewMatchForm;
