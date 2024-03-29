import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {
  Nav,
  Navbar,
  Button,
  Form,
  FormControl,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userAction";
import { searchProduct } from "../actions/productActions";

const Header = () => {
  const [searchkey, setsearchkey] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    //console.log("Logout");
  };

  return (
    <div className="p-4 bg-light mt-4">
      <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
        <Container fluid>
          <Navbar.Brand href="/">Veggies</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {userInfo ? (
                <NavDropdown title={userInfo.name}>
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i>
                    &nbsp; login
                  </Nav.Link>
                </LinkContainer>
              )}
              {/* <Nav.Link href="/login">
                <i class="fa-regular fa-user"></i>
                &nbsp; login
              </Nav.Link> */}
              <Nav.Link href="/cart">
                <i class="fa-solid fa-cart-shopping"></i>
                &nbsp; Cart
              </Nav.Link>

              <Nav.Link href="/gehired">
                {/* <i class="fa-regular fa-person-dolly-empty"></i> */}
                &nbsp; getHired
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="ml-2"
                aria-label="Search"
                value={searchkey}
                onChange={(e) => setsearchkey(e.target.value)}
              />
              <Button
                variant="outline-success"
                onClick={() => {
                  dispatch(searchProduct(searchkey));
                }}
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
