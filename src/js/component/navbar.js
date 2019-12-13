import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="sidenav shadow">
			<div className="sidenav-inner h-card">
				<a className="my-card">
					<div className="my-card-avatar"></div>
					<div className="my-card-content text-center">
						<h4>
							George <strong>Mihov</strong>
						</h4>
						<h5>Full-Stack Web Developer</h5>
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
