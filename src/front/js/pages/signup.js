import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const Signup = () => {
	const { store, actions } = useContext(Context);
	const [userData, setUserData] = useState({
		// Add fname and lname after
		email: "",
		password: ""
	});

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const handleChange = e => {
		const newUserData = { ...userData };
		newUserData[e.target.id] = e.target.value;
		setData(newUserData);
		console.log(newUserData);
	};

	const onSubmit = e => {
		e.preventDefault();
		fetch("/api", {
			method: "POST",
			body: JSON.stringify({ userData }),
			headers: { "Content-Type": "application/json" }
		})
			.then(res => res.json())
			.then(json => setUser(json.userData));
	};

	// For inputs email and password, onChange not compatible with react-hook-form. I have to look at documentation and fix.

	return (
		<div className="container-fluid">
			<div className="row d-flex main-content text-center w-50 rounded shadow-lg my-5 mx-auto py-4">
				<div className="col-md-8 col-xs-12 col-sm-12 login-form mx-auto bg-white rounded">
					<div className="container-fluid">
						<div className="row justify-content-center">
							<h1 className="font-weight-light ">Sign up</h1>
						</div>
						<div className="row justify-content-center">
							<form
								method="POST"
								action="/signup"
								control=""
								className="form-group p-2 w-100"
								onSubmit={handleSubmit(onSubmit)}>
								<div className="row justify-content-between pt-4">
									<span>
										<input
											type="text"
											name="fname"
											id="fname"
											className="form__input border-top-0 border-left-0 border-right-0 border-bottom w-100"
											placeholder="First Name"
											{...register("fname", { required: "Please enter your first name" })}
										/>
										{errors.fname && <span className="text-danger">{errors.fname.message}</span>}
									</span>
									<span>
										<input
											type="text"
											name="lname"
											id="lname"
											className="form__input border-top-0 border-left-0 border-right-0 border-bottom w-100"
											placeholder="Last Name"
											{...register("lname", { required: "Please enter your last name" })}
										/>
										{errors.lname && <span className="text-danger">{errors.lname.message}</span>}
									</span>
								</div>
								<div className="row justify-content-center pt-4">
									<input
										// onChange={e => handleChange(e)}
										type="text"
										name="email"
										id="email"
										value={data.email}
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
								<div className="row justify-content-center pt-4">
									<input
										// onChange={e => handleChange(e)}
										type="password"
										name="password"
										id="password"
										value={data.password}
										className="form__input border-top-0 border-left-0 border-right-0 border-bottom w-100"
										placeholder="Password"
										{...register("password", {
											required: "Password is required.",
											minLength: { value: 8, message: "Password must be 8 characters or more." }
										})}
									/>
									{errors.password && <span className="text-danger">{errors.password.message}</span>}
								</div>
								<div className="row justify-content-center">
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
								Have an account? <Link to="/login">Log in here</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
