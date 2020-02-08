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
					<p className="h1">EDUCATION </p>
				</div>
				<div className="row secondary py-5 d-block ml-5">
					<p className="h1">SKILLS </p>
				</div>
				<div className="row secondary py-5 d-block ml-5">
					<p className="h1">WORK HISTORY </p>
				</div>
			</div>
		</div>
	);
};
