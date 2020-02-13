import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Wandertracker1 from "../../img/wandertracker1.jpg";

export const Project1 = () => {
	return (
		<div className="wrapper">
			<div className="container-fluid px-0">
				<div className="row portfolio ml-0 py-5 d-flex justify-content-end">
					<span className="h3 section-heading">Wandertracker</span>
				</div>
				<div className="row secondary p-5 d-flex justify-content-around">
					<div className="col #1 m-3 border border-secondary">
						{" "}
						Column1
						<img className="img-thumbnail" id="#" src={Wandertracker1} />
						<img className="img-thumbnail" id="#" src={Wandertracker1} />
						<img className="img-thumbnail" id="#" src={Wandertracker1} />
						<img className="img-thumbnail" id="#" src={Wandertracker1} />
						<img className="img-thumbnail" id="#" src={Wandertracker1} />
						<img className="img-thumbnail" id="#" src={Wandertracker1} />
						<img className="img-thumbnail" id="#" src={Wandertracker1} />
						<img className="img-thumbnail" id="#" src={Wandertracker1} />
					</div>

					<div className="col #2 m-3 border border-secondary"> Column2 </div>
				</div>
			</div>
		</div>
	);
};
