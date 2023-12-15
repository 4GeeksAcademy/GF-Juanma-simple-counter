import React from "react";

//include images into your bundle

import SecondCounter from "./contador";
//create your first component
const Home = () => {
	return (
		<div className="text-center">
		<SecondCounter />	
		</div>
	);
};

export default Home;
