import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { ListGroup, Navbar, Brand, Container, Row, Col, Pagination } from "react-bootstrap";
import "../../styles/gunList.scss";

export const GunList = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<Container>
				<Navbar expand="lg" variant="dark" bg="dark">
					<Navbar.Brand href="#" className="mr-auto">
						Gun Category
					</Navbar.Brand>
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
				</Navbar>

				<ListGroup variant="flush">
					<ListGroup.Item>
						<Row>
							<Col>
								<img
									className="d-block w-55"
									src="https://via.placeholder.com/100"
									alt="Second slide"
								/>
							</Col>
							<Col>Stats</Col>
							<Col>Stats</Col>
							<Col>Stats</Col>
						</Row>
					</ListGroup.Item>
					<ListGroup.Item>
						<Row>
							<Col>
								<img
									className="d-block w-55"
									src="https://via.placeholder.com/100"
									alt="Second slide"
								/>
							</Col>
							<Col>Stats</Col>
							<Col>Stats</Col>
							<Col>Stats</Col>
						</Row>
					</ListGroup.Item>
					<ListGroup.Item>
						<Row>
							<Col>
								<img
									className="d-block w-55"
									src="https://via.placeholder.com/100"
									alt="Second slide"
								/>
							</Col>
							<Col>Stats</Col>
							<Col>Stats</Col>
							<Col>Stats</Col>
						</Row>
					</ListGroup.Item>
					<ListGroup.Item>
						<Row>
							<Col>
								<img
									className="d-block w-55"
									src="https://via.placeholder.com/100"
									alt="Second slide"
								/>
							</Col>
							<Col>Stats</Col>
							<Col>Stats</Col>
							<Col>Stats</Col>
						</Row>
					</ListGroup.Item>
					<ListGroup.Item>
						<Row>
							<Col>
								<img
									className="d-block w-55"
									src="https://via.placeholder.com/100"
									alt="Second slide"
								/>
							</Col>
							<Col>Stats</Col>
							<Col>Stats</Col>
							<Col>Stats</Col>
						</Row>
					</ListGroup.Item>
					<ListGroup.Item>
						<Row>
							<Col>
								<img
									className="d-block w-55"
									src="https://via.placeholder.com/100"
									alt="Second slide"
								/>
							</Col>
							<Col>Stats</Col>
							<Col>Stats</Col>
							<Col>Stats</Col>
						</Row>
					</ListGroup.Item>
				</ListGroup>
			</Container>
		</div>
	);
};
