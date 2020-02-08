import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const About = () => {
	return (
		<div className="wrapper">
			<div className="container-fluid">
				<div className="row row1 about py-5 d-flex justify-content-end">
					<span className="h3 section-heading"> ABOUT ME </span>
				</div>
			</div>
		</div>
	);
};
