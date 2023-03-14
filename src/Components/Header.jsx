import React from "react";
// import  Button from 'react-bootstrap/Button';
// import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Navbar, Container, Nav, NavDropdown, Form, Button, NavLink } from "react-bootstrap";
import { useSelector } from "react-redux";
// import "bootstrap/dist/css/bootstrap.min.css";
// import herologo from "./assets/Logohero.png";
// import {NavLink, } from 'react-router-dom';
export const Header = () => {
  const state = useSelector((state) => state.handleCart)
  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark py-3" >
        <Container >
          <NavLink className=" bg-light fw-bold me-5  "> <img className="navbar-brad  "   to="#" src="./assets/Logohero.png" width={50} height={50} /></NavLink >
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2  my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

              <NavLink className="nav" to="/" >Home</NavLink>
              <NavLink className="nav" to="/about">About</NavLink>
              <NavLink className="nav" to="/products">Products</NavLink>
              <NavLink  className="nav"to="/contact">Contact</NavLink>

              {/* <div className="buttons display-flex" > */}
                <NavLink  className="btn btn-outline-primary me-1 ms-5 " to="/login" 
                > Login</NavLink>

                <NavLink  to="/register" className="btn btn-outline-primary ms-2 color-success" 
               >Register</NavLink>

                <NavLink  to="/cart" className="btn btn-outline-primary ms-3" 
                >Cart ( {state.length} )</NavLink>
              {/* </div> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >



    </>
  )
};
