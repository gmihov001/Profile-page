import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const About = () => {
	return (
		<>
			<div className="wrapper">
				<div className="row about ml-0 py-5 d-flex justify-content-end">
					<span className="h3 section-heading"> ABOUT ME </span>
				</div>
				<div className="row secondary h5">
					<span>I am based in South Floirida.</span>
					<br />
					<span>
						I love to travel and have been in places from Turkey to Peru and from Norway to Egypt.
						<br />
						As Mark Twain wrote,
						<span className="purple">
							{" "}
							<i>&quot;Travel is fatal to prejudice, bigotry, and narrow-mindedness&quot;</i>{" "}
						</span>
						<br />
						With every next trip I become better at communicating with and understanding people from
						different cultures. Being able to communicate effectively and understand those around us is one
						of the most crucial soft skills in the workplace.
					</span>
				</div>
			</div>
		</>
	);
};
