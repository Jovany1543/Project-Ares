import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, InputGroup } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../../styles/navbar.scss";

export const MyNavbar = props => {
	const { store, actions } = useContext(Context);

	// const searched_gun = store.gunData.filter(gun => gun.name.includes(data["query"].toLowerCase()));

	const { register, handleSubmit } = useForm();

	const onSubmit = data => {
		console.log(data["query"].toLowerCase());
		// Sets query
		props.setQuery(data["query"].toLowerCase());
	};

	return (
		<Navbar variant="dark" className="nav-colors shadow-lg" expand="false">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Brand as={Link} className="mr-auto font-weight-bold text-white" to="/">
				Guniverse
			</Navbar.Brand>

			<Form onSubmit={handleSubmit(onSubmit)} inline className="py-0 pl-0 pr-5">
				<InputGroup className="search h-100">
					<input
						type="text"
						placeholder="Enter your query"
						className="rounded-left border-0"
						{...register("query")}
					/>
					<InputGroup.Append>
						<Button as={Link} to="/search" variant="primary" className="rounded-right border-0 shadow-sm">
							Search
						</Button>
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
		</Navbar>
	);
};

MyNavbar.propTypes = {
	loggedIn: PropTypes.bool,
	setLoggedIn: PropTypes.func,
	query: PropTypes.string,
	setQuery: PropTypes.func
};
