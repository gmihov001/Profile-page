import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Project1 = () => {
	return (
		<>
			<div className="wrapper">
				<div className="row ml-0 py-5 d-flex justify-content-end">
					<span className="h3 section-heading">MY PROFILE</span>
				</div>
				<div className="row secondary py-5"></div>
			</div>
		</>
	);
};
