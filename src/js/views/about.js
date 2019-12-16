import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const About = () => {
	return (
		<>
			<div className="wrapper">
				<div className="row about ml-0 py-5">
					<span className="magenta h3"> I am a Miami-based Web developer. </span>
				</div>
				<div className="row secondary">
					<span className="h4">
						I love to travel. With every next trip I become better at communicating with and understanding
						people from different cultures. Being able to communicate effectively and understand those
						around us is one of the most crucial soft skills in the workplace.
					</span>
				</div>
			</div>
		</>
	);
};
