import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
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

import "../../styles/gunList.scss";

export const GunList = () => {
	const { store, actions } = useContext(Context);
	const category = useParams().name;

	// console.log("this is the category:", category);
	// console.log("this is the gunData:", store.gunData);
	actions.getGunData();

	const categorized_guns = store.gunData.filter(gun => gun.category.includes(category.toLowerCase()))[0];

	console.log("this is the category_object:", categorized_guns);

	return categorized_guns == undefined ? (
		"loading"
	) : (
		<div className="text-center mx-5">
			<Row className="justify-content-center">
				<Col sm={10} className="top-spacing-20">
					<Navbar expand="lg" variant="dark" bg="dark">
						<Navbar.Brand href="#" className="mr-auto">
							{categorized_guns.displayCategoryName}
						</Navbar.Brand>
					</Navbar>
					<ListGroup variant="flush">
						{store.gunData.length > 0 &&
							store.gunData
								.filter(gun => gun.category.includes(category.toLowerCase()))
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

					{/* <Pagination className="ml-auto pr-2">
						<Pagination.First />
						<Pagination.Prev />
						<Pagination.Item>{1}</Pagination.Item>
						<Pagination.Ellipsis />

						<Pagination.Item>{10}</Pagination.Item>
						<Pagination.Item>{11}</Pagination.Item>
						<Pagination.Item active>{12}</Pagination.Item>
						<Pagination.Item>{13}</Pagination.Item>
						<Pagination.Item disabled>{14}</Pagination.Item>

						<Pagination.Ellipsis />
						<Pagination.Item>{20}</Pagination.Item>
						<Pagination.Next />
						<Pagination.Last />
					</Pagination> */}
				</Col>
			</Row>
		</div>
	);
};
