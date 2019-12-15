import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Profile = () => {
	return (
		<>
			<div className="container main mt-5 pt-5">
				<div className="row">This is my Professional Profile.</div>
			</div>
		</>
	);
};
