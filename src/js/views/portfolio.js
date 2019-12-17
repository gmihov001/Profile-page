import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Portfolio = () => {
	return (
		<>
			<div className="wrapper">
				<div className="row portfolio ml-0 py-4">
					<span className="magenta-shadow h3">MY PROJECTS</span>
				</div>
				<div className="row secondary py-5">
					<div className="row m-auto">
						<div className="column #1">
							<div className="img__wrap img1">
								<img className="img__img" src="http://placehold.it/257x200.jpg" />
								<div className="img__description_layer">
									<p className="img__description h5">This is my First Project</p>
									<p className="img__description">HTMLS, CSS, JS, REACT, CONTEXT, PYTHON, FLASK</p>
								</div>
							</div>
							<div className="img__wrap  img2">
								<img className="img__img" src="http://placehold.it/257x200.jpg" />
								<div className="img__description_layer">
									<p className="img__description h5">This is my Second Project</p>
									<p className="img__description">HTMLS, CSS, JS, REACT, CONTEXT, PYTHON, FLASK</p>
								</div>
							</div>
						</div>
						<div className="column #2">
							<div className="img__wrap  img3">
								<img className="img__img" src="http://placehold.it/257x200.jpg" />
								<div className="img__description_layer">
									<p className="img__description h5">This is my Third Project</p>
									<p className="img__description">HTMLS, CSS, JS, REACT, CONTEXT, PYTHON, FLASK</p>
								</div>
							</div>
							<div className="img__wrap img4">
								<img className="img__img" src="http://placehold.it/257x200.jpg" />
								<div className="img__description_layer">
									<p className="img__description h5">This is my Fourth Project</p>
									<p className="img__description">HTMLS, CSS, JS, REACT, CONTEXT, PYTHON, FLASK</p>
								</div>
							</div>
						</div>
						<div className="column #3">
							<div className="img__wrap img5">
								<img className="img__img" src="http://placehold.it/257x200.jpg" />
								<div className="img__description_layer">
									<p className="img__description h5">This is my Fifth Project</p>
									<p className="img__description">HTMLS, CSS, JS, REACT, CONTEXT, PYTHON, FLASK</p>
								</div>
							</div>
							<div className="img__wrap img6">
								<img className="img__img" src="http://placehold.it/257x200.jpg" />
								<div className="img__description_layer">
									<p className="img__description h5">This is my Sixth Project</p>
									<p className="img__description">HTMLS, CSS, JS, REACT, CONTEXT, PYTHON, FLASK</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
