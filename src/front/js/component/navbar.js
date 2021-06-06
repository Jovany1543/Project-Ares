import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, InputGroup } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import "../../styles/navbar.scss";

export const MyNavbar = props => {
	const { store, actions } = useContext(Context);

	return (
		<Navbar variant="dark" className="nav-colors shadow-lg" expand="false">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Brand as={Link} className="mr-auto font-weight-bold text-white" to="/">
				Guniverse
			</Navbar.Brand>

			<Form inline className="py-0 pl-0 pr-5 search">
				<InputGroup>
					<FormControl type="text" placeholder="Enter your query" className="" />
					<InputGroup.Append>
						<Button variant="primary">Search</Button>
					</InputGroup.Append>
				</InputGroup>
			</Form>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link as={Link} to="/">
						Home
					</Nav.Link>
					{props.loggedIn ? (
						<>
							<Nav.Link as={Link} to="/bookmarks">
								My Bookmarks
							</Nav.Link>
							<Nav.Link
								as={Link}
								to="/"
								onClick={e => {
									// sessionStorage.clear();
									sessionStorage.setItem(
										"guniverse_user",
										JSON.stringify({
											token: "",
											email: "",
											id: ""
										})
									);
									props.setLoggedIn(false);
								}}>
								Log out
							</Nav.Link>
						</>
					) : (
						<>
							<Nav.Link as={Link} to="/signup">
								Sign up
							</Nav.Link>
							<Nav.Link as={Link} to="/login">
								Log in
							</Nav.Link>
						</>
					)}
					{/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
					</NavDropdown> */}
				</Nav>
			</Navbar.Collapse>
			{/* {props.loggedIn ? "" : <Redirect to="/login" />} */}
		</Navbar>
	);
};

MyNavbar.propTypes = {
	loggedIn: PropTypes.bool,
	setLoggedIn: PropTypes.func
};
