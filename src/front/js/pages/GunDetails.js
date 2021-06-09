import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import gunImg from "../../img/hunt.jpeg";

// Components
// import { MiniJumbo } from "../component/MiniJumbo";

// Stylesheet
import "../../styles/GunDetails.scss";

// Bootstrap
import { Image, Container, Table, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

export const GunDetails = () => {
	const { store, actions } = useContext(Context);
	const params = useParams().name;
	const gun = store.gunData.filter(item => item.name.includes(params))[0];

	return (
		<Container>
			<h4 className="mt-4">{gun == undefined ? "loading" : gun.displayCategoryName}</h4>
			<div className="d-flex flex-column justify-content-center align-items-center">
				<h1 className="text-center">{gun == undefined ? "loading" : gun.displayName}</h1>
				<h2 className="text-center mt-0">{gun == undefined ? "loading" : gun.manufacturer}</h2>
				<Image className="gun-img" src={gun == undefined ? "" : gun.imageUrl} />
			</div>
			<div className="text-right">
				<FontAwesomeIcon className="bookmark-icon my-2" icon={faStar} />
			</div>
			<p>{gun == undefined ? "loading" : gun.description}</p>
			<h3 className="text-center">Specs</h3>
			<Row className="details-row text-center shadow">
				<Col>
					<h6>Manufacturer:</h6>
					<p>{gun == undefined ? "loading" : gun.manufacturer}</p>
				</Col>
				<Col>
					<h6>ID:</h6>
					<p>{gun == undefined ? "loading" : gun.caliber}</p>
				</Col>
				<Col>
					<h6>Barrel Length:</h6>
					<p>{gun == undefined ? "loading" : gun.barrelLength}</p>
				</Col>
				<Col>
					<h6>Capacity:</h6>
					<p>{gun == undefined ? "loading" : gun.capacity}</p>
				</Col>
				<Col>
					<h6>Gun Type:</h6>
					<p>{gun == undefined ? "loading" : gun.guntype}</p>
				</Col>
				<Col>
					<h6>Weight:</h6>
					<p>{gun == undefined ? "loading" : gun.weight}</p>
				</Col>
			</Row>
			<Table bordered hover>
				{/* <tbody>
					{store.gunData.map((item, index) => {
						return (
							<tr key={index}>
								<th>{item.name}</th>
								<td>{item.type}</td>
							</tr>
						);
					})}
				</tbody> */}
			</Table>
		</Container>
	);
};
