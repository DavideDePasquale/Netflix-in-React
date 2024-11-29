import { Nav, Navbar } from "react-bootstrap";
import { ZoomIn } from "react-bootstrap-icons";
import { Bell } from "react-bootstrap-icons";
import { PersonCircle } from "react-bootstrap-icons";
import logo from "../assets/media/logo.png";

function TopBar() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="pt-3">
      <img src={logo} alt="LOGO" style={{ width: "8%" }} />

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="#home" className="fw-bold">
            Home
          </Nav.Link>
          <Nav.Link href="#tvShoes" className="fw-bold">
            TV Shows
          </Nav.Link>
          <Nav.Link href="#movies" className="fw-bold">
            Movies
          </Nav.Link>
          <Nav.Link href="#RecAdd" className="fw-bold">
            Recently Added
          </Nav.Link>
          <Nav.Link href="#List" className="fw-bold">
            My List
          </Nav.Link>
        </Nav>
        <Nav className="d-flex ms-auto">
          <Nav.Link className="fw-bold">
            <ZoomIn />
          </Nav.Link>
          <Nav.Link className="fw-bold">KIDS</Nav.Link>
          <Nav.Link className="fw-bold">
            <Bell />
          </Nav.Link>
          <Nav.Link className="fw-bold">
            <PersonCircle />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default TopBar;
