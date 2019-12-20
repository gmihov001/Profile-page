import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="wrapper home">
				<div className="mt-5">
					<p className="text-center h2">
						<span className="cyan-shadow"> Welcome </span>and
						<span className="cyan-shadow"> thank you </span>
						for visitng!
					</p>
					<p>&nbsp;</p>
					<p className="h2 d-inline-block">
						<span className="text-effect1"> on this site </span>
						<span className="h1 mt-5 align-middle"> you can: </span>{" "}
					</p>
					<p>&nbsp;</p>
					<p className="text-right pr-5">
						Find out a little more
						<Link to="/about">
							<button type="text" className="glow-on-hover h4 m-2">
								ABOUT
							</button>
						</Link>
						me
					</p>
					<p className="pt-1 mb-3">
						<p className="text-center">
							Check out my
							<Link to="/portfolio">
								<button type="text" className="glow-on-hover h4 m-2">
									PROJECTS
								</button>
							</Link>
						</p>
						<p className="text-left pl-5">
							Review my professional
							<Link to="/profile">
								<button type="text" className="glow-on-hover h4 m-2">
									PROFILE
								</button>
							</Link>
						</p>
					</p>
				</div>
			</div>
		);
	}
}
