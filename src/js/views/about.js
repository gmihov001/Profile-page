import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const About = () => {
	return (
		<div className="wrapper">
			<div className="container-fluid">
				<div className="row row1 about py-5 d-flex justify-content-end">
					<span className="h3 section-heading"> ABOUT ME </span>
				</div>

				<div className="row row2 my-5 d-inline-flex justify-content-around secondary h5">
					<div className="col-7 bg-light border shadow-lg">
						<span>
							I am based in South Florida. A native of Bulgaria, I moved to the US when I was 20, with one
							suitcase worth of clothes (of questionable taste :) ) and $227. I put myself through college
							without any assistance and built a career in HR.
						</span>
					</div>
					<div className="col-4 bg-dark text-white border shadow-lg">
						<span>This experience taught me that nothing is impossible and to never give up.</span>
					</div>
				</div>

				<div className="row row3 my-5 d-flex justify-content-around secondary h5">
					<div className="col-5">
						<span>
							<br />
						</span>
					</div>
					<div className="col-6 bg-secondary text-white border shadow-lg">
						<span>
							My hobbies are coding, coding, and coding. I strive to be the best at what I do, so I
							normally invest all of my free time into advancing my knowledge and skills.
						</span>
					</div>
				</div>

				<div className="row row4 my-5 d-inline-flex justify-content-around secondary h5">
					<div className="col-6 bg-secondary text-white border shadow-lg">
						When I can, I love to travel and have been in places from Turkey to Peru and from Norway to
						Egypt.
						<br />
						With every next trip I become better at communicating with and understanding people from
						different cultures. Being able to communicate effectively and understand those around us is one
						of the most crucial soft skills in the workplace.
					</div>
					<div className="col-5 bg-dark text-right text-white border shadow-lg">
						<span className="d-block">
							<span>
								<i>&quot;Travel is fatal to prejudice, bigotry, and narrow-mindedness&quot;</i>{" "}
							</span>
							<br />
							<br />
							<span> ~ Mark Twain </span>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
