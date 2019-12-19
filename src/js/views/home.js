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
					<p className="text-center">
						<span className="cyan-shadow h2"> HELLO </span>and
						<span className="cyan-shadow h2 ml-5 pl-5"> thank you </span>
						for visitng my page!
					</p>
					<p className="h2">
						<span className="text-effect1"> HERE </span>
						<span className="h1 mt-5"> you can: </span>{" "}
					</p>
					<p className="text-left pl-5">
						Find out a little more
						<Link to="/about">
							<button type="text" className="enter-btn h4 m-3 px-3">
								ABOUT
							</button>
						</Link>
						me
					</p>
					<p className="pt-1 mb-3">
						<p className="text-center">
							Check out my
							<Link to="/portfolio">
								<button type="text" className="enter-btn h4 m-3 px-3">
									PROJECTS
								</button>
							</Link>
						</p>
						<p className="text-right pr-5">
							Review my professional
							<Link to="/profile">
								<button type="text" className="enter-btn h4 m-3 px-3">
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
