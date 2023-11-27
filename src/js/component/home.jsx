import React from "react";
import Crono from "./crono.js";

//include images into your bundle


//create your first component
const Home = ({digito1, digito2, digito3, digito4, digito5, digito6}) => {
	return (
		<div className="text-center">
			<Crono digito1={digito1}digito2={digito2}digito3={digito3}digito4={digito4}digito5={digito5}digito6={digito6}/>
		</div>
	);
};

export default Home;
