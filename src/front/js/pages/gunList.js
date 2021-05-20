import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { ListGroup, Item, Navbar, Brand, Container, Row, Col } from "react-bootstrap";
import "../../styles/gunList.scss";

export const GunList = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<Container>
				<Navbar expand="lg" variant="dark" bg="dark">
					<Navbar.Brand href="#">Navbar</Navbar.Brand>
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
