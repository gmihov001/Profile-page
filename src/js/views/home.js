import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Home = props => (
	<div className="wrapper main initial">
		<div className="text-left mt-5">
			<span className="blue"> const </span> <span className="lightblue h2"> HI, I am </span>{" "}
			<span className="yellow h1"> George </span>= (<span className="blue"> and I am a </span>{" "}
			<span className="magenta h2"> WEB DEVELOPER </span>) =&gt; &#123;
			<p className="pt-3">
				But I wasn&lsquo;t always a Web Developer. I was once a college kid from a distressed post-Communist
				East-European country, who <span className="lightblue h4">moved to the US</span> with one suitcase and a
				total of <span className="yellow h4">$227</span>. No relatives, no friends, no clear path.
			</p>
			<p>
				But I made it. And I put myself through college all over again. This part of my life taught me that
				<span className="orange h4"> everything is possible </span> and to{" "}
				<span className="red h4"> never give up </span>.
			</p>
			<p>
				Then I built a career in corporate Human Resources. I have hired a lot of people and I have later
				evaluated their performance. This taught me that{" "}
				<span className="lightblue h4"> technical skills can be </span>{" "}
				<span className="magenta h3"> acquired </span>, but
				<span className="lightblue h4"> passion </span>,<span className="orange h4"> positive attitude </span>,
				<span className="lightgreen h4"> working well with people </span>,
				<span className="blue h4"> motivation </span> and
				<span className="lightblue h4"> dedication </span>
				<span className="red h3"> CANNOT </span>.
			</p>
			<p>Life experiences and the lessons we learn from them cannot be taught. &#125;</p>
			<p>
				This is why{" "}
				<span className="yellow h3"> I may just be the best addition to your development team </span> :
			</p>
			<p>
				<span type="text" className="enter-btn h2 m-3">
					Learn more...
				</span>
			</p>
			<p className="pt-4">
				<p>
					<span className="yellow h1"> In a rush? </span>
				</p>
				<p>
					See my
					<span type="text" className="enter-btn h2 m-3">
						Professional profile
					</span>
					or my
					<span type="text" className="enter-btn h2 m-3">
						Portfolio
					</span>
				</p>
			</p>
		</div>
	</div>
);
