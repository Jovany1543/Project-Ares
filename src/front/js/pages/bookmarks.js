import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
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

	return (
		<div className="m-5">
			<Navbar expand="lg" variant="dark" bg="dark">
				<Navbar.Brand href="#" className="mr-auto">
					Bookmarks
				</Navbar.Brand>
			</Navbar>
			<ListGroup variant="flush">
				{store.gunData.map((item, index) => {
					return (
						<ListGroup.Item key={index} className="bg-color">
							<Row className="gunList-row">
								<Col>
									<Form.Check inline label="1" name="group1" type={type} id={`inline-${type}-1`} />
									<img
										className="d-block w-55"
										src="https://via.placeholder.com/100"
										alt="Second slide"
									/>
								</Col>
								<Col>{item.name}</Col>
								<Col>{item.type}</Col>
								<Col>{item.id}</Col>
							</Row>
						</ListGroup.Item>
					);
				})}
			</ListGroup>

			<Pagination className="ml-auto pr-2 justify-content-center">
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
			</Pagination>
		</div>
	);
};

Bookmarks.propTypes = {
	match: PropTypes.object
};
