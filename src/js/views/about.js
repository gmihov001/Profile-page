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
				<div className="row row2 py-5 px-3 d-block justify-content-end">
					<div className="column h5"> Hi, my name is George and I am a WEB DEVELOPER. </div>
					<div className="column h5"> Currently my hobies are coding, coding and coding. </div>
					<div className="column h5">
						{" "}
						Before I was a developer I was once an immigrant who one day decided to pursue his dreams in the
						United States, and moved to a brand new country with one suitcase and $227. In the United States
						I put myself in college and made a corporate career for myself. Why am I telling you this? To
						tell you that if you need someone who believes that everything is possible and
						&quot;can&lsquo;t&quot; is not a real word, then I may be your guy :)
					</div>
					<p className="h5">
						Thanks to my previous progressive corporate HR career in Tech, and in addition to my technical
						skills, I also bring excellent people skills, collaborative nature, end-to-end project
						management and team management experience.{" "}
					</p>
				</div>
			</div>
		</div>
	);
};
