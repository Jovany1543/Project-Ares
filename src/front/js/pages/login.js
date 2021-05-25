import React from "react";

export const Login = () => {
	return (
		<div className="container-fluid">
			<div className="row d-flex main-content bg-success text-center w-50 rounded shadow-lg my-5 mx-auto">
				<div className="col-md-8 col-xs-12 col-sm-12 login-form mx-auto bg-white rounded">
					<div className="container-fluid">
						<div className="row justify-content-center">
							<h2>Log In</h2>
						</div>
						<div className="row justify-content-center">
							<form control="" className="form-group p-2">
								<div className="row justify-content-center">
									<input
										type="text"
										name="username"
										id="username"
										className="form__input"
										placeholder="Username"
									/>
								</div>
								<div className="row justify-content-center">
									<input
										type="password"
										name="password"
										id="password"
										className="form__input"
										placeholder="Password"
									/>
								</div>
								<div className="row justify-content-center">
									<input type="checkbox" name="remember_me" id="remember_me" className="" />
									<label htmlFor="remember_me">Remember Me!</label>
								</div>
								<div className="row justify-content-center">
									<input type="submit" value="Submit" className="btn" />
								</div>
							</form>
						</div>
						<div className="row justify-content-center">
							<p>
								Don&apos;t have an account? <a href="#">Register Here</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
