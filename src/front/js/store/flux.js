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
						getActions().setAlert({
							type: "success",
							msg: data.msg,
							show: true
						});

						return true;
					})
					.catch(err => console.error(err));
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
