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
						<div className="text-center h1">
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
					<div className="row mt-5 d-block px-5">
						<div className="my-5">&nbsp;</div>
						<div className="h2 mt-5">
							<span className="text-effect1"> &lsaquo; &lsaquo; SELECT A SECTION </span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

/*

<div className="row h4 d-flex justify-content-around mt-2 px-5">
						<div className="column slideInUp1">
							Find out more
							<Link to="/about">
								<button type="text" className="glow-on-hover h3 m-2">
									&lsaquo; about me /&rsaquo;
								</button>
							</Link>
						</div>
						<div className="column slideInUp2">
							Check out my
							<Link to="/portfolio">
								<button type="text" className="glow-on-hover h3 m-2">
									&lsaquo; projects /&rsaquo;
								</button>
							</Link>
						</div>
						<div className="column slideInUp3">
							Review my professional
							<Link to="/profile">
								<button type="text" className="glow-on-hover h3 m-2">
									&lsaquo; profile /&rsaquo;
								</button>
							</Link>
						</div>
                    </div>
                    
*/
