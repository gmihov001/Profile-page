import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Wandetracker from "../../img/wandertracker.jpg";

export const Project1 = () => {
	return (
		<div className="wrapper">
			<div className="container-fluid px-0">
				<div className="row portfolio ml-0 py-5 d-flex justify-content-end">
					<span className="h3 section-heading">Wandertracker</span>
				</div>
				<div className="row secondary py-5">
					<div className="row m-auto">
						<div className="column #1 bg-secondary"></div>
						<div className="column #2 bg-secondary"></div>
					</div>
				</div>
			</div>
		</div>
	);
};
