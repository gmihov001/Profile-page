import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const About = () => {
	return (
		<div className="wrapper">
			<div className="container-fluid px-0 mx-0">
				<div className="row row1 about ml-0 py-5 d-flex justify-content-end">
					<span className="h3 section-heading"> ABOUT ME </span>
				</div>

				<div className="row row2 d-flex secondary h5">
					<div className="col-8 my-4 p-3 pr-5 mr-n5 bg-none border shadow-lg">
						<span>
							I am based in South Florida. A native of Bulgaria, I moved to the US when I was 20, with one
							suitcase worth of clothes (of questionable taste) and $227. I put myself through college
							without any assistance and built a career in HR.
						</span>
					</div>
					<div className="col-4 my-4 mt-0 py-3 bg-light border shadow-lg">
						<span>This experience taught me that nothing is impossible and to never give up.</span>
					</div>
				</div>

				<div className="row row3 d-flex secondary h5">
					<div className="col-4 mx-0 my-4 py-3">
						<span>
							<br />
						</span>
					</div>
					<div className="col-6 my-4 py-3 bg-dark text-white border shadow-lg">
						<span>
							My hobby is coding, coding, and coding. I strive to be the best at what I do so I normally
							invest all of my free time into advancing my knowledge and skills.
						</span>
					</div>
				</div>

				<div className="row row4 d-flex secondary h5">
					<div className="col-6 my-4 mx-0 py-3 bg-secondary text-white border shadow-lg">
						<span>
							I love to travel and have been in places from Turkey to Peru and from Norway to Egypt.
							<br />
							As Mark Twain wrote,
							<span className="purple">
								{" "}
								<i>&quot;Travel is fatal to prejudice, bigotry, and narrow-mindedness&quot;</i>{" "}
							</span>
							<br />
							With every next trip I become better at communicating with and understanding people from
							different cultures. Being able to communicate effectively and understand those around us is
							one of the most crucial soft skills in the workplace.
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
