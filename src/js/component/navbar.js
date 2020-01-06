import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "./modal.js";
import Photo from "../../img/Myself-Copy.jpg";

export class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { show: false };
	}

	showModal = () => {
		this.setState({ show: true });
	};

	hideModal = () => {
		this.setState({ show: false });
	};

	render() {
		return (
			<div>
				<div className="sidenav shadow-lg">
					<div className="sidenav-inner h-card my-2">
						<Link to="/">
							<div className="my-card-avatar text-center my-2">
								<img className="photo shadow" id="myPhoto" src={Photo} />
							</div>
						</Link>
						<div className="my-card-content text-center my-3 pt-2">
							<h2>
								GEORGE <strong>MIHOV</strong>
							</h2>
							<h4>FULL-STACK WEB DEVELOPER</h4>
						</div>
					</div>
					<div className="sections py-4">
						<Link className="navlink" to="/about">
							ABOUT
						</Link>
						<Link className="navlink" to="/profile">
							PROFILE
						</Link>
						<Link className="navlink" to="/portfolio">
							PROJECTS
						</Link>
					</div>
					<div className="social-icons text-left p-3 mt-3">
						<Modal show={this.state.show} handleClose={this.hideModal} />
						<a
							href="#"
							className="button button-icon"
							title="mail: gmihov001@gmail.com"
							onClick={this.showModal}>
							<i className="fas fa-envelope-square"></i>
						</a>
						<a
							href="https://www.linkedin.com/in/gmihov/"
							className="button button-icon"
							title="linkedin: gmihov">
							<i className="fab fa-linkedin"></i>
						</a>
						<a href="https://github.com/gmihov001" className="button button-icon" title="github: gmihov001">
							<i className="fab fa-github-square"></i>
						</a>
					</div>
				</div>
			</div>
		);
	}
}
