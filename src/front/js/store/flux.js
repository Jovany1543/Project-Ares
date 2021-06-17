const getState = ({ getStore, getActions, setStore }) => {
	let base_url = process.env.BACKEND_URL;
	// let base_url = "https://3001-emerald-cattle-g1268cna.ws-us09.gitpod.io";

	return {
		store: {
			alert: {
				type: "",
				msg: "",
				show: false
			},
			message: null,
			user: {
				token: "",
				email: "",
				id: null
			},
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
			resetAlert: () => {
				setStore({
					alert: {
						type: "",
						msg: "",
						show: false
					}
				});
			},

			signup: data => {
				const store = getStore();
				console.log("data received", data);
				console.log(JSON.stringify(data));
				return fetch(`${base_url}/api/signup/`, {
					method: "POST",
					// causing POST 500 and 401 error
					// mode: "no-cors",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify(data)
				})
					.then(res => {
						if (res.status === 409)
							throw new Error(
								"The email address already exists. Please login to your account to continue."
							);
						// else if (!res.ok) throw new Error(res.statusText);

						return res.json();
					})
					.then(data => {
						console.log("data ", data);
						getActions().setAlert({
							type: "success",
							msg: data.msg,
							show: true
						});

						return true;
					})
					.catch(err => err);
			},

			handleLogin: user => {
				const store = getStore();
				store.user = user;
				store.user.loggedIn = true;
				setStore(store);
			},
			handleLogout: () => {
				const store = getStore();
				store.user = {
					token: "",
					email: "",
					id: null
				};
				store.user.loggedIn = false;
				setStore(store);
			},
			getGunData: () => {
				// fetching data from the backend
				fetch(`${base_url}/api/guns`)
					.then(resp => resp.json())
					.then(data => setStore({ gunData: data }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			getBookmarkData: () => {
				// fetching data from the backend
				let userObj = JSON.parse(sessionStorage.getItem("guniverse_user"));

				fetch(`${base_url}/api/bookmark/user/${userObj.id}`)
					.then(resp => resp.json())
					.then(data => {
						setStore({ bookmarkData: data });
					})
					.catch(error => console.log("Error loading message from backend", error));
			},
			getActivityData: () => {
				// fetching data from the backend
				fetch(`${base_url}/api/activities`)
					.then(resp => resp.json())
					.then(data => {
						setStore({ activityData: data });
					})
					.catch(error => console.log("Error loading message from backend", error));
			},
			addBookmark: gun => {
				let userObj = JSON.parse(sessionStorage.getItem("guniverse_user"));
				let user_id = userObj["id"];
				let gun_id = gun["id"];

				let payload = {
					gun: gun
				};
				console.log("Payload: ", payload);

				return fetch(`${base_url}/api/bookmark/user/${user_id}`, {
					method: "PUT",
					// mode: "no-cors",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(payload)
				})
					.then(res => {
						// if (!res.ok) throw new Error(res.statusText);
						return res.json();
					})
					.then(data =>
						setStore({
							user: {
								...data.user,
								loggedIn: true
							}
						})
					);
			},
			deleteBookmark: gun => {
				let userObj = JSON.parse(sessionStorage.getItem("guniverse_user"));
				let user_id = userObj["id"];
				let gun_id = gun["id"];

				let payload = {
					gun_id: gun_id
				};

				console.log("Payload: ", payload);

				return fetch(`${base_url}/api/bookmark/user/${user_id}`, {
					method: "DELETE",
					// mode: "no-cors",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(payload)
				})
					.then(res => {
						// if (!res.ok) throw new Error(res.statusText);
						return res.json();
					})
					.then(data =>
						setStore({
							user: {
								...data.user,
								loggedIn: true
							}
						})
					);
			}
		}
	};
};

export default getState;
