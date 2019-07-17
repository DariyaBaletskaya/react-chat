# Web server implementation using Node.js + Express.js
______

## What
This is my first Node.js server, which can handle some requests. It provides microservice architecture to achive modularity and scalability and split into layers (routes, services, middlewares and repositpries). 

Server was deployed to Heroku, so [**check it now**](https://node-server-bsa.herokuapp.com/) or run locally ->

## How to

1. `git clone git clone https://dariy_a@bitbucket.org/dariy_a/node-express-server-bsa2019.git`
2. `node-express-server-bsa2019`
3. `npm i`
4. `npm start`
5. By default server running on [localhost:3000](http://localhost:3000)

#### This server can handle following requests

- **GET**: _/user_  
  get an array of all users

- **GET**: _/user/:id_  
  get one user by ID

- **POST**: _/user_  
  create user according to the data from the request body

- **PUT**: _/user:id_  
  update user according to the data from the request body

- **DELETE**: _/user/:id_  
  delete one user by ID
