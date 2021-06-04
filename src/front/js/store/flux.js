const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			gunData: [
				{
					id: "1",
					name: "Glock 19M",
					manufacturer: "Glock",
					caliber: "9mm",
					barrelLength: '4.02"',
					capacity: "15+1",
					category: "handgun",
					type: "semi-auto",
					weight: "24.83 oz"
				},
				{
					id: "2",
					name: "Glock 17",
					manufacturer: "Glock",
					caliber: "9mm",
					barrelLength: '4.49"',
					capacity: "17+1",
					category: "handgun",
					type: "semi-auto",
					weight: "22.04 oz"
				},
				{
					id: "1",
					name: "Baretta 92 FS",
					manufacturer: "Glock",
					caliber: "9mm",
					barrelLength: '4.02"',
					capacity: "10",
					category: "handgun",
					type: "semi-auto",
					weight: "24.83 oz"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getGunData: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/guns")
					.then(resp => resp.json())
					.then(data => setStore({ gunData: data }))
					.catch(error => console.log("Error loading message from backend", error));
			}
		}
	};
};

export default getState;
