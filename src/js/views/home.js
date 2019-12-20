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
				<div className="row mt-5 d-block">
					<div className="row my-5 d-block">
						<div className="text-center h2">
							<span className="cyan-shadow"> WELCOME </span>AND
							<span className="cyan-shadow"> THANK YOU </span>
							FOR VISITING!
						</div>
						<div className="my-5">&nbsp;</div>
						<div className="my-5">&nbsp;</div>
						<div>&nbsp;</div>
						<div>&nbsp;</div>
						<div>&nbsp;</div>
					</div>
					<div className="row mt-5 d-block">
						<div className="h2">
							<span className="text-effect1">HERE YOU CAN: </span>
						</div>
					</div>
					<div className="row d-flex justify-content-between mt-4 px-5">
						<div className="column">
							Find out a little more
							<Link to="/about">
								<button type="text" className="glow-on-hover h4 m-2">
									ABOUT
								</button>
							</Link>
							me
						</div>
						<div className="column">
							Check out my
							<Link to="/portfolio">
								<button type="text" className="glow-on-hover h4 m-2">
									PROJECTS
								</button>
							</Link>
						</div>
						<div className="column">
							Review my professional
							<Link to="/profile">
								<button type="text" className="glow-on-hover h4 m-2">
									PROFILE
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
