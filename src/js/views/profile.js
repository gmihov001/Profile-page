import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Profile = () => {
	return (
		<div className="wrapper">
			<div className="container-fluid px-0">
				<div className="row profile ml-0 py-5 d-flex justify-content-end">
					<span className="h3 section-heading">MY PROFILE</span>
				</div>
				<div className="row secondary py-3 d-block ml-5">
					<p className="h5">EDUCATION </p>
					<p className="h5">4-year degree in Management, Computer Science from FIU</p>
					<p className="h5">Full-stack Web Development Certification from Miami staple 4Geeks Academy</p>
				</div>
				<div className="row secondary py-3 d-block ml-5">
					<p className="h5">SKILLS </p>
					<p className="h5">Web Technologies & Frameworks (HTML5, CSS3, Webpack, Document Object Model),</p>
					<p className="h5">Scripts/UI (JavaScript, AJAX, BootStrap, React, Context, Rest),</p>
					<p className="h5">Databases and ORM (MySQL, PostgreSQL, Flask, SQLAlchemy),</p>
					<p className="h5">Web Debug (Chrome developer tools),</p>
					<p className="h5">Back-end (Python, Java),</p>
					<p className="h5">Other tools (Git, Jira, SCRUM, Agile, Kanban)</p>
				</div>
				<div className="row secondary py-3 d-block ml-5">
					<p className="h5">WORK HISTORY </p>
					<p className="h5">
						Internship at 4Geeks Academy: Front-End Development, JavaScript Testing (Current, since 12/2019)
					</p>
					<p className="h5">
						3 years of progressive corporate HR experience in Tech with South-American EdTech prodigy Open
						English/Next University
					</p>
					<p className="h5">4 years experience as HR Consultant in Medical</p>
					<p className="h5">
						Management Training/HR experience with the Starwoods Corporation - owner of hotel brands Westin,
						W, Sheraton and St Regis{" "}
					</p>
				</div>
			</div>
		</div>
	);
};
