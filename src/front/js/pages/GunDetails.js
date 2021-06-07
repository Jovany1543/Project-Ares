import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import gunImg from "../../img/hunt.jpeg";

// Components
// import { MiniJumbo } from "../component/MiniJumbo";

// Stylesheet
import "../../styles/GunDetails.scss";

// Bootstrap
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
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
			<h3 className="mt-4">{gun == undefined ? "loading" : gun.displayCategoryName}</h3>
			<h1 className="text-center">{gun == undefined ? "loading" : gun.displayName}</h1>
			<h2 className="text-center">{gun == undefined ? "loading" : gun.manufacturer}</h2>
			<Image className="gun-img" src={gun == undefined ? "" : gun.imageUrl} />

			<div className="text-right">
				<FontAwesomeIcon className="bookmark-icon my-2" icon={faStar} />
			</div>
			<p>{gun == undefined ? "loading" : gun.description}</p>
			<h3 className="text-center">Specs</h3>
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
