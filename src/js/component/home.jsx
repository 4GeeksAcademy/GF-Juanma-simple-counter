import React from "react";
import SecondCounter from "./contador";
//include images into your bundle


//create your first component
const Home = (props) => {
	return (
		<div className="text-center">
		<SecondCounter  />	
		</div>
	);
};

export default Home;
