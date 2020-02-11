import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Profile = () => {
	return (
		<div className="wrapper">
			<div className="container-fluid">
				<div className="row profile ml-0 py-5 d-flex justify-content-end">
					<span className="h3 section-heading">MY PROFILE</span>
				</div>
				<div className="row secondary py-5 d-block ml-5">
					<p className="h3">EDUCATION </p>
					<p className="h3">4-year degree in Management, Computer Science from FIU</p>
					<p className="h3">Full-stack Web Development certification from Miami staple 4Geeks Academy</p>
				</div>
				<div className="row secondary py-5 d-block ml-5">
					<p className="h3">SKILLS </p>
				</div>
				<div className="row secondary py-5 d-block ml-5">
					<p className="h3">WORK HISTORY </p>
				</div>
			</div>
		</div>
	);
};
