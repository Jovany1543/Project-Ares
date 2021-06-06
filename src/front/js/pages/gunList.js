import React, { useContext } from "react";
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
import "../../styles/gunList.scss";

export const GunList = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mx-5">
			<Row>
				<Col sm={2} className="top-spacing-80">
					<ListGroup variant="flush" className="filters-listgroup">
						<div className="filters-header">
							<h4>Filters</h4>
						</div>
						<ListGroup.Item className="bg-color">
							Type:
							<Form.Group controlId="formBasicCheckbox">
								<Form.Check type="checkbox" label="Check me out" />
							</Form.Group>
							<Form.Group controlId="formBasicCheckbox">
								<Form.Check type="checkbox" label="Check me out" />
							</Form.Group>
							<Form.Group controlId="formBasicCheckbox">
								<Form.Check type="checkbox" label="Check me out" />
							</Form.Group>
						</ListGroup.Item>
						<ListGroup.Item className="bg-color">
							Type:
							<Form.Group controlId="formBasicCheckbox">
								<Form.Check type="checkbox" label="Check me out" />
							</Form.Group>
							<Form.Group controlId="formBasicCheckbox">
								<Form.Check type="checkbox" label="Check me out" />
							</Form.Group>
							<Form.Group controlId="formBasicCheckbox">
								<Form.Check type="checkbox" label="Check me out" />
							</Form.Group>
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col sm={10} className="top-spacing-20">
					<Navbar expand="lg" variant="dark" bg="dark">
						<Navbar.Brand href="#" className="mr-auto">
							Gun Category
						</Navbar.Brand>
					</Navbar>
					<ListGroup variant="flush">
						{store.gunData.map((item, index) => {
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
										<Col>Name: {item.name}</Col>
										<Col>Type: {item.type}</Col>
										<Col>ID: {item.id}</Col>
									</Row>
								</ListGroup.Item>
							);
						})}
					</ListGroup>

					<Pagination className="ml-auto pr-2">
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
				</Col>
			</Row>
		</div>
	);
};
