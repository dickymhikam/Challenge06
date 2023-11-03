import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/actions/authActions";

function Header() {
  const dispatch = useDispatch ();



  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    } 
  }, []);

  const handleLogout = () => {
    dispatch(logout(() => {
      window.location.reload();
    }));
  };


  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbar">
      <Container>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Navbar.Brand as={Link} to="/">
            Movielist
          </Navbar.Brand>
          </Nav>
          <Nav>
            {isLoggedIn ? (
              <>
                <Nav.Link as={Link} to={"/dashboard"}>
                  Dashboard
                </Nav.Link>
                <Nav.Link
                 onClick={handleLogout}
                >
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to={"/login"}>
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to={"/register"}>
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;