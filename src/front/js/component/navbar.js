import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const MyNavbar = () => {
	return (
		<Navbar className="nav-colors" expand="false">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Brand className="mr-auto" href="#home">
				Guniverse
			</Navbar.Brand>

			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="#Home">Home</Nav.Link>
					<Nav.Link href="#link">Link</Nav.Link>
					<NavDropdown title="Dropdown" id="basic-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>

			<Form inline className="py-0 pl-0 pr-5 search">
				<InputGroup className="mb-3">
					<FormControl type="text" placeholder="Enter your query" className="" />
					<InputGroup.Append>
						<Button variant="primary">Search</Button>
					</InputGroup.Append>
				</InputGroup>
			</Form>
		</Navbar>
	);
};
