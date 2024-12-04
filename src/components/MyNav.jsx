import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";
import NetflexLogo from "../assets/logo/netflix_logo.png";
import SearchLogo from "../assets/logo/search.svg";
import BellLogo from "../assets/logo/bell.svg";
import Avatar from "../assets/logo/avatar.png";
import { Link, NavLink } from "react-router-dom";

const MyNav = () => (
  <Navbar expand="lg" /* bg="dark" */ data-bs-theme="dark" className=" border-body ps-4 pt-4 color">
    <Container fluid>
      <img src={NetflexLogo} width="100 " height="45" className="d-inline-block align-top" alt="React Bootstrap logo" />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink className="nav-link" to ="/" >Home</NavLink>
          <NavLink className="nav-link" to ="/tvshows">TV Shows</NavLink>
          <NavLink className="nav-link" to="#link">Movies</NavLink>
          <NavLink className="nav-link" to="#link">Recently Added</NavLink>
          <NavLink className="nav-link" to="#link">My List</NavLink>
        </Nav>
        <img src={SearchLogo} width="40 " height="18" className="d-inline-block align-top" alt="React Bootstrap logo" />
        <span class="text-white mx-3">KIDS</span>
        <img src={BellLogo} width="40 " height="18" className="d-inline-block align-top" alt="React Bootstrap logo" />
        <NavDropdown
          title={<img src={Avatar} width="40 " height="40" className="d-inline-block align-top" alt="React Bootstrap logo" />}
          id="basic-nav-dropdown" align="end"
        >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
export default MyNav;
