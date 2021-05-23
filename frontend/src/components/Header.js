import React from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import SearchBox from "./SearchBox";
import logo from "./logo.jpg";
import { logout } from "../actions/userActions";

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar bg="light" expand="lg" collapseOnSelect className="bg-nav">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src={logo}
                alt="thepoetryofryan"
                style={{ height: "70px" }}
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/about">
                <Nav.Link>
                  <i className="fas fa-user" style={{ color: "#7b113a" }} />{" "}
                  About Me
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i
                    className="fas fa-shopping-cart"
                    style={{ color: "#7b113a" }}
                  />{" "}
                  Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>
                      My Profile <i className="fas fa-user" />
                    </NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout <i className="fas fa-sign-out-alt" />
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user" style={{ color: "#7b113a" }} />{" "}
                    Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
            <Route render={({ history }) => <SearchBox history={history} />} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
