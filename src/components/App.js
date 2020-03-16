import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Home from "./Home.js";
import AboutUs from "./AboutUs.js";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";

export default function App() {
    return (
        <Router className="App">
            <Navbar bg="dark" variant="dark" expand="lg">
            <NavLink to="/" exact>
                <Navbar.Brand>Website Name</Navbar.Brand>
            </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link exact to="/" className="nav-link">Home</Nav.Link>
                        <Nav.Link to="/aboutus" className="nav-link">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Container>
                <Switch>
                    <Route exact path="/" component="{Home}" />
                    <Route path="/aboutus" component="{AboutUs}" />
                </Switch>
            </Container>
        </Router>
    );
}