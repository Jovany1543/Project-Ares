import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Jumbotron, Container, Carousel, Row, Item, Caption, Col } from "react-bootstrap";
import "../../styles/home.scss";

export const LandingPage = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Jumbotron fluid className="w-100">
				<Container>
					<h1>Fluid jumbotron</h1>
					<p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
				</Container>
			</Jumbotron>

			<Container>
				<h4> Guns by Category</h4>
				<Row>
					<Col>
						<img className="d-block w-100" src="https://via.placeholder.com/150" alt="Second slide" />
					</Col>
					<Col>
						<img className="d-block w-100" src="https://via.placeholder.com/150" alt="Second slide" />
					</Col>
					<Col>
						<img className="d-block w-100" src="https://via.placeholder.com/150" alt="Second slide" />
					</Col>
				</Row>
			</Container>

			<Container>
				<h4>Guns by Use</h4>
				<Carousel className="content">
					<Carousel.Item>
						<Container>
							<Row>
								<Col>
									<img
										className="d-block w-100"
										src="https://via.placeholder.com/100"
										alt="Second slide"
									/>
								</Col>
								<Col>
									<img
										className="d-block w-100"
										src="https://via.placeholder.com/100"
										alt="Second slide"
									/>
								</Col>
								<Col>
									<img
										className="d-block w-100"
										src="https://via.placeholder.com/100"
										alt="Second slide"
									/>
								</Col>
							</Row>
						</Container>
					</Carousel.Item>
					<Carousel.Item>
						<Container>
							<Row>
								<Col className="d-flex justify-content-center">
									<img
										className="d-block w-55"
										src="https://via.placeholder.com/100"
										alt="Second slide"
									/>
								</Col>
								<Col className="d-flex justify-content-center">
									<img
										className="d-block w-55"
										src="https://via.placeholder.com/100"
										alt="Second slide"
									/>
								</Col>
							</Row>
						</Container>
					</Carousel.Item>
				</Carousel>
			</Container>
			<Container>
				<h4>Useful Links</h4>
				<Row>
					<Col>1 of 2</Col>
					<Col>2 of 2</Col>
				</Row>
				<Row>
					<Col>1 of 2</Col>
					<Col>2 of 2</Col>
				</Row>
			</Container>
		</div>
	);
};
