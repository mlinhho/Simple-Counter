import React, { useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Timer } from "./Timer";

//create your first component
const Home = (props) => {
	return (
		<div className="d-flex justify-content-center">
			<Timer />
		</div>
	);
};

export default Home;
