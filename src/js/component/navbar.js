import React from "react";
import { Link } from "react-router-dom";
import Photo from "../../img/Myself-Copy.jpg";

export const Navbar = () => {
	return (
		<div className="sidenav shadow">
			<div className="sidenav-inner h-card my-2">
				<a className="my-card">
					<div className="my-card-avatar text-center my-2">
						<img id="myPhoto" src={Photo} />
					</div>
					<div className="my-card-content text-center my-3">
						<h3>
							George <strong>Mihov</strong>
						</h3>
						<h4>Full-Stack Web Developer</h4>
					</div>
				</a>
			</div>
			<div>
				<a className="navlink" href="#about">
					About me
				</a>
				<a className="navlink" href="#profile">
					Profile
				</a>
				<a className="navlink" href="#portfolio">
					Portfolio
				</a>
			</div>
		</div>
	);
};
