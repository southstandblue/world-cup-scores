import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavigationBar = (props) => {
  return (
    <>
      <Navbar expand="lg" fixed="top" bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">
            Live Football World Cup Scoreboard
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
export default NavigationBar;
