// src/components/layout/Navbar.tsx
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


interface AppNavbarProps {
  onToggleSidebar: () => void;
}

const AppNavbar = ({ onToggleSidebar }: AppNavbarProps) => {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="p-3">
      <Container>
        <Button
          variant="light"
          onClick={onToggleSidebar}
          className="me-2 sidebar-toggle"
        >
          ☰
        </Button>
        <Navbar.Brand as={Link} to="/">
          MichinglishAPP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
          </Nav>
          <Nav>
            <NavDropdown
              title="My Profile"
              id="basic-nav-dropdown"
              align="end"
            >
              <NavDropdown.Item href="#account-settings">
                Account Settings
              </NavDropdown.Item>
              <NavDropdown.Item href="#progress-goals">
                My Progress and Goals
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;