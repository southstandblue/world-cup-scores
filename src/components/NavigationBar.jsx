import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import brandImage from "../img/brand.png";

const NavigationBar = (props) => {
  return (
    <>
      <Navbar expand="lg" fixed="top" bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="brandimage"
              src={brandImage}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            &nbsp;&nbsp;&nbsp;Live Football World Cup Scoreboard
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
export default NavigationBar;
