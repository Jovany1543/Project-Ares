
This full stack web application serves as a knowledge center for those looking to learn about the world of firearms. This RESTful API allows the user to find information about firearms, their category, and what it takes to operate or own one. Use of React Router was made in order to improve the user's navigation when trying to locate a specific gun or browse by category. In the backend it makes use of Python, and Flask SQLAlchemy to manage a database that stores information about the firearms, the user and bookmarks. 

For this program we used HTML5, CSS, Javascript, React Bootstrap, Python, Flask SQLAlchemy, and Heroku.

Website preview:

<a href="https://www.loom.com/share/20c3949b61fe4baabeb87c897a420782"><img src="https://media.giphy.com/media/th0rbxMguFicnMzT7M/giphy.gif" /></a>

### Back-End Manual Installation:

It is recomended to install the backend first, make sure you have Python 3.8, Pipenv and a database engine (Posgress recomended)

1. Install the python packages: `$ pipenv install`
2. Create a .env file based on the .env.example: `$ cp .env.example .env`
3. Install your database engine and create your database, depending on your database you have to create a DATABASE_URL variable with one of the possible values, make sure yo replace the valudes with your database information:

| Engine	| DATABASE_URL 						|
| ------------- | ----------------------------------------------------- |
| SQLite	| sqlite:////test.db	 				|
| MySQL		| mysql://username:password@localhost:port/example	|
| Postgress	| postgres://username:password@localhost:5432/example 	|

4. Migrate the migrations: `$ pipenv run migrate` (skip if you have not made changes to the models on the `./src/api/models.py`)
5. Run the migrations: `$ pipenv run upgrade`
6. Run the application: `$ pipenv run start


### Front-End Manual Installation:

- Make sure you are using node version 14+ and that you have already successfully installed and runned the backend.

1. Install the packages: `$ npm install`
2. Start coding! start the webpack dev server `$ npm run start`

