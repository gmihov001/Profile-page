import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Portfolio = () => {
	return (
		<>
			<div className="wrapper portfolio">
				<div className="row mt-5 pt-5">Here are some of my projects</div>
			</div>
			<div className="wrapper secondary">See below.</div>
		</>
	);
};
