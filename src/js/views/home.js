import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Home = props => (
	<div className="wrapper main initial">
		<div className="text-center mt-5">
			<h7>const</h7>
			<h3>HI, I am George</h3>= <h4>... and I am a Web Developer</h4> =&gt; &#123;
			<p>
				But I wasn&lsquo;t always a Web Developer. I was once a college kid from a distressed post-Communist
				East-European country, who moved to the US with one suitcase and a total of $227. No relatives, no
				friends, no clear path.
			</p>
			<p>
				But I made it. And I put myself through college all over again. This part of my life taught me that
				everything is possible and to never give up.
			</p>
			<p>
				Then I had a successful career in corporate Human Resources. I have hired a lot of people and I have
				later evaluated their performance. This taught me that technical skills can be acquired, but passion,
				positive attitude, working well with people, motivation and dedication CANNOT.
			</p>
			<p>Life experiences and the lessons we learn from them cannot be taught.</p> &#125;
			<p>This is why I may just be the best addition to your development team:</p>
			<p>
				<span type="text" className="enter-btn m-3">
					Learn more...
				</span>
			</p>
			<p className="pt-4">
				<p>In a rush?</p>
				<p>
					See my
					<span type="text" className="enter-btn m-3">
						Professional profile
					</span>
					or my
					<span type="text" className="enter-btn m-3">
						Portfolio
					</span>
				</p>
			</p>
		</div>
	</div>
);
