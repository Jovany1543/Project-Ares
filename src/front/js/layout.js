import React, { useState, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
// Pages
import { LandingPage } from "./pages/landingPage";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { GunList } from "./pages/gunList";
import { SearchList } from "./pages/searchList";
import { Bookmarks } from "./pages/bookmarks";
import { Demo } from "./pages/demo";
import { GunActivity } from "./pages/GunActivity";
import { GunDetails } from "./pages/GunDetails";
import injectContext, { Context } from "./store/appContext";
// Components
import { MyNavbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Toast from "react-bootstrap/Toast";
import ToastHeader from "react-bootstrap/ToastHeader";
import ToastBody from "react-bootstrap/ToastBody";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const { store, actions } = useContext(Context);
	const [loggedIn, setLoggedIn] = useState(false);
	const [query, setQuery] = useState("");

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Toast
						show={store.alert.show}
						onClose={actions.resetAlert}
						className={`alert-${store.alert.type} position-absolute`}
						delay={4000}
						autohide>
						<Toast.Header className={`alert-${store.alert.type} d-flex justify-content-end`}>
							<img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
							<strong className="me-auto">Alert</strong>
						</Toast.Header>
						<Toast.Body className={`alert-${store.alert.type} py-5`}>{store.alert.msg}</Toast.Body>
					</Toast>
					<MyNavbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} query={query} setQuery={setQuery} />
					<Switch>
						<Route exact path="/">
							<LandingPage />
						</Route>
						<Route exact path="/login">
							<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
						</Route>
						<Route exact path="/search">
							<SearchList query={query} setQuery={setQuery} />
						</Route>
						<Route exact path="/signup">
							<Signup />
						</Route>
						<Route exact path="/category/:name">
							<GunList />
						</Route>
						<Route exact path="/bookmarks">
							<Bookmarks loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
						</Route>
						<Route exact path="/activity/:name">
							<GunActivity />
						</Route>
						<Route exact path="/gun/:name">
							<GunDetails loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
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
