const getState = ({ getStore, getActions, setStore }) => {
	let base_url = process.env.BACKEND_URL;
	// let base_url = "https://3001-green-cockroach-u3tjlvcb.ws-us08.gitpod.io";

	return {
		store: {
			alert: {
				type: "",
				msg: "",
				show: false
			},
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
						else if (!res.ok) throw new Error(res.statusText);

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
			getGunData: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/guns")
					.then(resp => resp.json())
					.then(data => setStore({ gunData: data }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			getBookmarkData: () => {
				// fetching data from the backend
				let userObj = JSON.parse(sessionStorage.getItem("guniverse_user"));

				fetch(process.env.BACKEND_URL + "/api/bookmark/user/" + userObj.id)
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
			// addBookmark: data => {
			// 	//get the store
			// 	return fetch(`${base_url}/api//bookmark/`, {
			//     method: "POST",
			//     // cors: "no-cors",
			//     headers: {
			//         "Content-Type": "application/json"
			//     },
			//     body: JSON.stringify({
			//         user_id: user_id,
			//         gun_id: gun_id
			//     })
			//     })
			//     .then(res => res.json())
			//     .then(data => {
			//         if (typeof data.user === "undefined") throw new Error(data.msg);

			//         // add token and info to local storage
			//         sessionStorage.setItem(
			//             "guniverse_user",
			//             JSON.stringify({
			//                 token: data.token,
			//                 email: data.user.email,
			//                 id: data.user.id
			//             })
			//         );
			//         props.setLoggedIn(true);
			//         history.push("/");
			//     })
			//     .catch(err =>
			//         actions.setAlert({
			//             type: "danger",
			//             msg: err.message,
			//             show: true
			//         })
			//     );
			// },
			// deleteBookmark: data => {
			// 	//get the store
			// 	const store = getStore();

			// 	let newFavorites = store.favorites.filter((item, i) => i != data);

			// 	setStore({ favorites: newFavorites });
			// },
		}
	};
};

export default getState;
