import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { About } from "./views/about";
import { Portfolio } from "./views/portfolio";
import { Profile } from "./views/profile";
import { Navbar } from "./component/navbar";
import { Project1 } from "./component/proj1";
import { Footer } from "./component/footer";

export const Layout = () => {
	return (
		<div className="layout-div d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<Navbar className="d-block d-xs-none d-sm-none" />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/portfolio" component={Portfolio} />
						<Route path="/profile" component={Profile} />
						<Route path="/proj1" component={Project1} />
						<Route path="/single/:theid" component={Single} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
