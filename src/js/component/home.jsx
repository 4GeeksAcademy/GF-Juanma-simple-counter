import React from "react";
import SecondCounter from "./contador";

//include images into your bundle


//create your first component
const Home = (props) => {
	return (
		<div className="text-center">
			<SecondCounter
				segundos1={props.segundos1}
				segundos2={props.segundos2}
				segundos3={props.segundos3}
				segundos4={props.segundos4}
				segundos5={props.segundos5}
				segundos6={props.segundos6}
			/>
		</div>
	);
};

export default Home;
