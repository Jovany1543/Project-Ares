import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export const Login = props => {
	// let base_url = "https://3001-green-cockroach-u3tjlvcb.ws-us09.gitpod.io";
	let base_url = process.env.BACKEND_URL;

	const { store, actions } = useContext(Context);

	let history = useHistory();

	const [loginData, setLoginData] = useState({
		email: "",
		password: ""
	});

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const login = (email, password) => {
		return fetch(`${base_url}/api/login/`, {
			method: "POST",
			// cors: "no-cors",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		})
			.then(res => res.json())
			.then(data => {
				if (typeof data.user === "undefined") throw new Error(data.msg);

				// add token and info to local storage
				sessionStorage.setItem(
					"guniverse_user",
					JSON.stringify({
						token: data.token,
						email: data.user.email,
						id: data.user.id
					})
				);
				props.setLoggedIn(true);
				history.push("/");
			})
			.catch(err =>
				actions.setAlert({
					type: "danger",
					msg: err.message,
					show: true
				})
			);
	};

	const onSubmit = async data => {
		try {
			await login(data.email, data.password);
			actions.getBookmarkData();
		} catch (e) {
			alert(e.message);
		}
		return false;
	};

	const onChange = data => {
		let aux = { ...loginData };
		aux[data.name] = data.value;
		setLoginData(aux);
	};

	return (
		<div className="container-fluid">
			<div className="row d-flex main-content text-center w-50 rounded shadow-lg my-5 mx-auto py-4">
				<div className="col-md-8 col-xs-12 col-sm-12 login-form mx-auto bg-white rounded">
					<div className="container-fluid">
						<div className="row justify-content-center">
							<h1 className="font-weight-light">Log in</h1>
						</div>
						<div className="row justify-content-center">
							<form
								onChange={e => onChange(e.target)}
								onSubmit={handleSubmit(onSubmit)}
								control=""
								className="form-group p-2 w-100">
								<div className="row justify-content-center">
									<input
										type="text"
										name="email"
										id="email"
										className="form__input border-top-0 border-left-0 border-right-0 border-bottom w-100"
										placeholder="Email Address"
										{...register("email", {
											required: "E-mail is required",
											pattern: {
												value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
												message: "Enter a valid email address"
											}
										})}
									/>
									{errors.email && <span className="text-danger">{errors.email.message}</span>}
								</div>
								<div className="row justify-content-center">
									<input
										type="password"
										name="password"
										id="password"
										className="form__input border-top-0 border-left-0 border-right-0 border-bottom w-100 mt-4"
										placeholder="Password"
										{...register("password", {
											required: "Password is required."
										})}
									/>
									{errors.password && <span className="text-danger">{errors.password.message}</span>}
								</div>
								<div className="row justify-content-center mt-4">
									<input
										type="submit"
										value="Submit"
										className="btn-primary rounded w-100 border-0 py-2"
									/>
								</div>
							</form>
						</div>
						<div className="row justify-content-center">
							<p>
								Don&apos;t have an account? <Link to="/signup">Register Here</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Login.propTypes = {
	loggedIn: PropTypes.bool,
	setLoggedIn: PropTypes.func
};
