import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import handgunImage from "../../img/handgun.jpeg";
import rifleImage from "../../img/rifle.jpeg";
import shotgunImage from "../../img/shotgun.jpeg";
import everyDayCarryImage from "../../img/Concealed-Carry.jpg";
import homeDefenseImage from "../../img/home-defense.jpg";
import huntingImage from "../../img/hunt.jpeg";
import competitionImage from "../../img/pistol-competition.jpg";
import collectibleImage from "../../img/collectible.jpg";

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
							<Link to="/gunlist">
								<img className="rounded shadow" src={handgunImage} alt="Second slide" />
							</Link>
							<h1>Handguns</h1>
						</Container>
					</Col>
					<Col md={12} lg={4} className="my-2">
						<Container className="riflescat">
							<Link to="/gunlist">
								<img className="rounded shadow" src={rifleImage} alt="Second slide" />
							</Link>
							<h1>Rifles</h1>
						</Container>
					</Col>
					<Col md={12} lg={4} className="my-2">
						<Container className="shotgunscat">
							<Link to="/gunlist">
								<img className="rounded shadow" src={shotgunImage} alt="Second slide" />
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
									<Link to="/activity">
										<img
											className="d-block w-100 rounded shadow"
											src={everyDayCarryImage}
											alt="Second slide"
										/>
									</Link>
								</Col>
								<Col className="my-2">
									<h1>Home Defense</h1>
									<Link to="/activity">
										<img
											className="d-block w-100 rounded shadow"
											src={homeDefenseImage}
											alt="Second slide"
										/>
									</Link>
								</Col>
								<Col className="my-2">
									<h1>Hunting</h1>
									<Link to="/activity">
										<img
											className="d-block w-100 rounded shadow"
											src={huntingImage}
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
									<Link to="/activity">
										<img className="rounded shadow" src={competitionImage} alt="Second slide" />
									</Link>
									<h1>Competitive Shooting</h1>
								</Col>
								<Col>
									<Link to="/activity">
										<img className="rounded shadow" src={collectibleImage} alt="Second slide" />
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
