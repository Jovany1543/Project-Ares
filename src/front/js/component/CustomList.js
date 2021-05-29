import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import gunImg from "../../img/hunt.jpeg";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
// Stylesheet
import "../../styles/GunActivity.scss";

export const CustomList = props => {
	const { store, actions } = useContext(Context);
	return (
		<Container>
			<h2>{props.title}</h2>
			{store.gunData.map((item, index) => {
				return (
					<Row key={index} className="recommended-row">
						<Col className="p-0">
							<Image className="custom-thumbnail p-0" src={gunImg} thumbnail />
						</Col>
						<Col>{item.name}</Col>
						<Col>{item.type}</Col>
						<Col>Stats</Col>
						<Col>Stats</Col>
					</Row>
					/* <Row className="recommended-row">
						<Col className="p-0">
							<Image className="custom-thumbnail p-0" src={gunImg} thumbnail />
						</Col>
						<Col>Name</Col>
						<Col>Stats</Col>
						<Col>Stats</Col>
						<Col>Stats</Col>
					</Row>
					<Row className="recommended-row">
						<Col className="p-0">
							<Image className="custom-thumbnail p-0" src={gunImg} thumbnail />
						</Col>
						<Col>Name</Col>
						<Col>Stats</Col>
						<Col>Stats</Col>
						<Col>Stats</Col>
					</Row>
					<Row className="recommended-row">
						<Col className="p-0">
							<Image className="custom-thumbnail p-0" src={gunImg} thumbnail />
						</Col>
						<Col>Name</Col>
						<Col>Stats</Col>
						<Col>Stats</Col>
						<Col>Stats</Col>
					</Row>
					<Row className="recommended-row">
						<Col className="p-0">
							<Image className="custom-thumbnail p-0" src={gunImg} thumbnail />
						</Col>
						<Col>Name</Col>
						<Col>Stats</Col>
						<Col>Stats</Col>
						<Col>Stats</Col>
                    </Row> */
				);
			})}
		</Container>
	);
};

CustomList.propTypes = {
	title: PropTypes.string
};
