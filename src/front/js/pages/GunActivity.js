import React, { useContext } from "react";
import { Context } from "../store/appContext";
// Components
import { MiniJumbo } from "../component/MiniJumbo";
import { CustomList } from "../component/CustomList";
// Stylesheet
import "../../styles/GunActivity.scss";

export const GunActivity = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<MiniJumbo />
			<h1 className="text-center">Hunting</h1>
			<div className="d-flex justify-content-center">
				<p className="w-75">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi amet culpa est fuga eaque,
					laboriosam nesciunt odit in quidem minima perferendis laborum magni nulla accusantium hic sit ullam
					qui doloremque nobis doloribus tenetur! Numquam ipsam, cumque sit ea id consequatur atque eius sunt
					laborum rem tenetur aliquid commodi. Rerum, quasi?
				</p>
			</div>
			<CustomList title="Recommended for:" />
		</>
	);
};
