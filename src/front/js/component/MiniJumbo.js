import React from "react";
import Image from "react-bootstrap/Image";
import PropTypes from "prop-types";
import "../../styles/GunActivity.scss";
import gunImg from "../../img/hunt.jpeg";

export const MiniJumbo = () => {
	return (
		<>
			<Image className="miniJumbo" src={gunImg} fluid />
		</>
	);
};

// MiniJumbo.propTypes = {
// 	src: PropTypes.string
// };
