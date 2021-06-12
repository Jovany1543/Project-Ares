import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
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
import { faStar as farFaStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fasFaStar } from "@fortawesome/free-solid-svg-icons";
import { set } from "react-hook-form";

export const GunDetails = props => {
	const { store, actions } = useContext(Context);
	const params = useParams().name;
	const gun = store.gunData.filter(gun => gun.name.includes(params))[0];
	let bookmarkChecker = store.bookmarkData.filter(bookmark => {
		return bookmark.id == gun.id;
	});
	const [bookmark, setBookmark] = useState(bookmarkChecker == 0 ? false : true);

	// console.log("User: ", sessionStorage.getItem("guniverse_user"));
	// console.log("Gun ID: ", gun == undefined ? "" : gun.id);

	console.log(store.bookmarkData);

	const handleClick = e => {
		if (props.loggedIn) {
			if (bookmark) {
				setBookmark(!bookmark);
				actions.deleteBookmark(gun);
			} else {
				setBookmark(!bookmark);
				actions.addBookmark(gun);
			}
		} else {
			actions.setAlert({
				type: "danger",
				msg: "Please login to save your bookmark.",
				show: true
			});
			return;
		}
	};

	useEffect(() => {
		actions.getBookmarkData();
	}, [bookmark]);

	return (
		<Container>
			<h4 className="mt-4">{gun == undefined ? "loading" : gun.displayCategoryName}</h4>
			<div className="d-flex flex-column justify-content-center align-items-center">
				<h1 className="text-center">{gun == undefined ? "loading" : gun.displayName}</h1>
				<h2 className="text-center mt-0">{gun == undefined ? "loading" : gun.manufacturer}</h2>
				<Image className="gun-img" src={gun == undefined ? "" : gun.imageUrl} />
			</div>

			<div className="d-flex justify-content-end">
				<div className="btn fa-stack fa-2x" onClick={handleClick}>
					{bookmark ? (
						<FontAwesomeIcon className="bookmark-icon fa-stack-1x" icon={fasFaStar} />
					) : (
						<FontAwesomeIcon className="bookmark-icon fa-stack-1x" icon={farFaStar} />
					)}
				</div>
			</div>
			<p className="my-4">{gun == undefined ? "loading" : gun.description}</p>
			<h3 className="text-center">Specs</h3>
			<Row className="details-row text-center shadow my-4">
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
		</Container>
	);
};
GunDetails.propTypes = {
	loggedIn: PropTypes.bool,
	setLoggedIn: PropTypes.func
};
