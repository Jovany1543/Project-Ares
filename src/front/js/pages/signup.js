import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

export const Signup = () => {
	const history = useHistory();

	const { store, actions } = useContext(Context);

	const [userData, setUserData] = useState({
		fname: "",
		lname: "",
		email: "",
		password: ""
	});

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const onSubmit = async data => {
		try {
			await actions.signup(data);
		} catch (e) {
			alert(e.message);
		}
		history.push("/login");
		return false;
	};

	const onChange = data => {
		let aux = { ...userData };
		aux[data.name] = data.value;
		setUserData(aux);
	};

	return (
		<div className="container-fluid">
			<div className="row d-flex main-content text-center w-50 rounded shadow-lg my-5 mx-auto p-4">
				<div className="col-md-8 col-xs-12 col-sm-12 login-form mx-auto bg-white rounded">
					<div className="container-fluid">
						<div className="row justify-content-center">
							<h1 className="font-weight-light">Sign up</h1>
						</div>
						<div className="row justify-content-center">
							<form
								onChange={e => onChange(e.target)}
								onSubmit={handleSubmit(onSubmit)}
								control=""
								className="form-group p-2 w-100">
								<div className="row justify-content-between">
									<input
										type="text"
										name="fname"
										id="fname"
										className="form__input border-top-0 border-left-0 border-right-0 border-bottom w-100 pt-2"
										placeholder="First Name"
										{...register("fname", { required: "Please enter your first name" })}
									/>
									{errors.fname && <span className="text-danger">{errors.fname.message}</span>}
									<input
										type="text"
										name="lname"
										id="lname"
										className="form__input border-top-0 border-left-0 border-right-0 border-bottom w-100 pt-2 mt-2"
										placeholder="Last Name"
										{...register("lname", { required: "Please enter your last name" })}
									/>
									{errors.lname && <span className="text-danger"> {errors.fname.message}</span>}
								</div>
								<div className="row justify-content-center mt-2">
									<input
										type="text"
										name="email"
										id="email"
										className="form__input border-top-0 border-left-0 border-right-0 border-bottom w-100 pt-2"
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
								<div className="row justify-content-center mt-2">
									<input
										type="password"
										name="password"
										id="password"
										className="form__input border-top-0 border-left-0 border-right-0 border-bottom w-100 pt-2"
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
								Have an account? <Link to="/login">Log in here</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
