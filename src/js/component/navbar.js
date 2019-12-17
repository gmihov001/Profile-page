import React from "react";
import { Link } from "react-router-dom";
import Photo from "../../img/Myself-Copy.jpg";

export const Navbar = () => {
	ModalEmail = () => {
		<div className="modal fade" id="myModal" role="dialog">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<button type="button" className="close" data-dismiss="modal">
							&times;
						</button>
						<h4 className="modal-title">Modal Header</h4>
					</div>
					<div className="modal-body">
						<p>Some text in the modal.</p>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-default" data-dismiss="modal">
							Close
						</button>
					</div>
				</div>
			</div>
		</div>;
	};

	return (
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
				<button
					rel="me"
					onClick={this.ModalEmail}
					className="button button-icon u-email"
					title="mail: gmihov001@gmail.com">
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
	);
};
