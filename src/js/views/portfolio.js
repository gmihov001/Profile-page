import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Wandetracker from "../../img/wandertracker.jpg";
import { ProjectModal } from "../component/proj_modal";

export class Portfolio extends React.Component {
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
			<>
				<div className="wrapper">
					<div className="row portfolio ml-0 py-5 d-flex justify-content-end">
						<span className="h3 section-heading">MY PROJECTS</span>
					</div>
					<ProjectModal show={this.state.show} handleClose={this.hideModal} />
					<div className="row secondary py-5">
						<div className="row m-auto">
							<div className="column #1">
								<div className="img__wrap img1">
									<img className="img__img" src="http://placehold.it/257x200.jpg" />
									<a
										href="#"
										className="button button-icon"
										title="Wandertracker"
										onClick={this.showModal}>
										<div className="img__description_layer1">
											<span className="img__description d-block h4">WanderTracker</span>
											<span className="img__description d-block">
												A travel toolkit Web application, using HTML, CSS, JS, Rract, Context,
												Python, Flask, SQLAlchemy
											</span>
										</div>
									</a>
								</div>
								<div className="img__wrap img2">
									<img className="img__img" src="http://placehold.it/257x200.jpg" />
									<div className="img__description_layer2">
										<span className="img__description d-block h4">My Second Project</span>
										<span className="img__description d-block">
											HTMLS, CSS, JS, REACT, CONTEXT, PYTHON, FLASK
										</span>
									</div>
								</div>
							</div>
							<div className="column #2">
								<div className="img__wrap img3">
									<img className="img__img" src="http://placehold.it/257x200.jpg" />
									<div className="img__description_layer3">
										<span className="img__description d-block h4">My Third Project</span>
										<span className="img__description d-block">
											HTMLS, CSS, JS, REACT, CONTEXT, PYTHON, FLASK
										</span>
									</div>
								</div>
								<div className="img__wrap img4">
									<img className="img__img" src="http://placehold.it/257x200.jpg" />
									<div className="img__description_layer3">
										<span className="img__description d-block h4">My Fourth Project</span>
										<span className="img__description d-block">
											HTMLS, CSS, JS, REACT, CONTEXT, PYTHON, FLASK
										</span>
									</div>
								</div>
							</div>
							<div className="column #3">
								<div className="img__wrap img5">
									<img className="img__img" src="http://placehold.it/257x200.jpg" />
									<div className="img__description_layer1">
										<span className="img__description d-block h4">My Fifth Project</span>
										<span className="img__description d-block">
											HTMLS, CSS, JS, REACT, CONTEXT, PYTHON, FLASK
										</span>
									</div>
								</div>
								<div className="img__wrap img6">
									<img className="img__img" src="http://placehold.it/257x200.jpg" />
									<div className="img__description_layer2">
										<span className="img__description d-block h4">My Sixth Project</span>
										<span className="img__description d-block">
											HTMLS, CSS, JS, REACT, CONTEXT, PYTHON, FLASK
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
