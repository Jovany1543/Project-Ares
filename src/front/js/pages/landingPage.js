import React, { useContext } from "react";
import { Context } from "../store/appContext";

import handgunImage from "../../img/handgun.jpeg";
import rifleImage from "../../img/rifle.jpeg";
import shotgunImage from "../../img/shotgun.jpeg";
import everyDayCarryImage from "../../img/Concealed-Carry.jpg";
import homeDefenseImage from "../../img/home-defense.jpg";
import huntingImage from "../../img/hunt.jpeg";
import competitionImage from "../../img/pistol-competition.jpg";
import collectibleImage from "../../img/collectible.jpg";

import { Jumbotron, Container, Carousel, Row, Item, Caption, Col, Image } from "react-bootstrap";
import "../../styles/home.scss";

export const LandingPage = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Jumbotron fluid className="w-100">
				<Container>
					<h1>Interested in guns I see...</h1>
					<p>
						Guniverse is a place where both old time gun ethusiasts and those who are not familiar with the
						world of firearms can learn.
					</p>
				</Container>
			</Jumbotron>

			<Container>
				<h4> Guns by Category</h4>
				<Row>
					<Col>
						<Container className="handgunscat">
							<img src={handgunImage} alt="Second slide" />
							<h1>Handguns</h1>
						</Container>
					</Col>
					<Col>
						<Container className="riflescat">
							<img src={rifleImage} alt="Second slide" />
							<h1>Rifles</h1>
						</Container>
					</Col>
					<Col>
						<Container className="shotgunscat">
							<img src={shotgunImage} alt="Second slide" />
							<h1>Shotguns</h1>
						</Container>
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
									<h1>Every-day Carry</h1>
									<img className="d-block w-100" src={everyDayCarryImage} alt="Second slide" />
								</Col>
								<Col>
									<h1>Home Defense</h1>
									<img className="d-block w-100" src={homeDefenseImage} alt="Second slide" />
								</Col>
								<Col>
									<h1>Hunting</h1>
									<img className="d-block w-100" src={huntingImage} alt="Second slide" />
								</Col>
							</Row>
						</Container>
					</Carousel.Item>
					<Carousel.Item>
						<Container>
							<Row>
								<Col>
									<img className="" src={competitionImage} alt="Second slide" />
									<h1>Competitive Shooting</h1>
								</Col>
								<Col>
									<img className="" src={collectibleImage} alt="Second slide" />
									<h1>Collecting</h1>
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
