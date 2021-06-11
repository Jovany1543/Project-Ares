import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
// Components
import { MiniJumbo } from "../component/MiniJumbo";
import { ListGroup, Row, Col, Image } from "react-bootstrap";
// Stylesheet
import "../../styles/GunActivity.scss";

export const GunActivity = () => {
	const { store, actions } = useContext(Context);
	const activity = useParams().name;
	const activity_object = store.activityData.filter(gun => gun.name.includes(activity.toLowerCase()))[0];
	console.log("this is the array", activity_object);
	console.log("this is the data on gun activity array:" + store.activityData);
	return activity_object == undefined ? (
		<h1>Loading</h1>
	) : (
		<>
			<Image className="miniJumbo" src={activity_object.imageUrl} fluid />
			<Row className="justify-content-center">
				<Col sm={10} className="top-spacing-20">
					<h1 className="text-center">{activity_object.display_name}</h1>
					<div className="d-flex justify-content-center">
						<p className="w-75">{activity_object.description}</p>
					</div>

					<ListGroup variant="flush">
						{store.gunData.length > 0 &&
							store.gunData
								.filter(gun => gun.activities.includes(activity.toLowerCase()))
								.map((gun, index) => {
									return (
										<ListGroup.Item key={index} className="bg-color text-center">
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
				</Col>
			</Row>
		</>
	);
};
