import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { ListGroup, Navbar, Row, Col } from "react-bootstrap";

import "../../styles/gunList.scss";

export const SearchList = props => {
	const { store, actions } = useContext(Context);

	// function titleCase(str) {
	// 	str = string.toLowerCase().split(" ");
	// 	for (let i = 0; i < str.length; i++) {
	// 		str[i] = str[i][0].toUpperCase() + str[i].slice(1);
	// 	}

	// 	return sentence.join(" ");
	// }

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
											<Row className="gunList-row">
												<Col>
													<img
														className="d-block w-55"
														src="https://via.placeholder.com/100"
														alt="Second slide"
													/>
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
