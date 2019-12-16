import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Profile = () => {
	return (
		<>
			<div className="wrapper profile">
				<div className="row main mt-5 pt-5">This is my Professional Profile.</div>
			</div>
			<div className="wrapper secondary">See below.</div>
		</>
	);
};
