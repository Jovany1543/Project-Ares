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
	const activity = useParams();

	return (
		<>
			<MiniJumbo />
			<h1 className="text-center">{activity.name}</h1>
			<div className="d-flex justify-content-center">
				<p className="w-75">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi amet culpa est fuga eaque,
					laboriosam nesciunt odit in quidem minima perferendis laborum magni nulla accusantium hic sit ullam
					qui doloremque nobis doloribus tenetur! Numquam ipsam, cumque sit ea id consequatur atque eius sunt
					laborum rem tenetur aliquid commodi. Rerum, quasi?
				</p>
			</div>
			<ListGroup variant="flush">
				{store.gunData.length > 0 &&
					store.gunData
						.filter(item => item.activities.includes(activity.name.toLowerCase()))
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

// gunData.filter(item => item.activities.includes("hunting"));
