import React from "react";

export const Login = () => {
	return (
		<div className="container-fluid">
			<div className="row d-flex main-content text-center w-50 rounded shadow-lg my-5 mx-auto py-4">
				<div className="col-md-8 col-xs-12 col-sm-12 login-form mx-auto bg-white rounded">
					<div className="container-fluid">
						<div className="row justify-content-center">
							<h1 className="font-weight-light">Log in</h1>
						</div>
						<div className="row justify-content-center">
							<form control="" className="form-group p-2 w-100">
								<div className="row justify-content-center">
									<input
										type="text"
										name="username"
										id="username"
										className="form__input border-top-0 border-left-0 border-right-0 border-bottom w-100"
										placeholder="Username"
									/>
								</div>
								<div className="row justify-content-center">
									<input
										type="password"
										name="password"
										id="password"
										className="form__input border-top-0 border-left-0 border-right-0 border-bottom w-100 pt-4"
										placeholder="Password"
									/>
								</div>
								<div className="row mt-5 align-items-baseline">
									<input type="checkbox" name="remember_me" id="remember_me" className="mr-1" />
									<label className="text-black-50" htmlFor="remember_me">
										Remember Me
									</label>
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
								Don&apos;t have an account? <a href="#">Register Here</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
