import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import {
	ListGroup,
	InputGroup,
	Form,
	FormControl,
	Navbar,
	Brand,
	Container,
	Row,
	Col,
	Pagination
} from "react-bootstrap";
import { CustomList } from "../component/CustomList";
import rigoImageUrl from "../../img/rigo-baby.jpeg";

export const Bookmarks = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	// Add userID

	useEffect(() => {
		actions.getBookmarkData();
	});

	return (
		<div className="m-5">
			<Navbar expand="lg" variant="dark" bg="dark">
				<Navbar.Brand href="#" className="mr-auto">
					Bookmarks
				</Navbar.Brand>
			</Navbar>
			<ListGroup variant="flush">
				{console.log(store.bookmarkData)}
				{store.bookmarkData.length > 0 &&
					store.bookmarkData.map((gun, index) => {
						return (
							<ListGroup.Item key={index} className="bg-color">
								<Link to={"/gun/" + gun.name}>
									<Row className="gunList-row">
										<Col>
											<Form.Check
												inline
												name="group1"
												type={gun.type}
												id={`inline-${gun.type}-1`}
											/>
											<img className="d-block w-55" src={gun.imageUrl} alt="Second slide" />
										</Col>
										<Col>
											<strong>Name: </strong>
											{gun.name}
										</Col>
										<Col>
											<strong>Manufacturer: </strong>
											{gun.manufacturer}
										</Col>
										<Col>
											<strong>Category: </strong>
											{gun.category}
										</Col>
										<Col>
											<strong>Gun Type: </strong>
											{gun.guntype}
										</Col>
									</Row>
								</Link>
							</ListGroup.Item>
						);
					})}
			</ListGroup>
			{props.loggedIn ? "" : <Redirect to="/login" />}
		</div>
	);
};

Bookmarks.propTypes = {
	match: PropTypes.object,
	loggedIn: PropTypes.bool,
	setLoggedIn: PropTypes.func
};
