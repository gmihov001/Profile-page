import React from "react";
import Wandertracker1 from "../../img/wandertracker1.jpg";
import Wandertracker2 from "../../img/wandertracker2.jpg";
import Wandertracker3 from "../../img/wandertracker3.jpg";
import Wandertracker4 from "../../img/wandertracker4.jpg";
import Wandertracker5 from "../../img/wandertracker5.jpg";
import Wandertracker6 from "../../img/wandertracker6.jpg";
import Wandertracker7 from "../../img/wandertracker7.jpg";

export const Project1 = () => {
	return (
		<div className="wrapper">
			<div className="container-fluid px-0">
				<div className="row portfolio ml-0 py-5 d-flex justify-content-end">
					<span className="h3 section-heading">Wandertracker</span>
				</div>
				<div className="row secondary p-5 d-flex justify-content-around">
					<div className="col #1 m-3 border border-secondary">
						<img className="img-thumbnail" id="#" src={Wandertracker1} />
						<img className="img-thumbnail" id="#" src={Wandertracker2} />
						<img className="img-thumbnail" id="#" src={Wandertracker3} />
						<img className="img-thumbnail" id="#" src={Wandertracker4} />
						<img className="img-thumbnail" id="#" src={Wandertracker5} />
						<img className="img-thumbnail" id="#" src={Wandertracker6} />
						<img className="img-thumbnail" id="#" src={Wandertracker7} />
						<img className="img-thumbnail" id="#" src={Wandertracker1} />
					</div>

					<div className="col #2 m-3 border border-secondary">
						<p className="h4"> Description: </p>
						<p className="h5">
							{" "}
							Wandertracker is a travel application which aims to simplify and centralize the end-to-end
							travel process, from researching destinations, through planning trips, providing support
							while on the road, keeping and sharing memories, and tracking visited locations.
						</p>
						<p className="my-2">&nbsp;</p>
						<p className="h4"> Technologies used: </p>
						<p className="h5"> HTML, CSS, JS, React, Context, Python, Flask, SQLAlchemy </p>
						<p className="my-2">&nbsp;</p>
						<p className="h5">
							{" "}
							Github:{" "}
							<a href="https://github.com/gmihov001/Wandertracker_front-end">
								https://github.com/gmihov001/Wandertracker_front-end{" "}
							</a>
						</p>
						<p className="my-2">&nbsp;</p>
						<p className="h5">
							{" "}
							Live version:{" "}
							<a href="https://github.com/gmihov001/Wandertracker_front-end">
								https://wandertrackerfront-end.gmihov001.now.sh/
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
