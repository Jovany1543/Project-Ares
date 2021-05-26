import React from "react";

export const Signup = () => {
	return (
		<div className="container-fluid">
			<div className="row d-flex main-content text-center w-50 rounded shadow-lg my-5 mx-auto py-4">
				<div className="col-md-8 col-xs-12 col-sm-12 login-form mx-auto bg-white rounded">
					<div className="container-fluid">
						<div className="row justify-content-center">
							<h1 className="font-weight-light ">Sign up</h1>
						</div>
						<div className="row justify-content-center">
							<form control="" className="form-group p-2 w-100">
								<div className="row justify-content-between pt-4">
									<span>
										<input
											type="text"
											name="fname"
											id="fname"
											className="form__input border-top-0 border-left-0 border-right-0 border-bottom w-100"
											placeholder="First Name"
										/>
									</span>
									<span>
										<input
											type="text"
											name="lname"
											id="lname"
											className="form__input border-top-0 border-left-0 border-right-0 border-bottom w-100"
											placeholder="Last Name"
										/>
									</span>
								</div>
								<div className="row justify-content-center pt-4">
									<input
										type="text"
										name="username"
										id="username"
										className="form__input border-top-0 border-left-0 border-right-0 border-bottom w-100"
										placeholder="Email Address"
									/>
								</div>
								<div className="row justify-content-center pt-4">
									<input
										type="password"
										name="password"
										id="password"
										className="form__input border-top-0 border-left-0 border-right-0 border-bottom w-100"
										placeholder="Password"
									/>
								</div>
								<div className="row justify-content-center pt-4">
									<input
										type="password"
										name="password"
										id="password"
										className="form__input border-top-0 border-left-0 border-right-0 border-bottom w-100"
										placeholder="Confirm Password"
									/>
								</div>
								<div className="row my-4 align-items-center">
									<input type="checkbox" name="remember_me" id="remember_me" className="mr-1" />
									<label className="text-black-50 mb-0" htmlFor="remember_me">
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
								Have an account? <a href="#">Log in here</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
