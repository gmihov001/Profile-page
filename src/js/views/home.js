import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Home = props => (
	<div className="wrapper home">
		<div className="text-left mt-5">
			<span className="blue"> const </span> <span className="lightblue h3"> HI, I am </span>{" "}
			<span className="yellow h2"> George </span>= (<span className="blue"> and I am a </span>{" "}
			<span className="magenta h3"> WEB DEVELOPER </span>) =&gt; &#123;
			<p className="pt-3 ml-5">
				But I wasn&lsquo;t always a Web Developer.
				<br />I was once a college kid from a distressed post-Communist East-European country, who{" "}
				<span className="lightblue h4">moved to the US</span> with one suitcase and a total of{" "}
				<span className="yellow h4">$227</span>. No relatives, no friends, no clear path.
			</p>
			<p className="ml-5">
				And I made it. I even put myself through college all over again. This part of my life taught me that
				<span className="orange h4"> everything is possible </span> and to{" "}
				<span className="red h4"> never give up </span>.
			</p>
			<p className="ml-5">
				Then I built a career in corporate Human Resources. I hired a lot of people and I later evaluated their
				performance. This taught me that <span className="lightblue h4"> technical skills can be </span>{" "}
				<span className="magenta h3"> acquired </span>, but
				<span className="lightblue h4"> passion </span>,<span className="orange h4"> positive attitude </span>,
				<span className="lightgreen h4"> working well with people </span>,
				<span className="blue h4"> motivation </span> and
				<span className="lightblue h4"> dedication </span>
				<span className="red h3"> CANNOT </span>.
				<br /> &#125;
			</p>
			<p>
				This is why
				<span className="lightgreen h3">
					{" "}
					I may just be the <span className="orange h3"> best addition </span> to your development team{" "}
				</span>
				<Link to="/about">
					<span type="text" className="enter-btn h3 m-3">
						Learn more...
					</span>
				</Link>
			</p>
			<p className="pt-4 mb-5">
				<p className="text-left ml-5">
					<span className="purple"> export </span>
					<span className="lightblue"> default </span>
					<span className="yellow h1"> In a rush </span>?
				</p>
				<p className="text-center">
					See my
					<Link to="/profile">
						<span type="text" className="enter-btn h3 m-3">
							Professional profile
						</span>
					</Link>
					or my
					<Link to="/portfolio">
						<span type="text" className="enter-btn h3 m-3">
							Portfolio
						</span>
					</Link>
				</p>
			</p>
		</div>
	</div>
);
