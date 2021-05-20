import React, { useContext } from "react";
import { Context } from "../store/appContext";
import gunImg from "../../img/hunt.jpeg";

// Components
// import { MiniJumbo } from "../component/MiniJumbo";

// Stylesheet
// import "../../styles/GunActivity.scss";

// Bootstrap
import Image from "react-bootstrap/Image";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const GunDetails = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<h1 className="text-center">Gun Category</h1>
			<h2>Name/Variant: </h2>
			<h3>Manufacturer: </h3>
			<Image src={gunImg} />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aliquid cumque, esse doloremque
				veritatis consequuntur aliquam minima laborum magni assumenda suscipit illum autem non facere, qui
				similique dolore vero repudiandae eligendi voluptatibus quis dolorem! Illo eos rem hic quae nemo id
				perferendis totam, vero at eaque pariatur, numquam adipisci laudantium.
			</p>
			<FontAwesomeIcon icon="faStar" />
		</>
	);
};
