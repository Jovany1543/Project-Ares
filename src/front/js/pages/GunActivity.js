import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
// Components
import { MiniJumbo } from "../component/MiniJumbo";
import { ListGroup, Row, Col, Form } from "react-bootstrap";
// Stylesheet
import "../../styles/GunActivity.scss";

export const GunActivity = () => {
	const { store, actions } = useContext(Context);
	const activity = useParams().name;
	const activity_object = store.activityData.filter(item => item.name.includes(activity.toLowerCase()))[0];
	console.log("this is the array", activity_object);
	console.log("this is the data on gun activity array:" + store.activityData);
	return (
		<>
			<MiniJumbo />
			<h1 className="text-center">{activity_object == undefined ? "loading" : activity_object.display_name}</h1>
			<div className="d-flex justify-content-center">
				<p className="w-75">{activity_object == undefined ? "loading" : activity_object.description}</p>
			</div>
			<ListGroup variant="flush">
				{store.gunData.length > 0 &&
					store.gunData
						.filter(item => item.activities.includes(activity.toLowerCase()))
						.map((item, index) => {
							return (
								<ListGroup.Item key={index} className="bg-color">
									<Row className="gunList-row">
										<Col>
											<Form.Check
												inline
												label="1"
												name="group1"
												type={item.type}
												id={`inline-${item.type}-1`}
											/>
											<img
												className="d-block w-55"
												src="https://via.placeholder.com/100"
												alt="Second slide"
											/>
										</Col>
										<Col>{item.name}</Col>
										<Col>{item.guntype}</Col>
										<Col>{item.id}</Col>
									</Row>
								</ListGroup.Item>
							);
						})}
			</ListGroup>
		</>
	);
};
