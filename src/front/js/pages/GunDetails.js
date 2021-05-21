import React, { useContext } from "react";
import { Context } from "../store/appContext";
import gunImg from "../../img/hunt.jpeg";

// Components
// import { MiniJumbo } from "../component/MiniJumbo";

// Stylesheet
import "../../styles/GunDetails.scss";

// Bootstrap
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

export const GunDetails = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container>
			<h3 className="mt-4">Gun Category</h3>
			<h1 className="text-center">Name/Variant</h1>
			<h2 className="text-center">Manufacturer</h2>
			<Image className="gun-img" src={gunImg} />
			<div className="text-right">
				<FontAwesomeIcon className="bookmark-icon my-2" icon={faStar} />
			</div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aliquid cumque, esse doloremque
				veritatis consequuntur aliquam minima laborum magni assumenda suscipit illum autem non facere, qui
				similique dolore vero repudiandae eligendi voluptatibus quis dolorem! Illo eos rem hic quae nemo id
				perferendis totam, vero at eaque pariatur, numquam adipisci laudantium.
			</p>
		</Container>
	);
};
