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
	return (
		<>
			<Image
				className="miniJumbo"
				src={activity_object == undefined ? "loading" : activity_object.imageUrl}
				fluid
			/>
			<Row className="justify-content-center">
				<Col sm={10} className="top-spacing-20">
					<h1 className="text-center">
						{activity_object == undefined ? "loading" : activity_object.display_name}
					</h1>
					<div className="d-flex justify-content-center">
						<p className="w-75">{activity_object == undefined ? "loading" : activity_object.description}</p>
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
													<Col>
														<img
															className="d-block w-55"
															src={gun.imageUrl}
															alt="Second slide"
														/>
													</Col>

													<Col>
														<h6>Name:</h6>
														<p>{gun.displayName}</p>
													</Col>
													<Col>
														<h6>Type:</h6>
														<p>{gun.guntype}</p>
													</Col>
													<Col>
														<h6>ID:</h6>
														<p>{gun.id}</p>
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
