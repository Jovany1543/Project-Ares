import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { ListGroup, Navbar, Row, Col } from "react-bootstrap";

import "../../styles/gunList.scss";

export const SearchList = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mx-5">
			<Row className="justify-content-center">
				<Col sm={10} className="top-spacing-20">
					<Navbar expand="lg" variant="dark" bg="dark">
						<Navbar.Brand href="#" className="mr-auto">
							&quot;{props.query}&quot;
						</Navbar.Brand>
					</Navbar>
					<ListGroup variant="flush">
						{store.gunData.length > 0 &&
							store.gunData
								.filter(gun => gun.name.toLowerCase().includes(props.query))
								.map((gun, index) => {
									return (
										<ListGroup.Item key={index} className="bg-color">
											<Link to={"/gun/" + gun.name}>
												<Row className="gunList-row">
													<Col className="pictureCol">
														<img src={gun.imageUrl} />
													</Col>
													<Col>
														<h6>Name:</h6>
														<p>{gun.displayName}</p>
													</Col>
													<Col>
														<h6>Manufacturer:</h6>
														<p>{gun.manufacturer}</p>
													</Col>
													<Col>
														<h6>Category:</h6>
														<p>{gun.displayCategoryName}</p>
													</Col>
													<Col>
														<h6>Caliber:</h6>
														<p>{gun.caliber}</p>
													</Col>
													<Col>
														<h6>Firing Modes:</h6>
														<p>{gun.guntype}</p>
													</Col>
												</Row>
											</Link>
										</ListGroup.Item>
									);
								})}
					</ListGroup>
				</Col>
			</Row>
		</div>
	);
};

SearchList.propTypes = {
	query: PropTypes.string,
	setQuery: PropTypes.func
};
