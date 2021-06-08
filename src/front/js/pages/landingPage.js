import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import handgunImage from "../../img/handgun.jpeg";
import rifleImage from "../../img/rifle.jpeg";
import shotgunImage from "../../img/shotgun.jpeg";
import everyDayCarryImage from "../../img/Concealed-Carry.jpeg";
import homeDefenseImage from "../../img/home-defense.jpeg";
import huntingImage from "../../img/hunt.jpeg";
import competitionImage from "../../img/pistol-competition.jpeg";
import collectibleImage from "../../img/collectible.jpeg";

import { Jumbotron, Container, Carousel, Row, Col } from "react-bootstrap";
import "../../styles/home.scss";

export const LandingPage = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Jumbotron fluid className="w-100 d-flex align-items-center shadow-lg">
				<Container className="jumbo-text">
					<h1>Interested in guns, I see...</h1>
					<p>
						Guniverse is a place where both old-time gun enthusiasts and those who are not familiar with the
						world of firearms can learn.
					</p>
				</Container>
			</Jumbotron>

			<Container className="d-flex flex-column justify-content-center gun-section">
				<h2 className="text-center mb-4"> Guns by Category</h2>
				<Row>
					<Col md={12} lg={4} className="my-2">
						<Container className="handgunscat">
							<Link to="/category/handguns">
								<img
									className="rounded shadow"
									src="https://i.ibb.co/1MkMNpq/handgun.jpg"
									alt="Second slide"
								/>
							</Link>
							<h1>Handguns</h1>
						</Container>
					</Col>
					<Col md={12} lg={4} className="my-2">
						<Container className="riflescat">
							<Link to="/category/rifles">
								<img
									className="rounded shadow"
									src="https://i.ibb.co/k0KktfH/photo-1591123720164-de1348028a82.jpg"
									alt="Second slide"
								/>
							</Link>
							<h1>Rifles</h1>
						</Container>
					</Col>
					<Col md={12} lg={4} className="my-2">
						<Container className="shotgunscat">
							<Link to="/category/shotguns">
								<img
									className="rounded shadow"
									src="https://i.ibb.co/cJb54Gv/shotgun.jpg"
									alt="Second slide"
								/>
							</Link>
							<h1>Shotguns</h1>
						</Container>
					</Col>
				</Row>
			</Container>

			{/* Carousel starts here */}
			<Container fluid className="d-flex flex-column justify-content-center gun-section">
				<h2 className="text-center mb-4">Guns by Use</h2>
				<Carousel className="content">
					<Carousel.Item>
						<Container>
							<Row>
								<Col className="my-2">
									<h1>Every-day Carry</h1>
									<Link to="/activity/everydaycarry">
										<img
											className="d-block w-100 rounded shadow"
											src="https://i.ibb.co/NNwQKcT/Womens-Concealed-Carry-Course.jpg"
											alt="Second slide"
										/>
									</Link>
								</Col>
								<Col className="my-2">
									<h1>Home Defense</h1>
									<Link to="/activity/homedefense">
										<img
											className="d-block w-100 rounded shadow"
											src="https://i.ibb.co/88b7rRm/balspr18-home-carbine.jpg"
											alt="Second slide"
										/>
									</Link>
								</Col>
								<Col className="my-2">
									<h1>Hunting</h1>
									<Link to="/activity/hunting">
										<img
											className="d-block w-100 rounded shadow"
											src="https://i.ibb.co/gRWkjqx/hunt.jpg"
											alt="Second slide"
										/>
									</Link>
								</Col>
							</Row>
						</Container>
					</Carousel.Item>
					<Carousel.Item>
						<Container>
							<Row>
								<Col>
									<Link to="/activity/competitiveshooting">
										<img
											className="rounded shadow"
											src="https://i.ibb.co/rpF2XwN/pistol-competition.jpg"
											alt="Second slide"
										/>
									</Link>
									<h1>Competitive Shooting</h1>
								</Col>
								<Col>
									<Link to="/activity/collecting">
										<img
											className="rounded shadow"
											src="https://i.ibb.co/hBn1Nxd/download-2.jpg"
											alt="Second slide"
										/>
									</Link>
									<h1>Collecting</h1>
								</Col>
							</Row>
						</Container>
					</Carousel.Item>
				</Carousel>
			</Container>
			<Container className="d-flex flex-column gun-section link-section">
				<h2 className="text-center mb-4">Useful Links</h2>
				<Row>
					<Col md={12} lg={3} className="d-flex justify-content-center text-center">
						<a href="https://www.youtube.com/watch?v=W2Vrc2R1oGU">
							<h6 className="border shadow p-4 rounded">Universal Firearm Safety Rules</h6>
						</a>
					</Col>
					<Col md={12} lg={3} className="d-flex justify-content-center text-center">
						<a href="https://www.usacarry.com/concealed_carry_permit_information.html">
							<h6 className="border shadow p-4 rounded">Concealed Carry Permit Info By State</h6>
						</a>
					</Col>
					<Col md={12} lg={3} className="d-flex justify-content-center text-center">
						<a href="https://www.gunbroker.com/c/article/choosing-your-first-handgun/">
							<h6 className="border shadow p-4 rounded">Choosing Your First Handgun</h6>
						</a>
					</Col>
					<Col md={12} lg={3} className="d-flex justify-content-center text-center">
						<a href="https://www.firearmsnews.com/editorial/first-time-gun-buyers-guide/385960">
							<h6 className="border shadow p-4 rounded">First-Time Gun Buyer&apos;s Guide</h6>
						</a>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
