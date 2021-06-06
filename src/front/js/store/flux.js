const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			user: [],
			bookmarkData: [],
			gunData: [],
			activityData: []
		},
		actions: {
			// Use getActions to call a function within a function
			setAlert: payload => {
				/* payload should be an object with the following shape:
                    {
                        type: "",
                        msg: "",
                        show: false
                    }
                    type either: danger, success, warning
                */
				setStore({ alert: payload });
			},

			signup: data => {
				const store = getStore();
				console.log("data received", data);
				console.log(JSON.stringify(data));
				return fetch(`${base_url}/api/signup/`, {
					method: "POST",
					// mode: "no-cors",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify(data)
				})
					.then(res => {
						if (!res.ok) throw new Error(res.statusText);

						return res.json();
					})
					.then(data => {
						console.log("data ", data);
						setStore({
							user: {
								...store.user,
								...data.user
							}
						});
						getActions().setAlert({
							type: "success",
							msg: data.msg,
							show: true
						});

						return true;
					})
					.catch(err => console.error(err));

				//reset the global store
				// setStore({ demo: demo });
			},
			login: (email, password) => {
				const store = getStore();
				console.log("data received", email, " ", password);
				console.log(JSON.stringify(email, password));
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

						setStore({
							user: {
								...data.user,
								logged_in: true
							}
						});
						// add token and info to local storage
						localStorage.setItem(
							"guniverse_user",
							JSON.stringify({
								token: data.token,
								email: data.user.email,
								id: data.user.id
							})
						);
					})
					.catch(err =>
						getActions().setAlert({
							type: "danger",
							msg: err.message,
							show: true
						})
					);
			},
			logout: () => {
				setStore({
					user: {
						logged_in: false,
						fname: "",
						lname: "",
						email: "",
						id: null,
						bookmarks: []
					}
				});
				localStorage.setItem(
					"guniverse_user",
					JSON.stringify({
						token: "",
						email: "",
						id: ""
					})
				);
				//reset the global store
				setStore({ demo: demo });
			},
			getGunData: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/guns")
					.then(resp => resp.json())
					.then(data => setStore({ gunData: data }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			getBookmarkData: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/bookmark/user/1")
					.then(resp => resp.json())
					.then(data => {
						setStore({ bookmarkData: data });
					})
					.catch(error => console.log("Error loading message from backend", error));
			},
			getActivityData: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/activities")
					.then(resp => resp.json())
					.then(data => {
						setStore({ activityData: data });
					})
					.catch(error => console.log("Error loading message from backend", error));
			}
		}
	};
};

export default getState;
