import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "./modal";
import Photo from "../../img/Myself-Copy.jpg";

export class Navbar extends React.Component {
	constructor() {
		super();
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
			<>
				<div className="sidenav shadow-lg">
					<div className="sidenav-inner h-card my-2">
						<Link to="/">
							<div className="my-card-avatar text-center my-2">
								<img className="photo shadow" id="myPhoto" src={Photo} />
							</div>
						</Link>
						<div className="my-card-content text-center my-3 pt-2">
							<h2>
								George <strong>Mihov</strong>
							</h2>
							<h4>Full-Stack Web Developer</h4>
						</div>
					</div>
					<div className="sections py-4">
						<Link className="navlink" to="/about">
							About
						</Link>
						<Link className="navlink" to="/profile">
							Profile
						</Link>
						<Link className="navlink" to="/portfolio">
							Projects
						</Link>
					</div>
					<div className="social-icons text-left">
						<Modal show={this.state.show} handleClose={this.hideModal} />
						<button
							type="button"
							className="btn btn-primary"
							title="mail: gmihov001@gmail.com"
							onClick={this.showModal}>
							<i className="fas fa-envelope-square"></i>
						</button>
						<a
							rel="me"
							href="https://www.linkedin.com/in/gmihov/"
							className="button button-icon"
							title="linkedin: gmihov">
							<i className="fab fa-linkedin"></i>
						</a>
						<a
							rel="me"
							href="https://github.com/gmihov001"
							className="button button-icon"
							title="github: gmihov001">
							<i className="fab fa-github-square"></i>
						</a>
					</div>
				</div>
			</>
		);
	}
}
