import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
// Pages
import { LandingPage } from "./pages/landingPage";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { GunList } from "./pages/gunList";
import { Bookmarks } from "./pages/bookmarks";
import { Demo } from "./pages/demo";
import { GunActivity } from "./pages/GunActivity";
import { GunDetails } from "./pages/GunDetails";
import injectContext from "./store/appContext";
// Components
import { MyNavbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<MyNavbar />
					<Switch>
						<Route exact path="/">
							<LandingPage />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/signup">
							<Signup />
						</Route>
						<Route exact path="/category/:name">
							<GunList />
						</Route>
						<Route exact path="/bookmarks">
							<Bookmarks />
						</Route>
						<Route exact path="/activity/:name">
							<GunActivity />
						</Route>
						<Route exact path="/gun">
							<GunDetails />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
