import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const About = () => {
	return (
		<>
			<div className="container main mt-5 pt-5">
				<div className="row">I am a Miami-based Web developer.</div>
			</div>
		</>
	);
};
