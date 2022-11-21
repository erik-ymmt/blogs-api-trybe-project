## Blogs API Project

[Deploy link (Swagger Documentation)](http://ec2-18-228-39-56.sa-east-1.compute.amazonaws.com:3000/documentation/)

## About
&nbsp;&nbsp; This project is a RESTful API for a blog. It was implemented with Models, Services, and Controller(MSC) architecture, using MySQL for database. Its concept was made by [Trybe](https://www.betrybe.com/). For deployment I used AWS and documented it with Swagger.
	
## Files:
&nbsp;&nbsp; Project's base was developed by Trybe (Dockerfile, package.json, docker-compose.yml and other configurations). Files developed by me:
- everything on the `./src/` folder;
- the majority of `./swagger.json`.

## Technologies:
&nbsp;&nbsp; Technologies applied by me on this project:
- NodeJS;
- Express;
- Sequelize;
- MySQL;
- Docker;
- Swagger;
- AWS;

## How to run the project:
&nbsp;&nbsp; You can test the project on the cloud, with no installation needed, following the [deploy link](http://ec2-18-228-39-56.sa-east-1.compute.amazonaws.com:3000/documentation/) or, alternatively, install it on your machine.

Instalation steps:
- Make sure you have docker installed with versions 1.29 or higher;
- Git clone the repository;
- Run the database and the node containers with `docker-compose up -d`;
- Access the node container `docker exec -it blogs_api bash`; 
- Install all dependencies inside the container with `npm install`;
- Execute `npm run prestart` to initialize the database with sequelize; 
- You are ready to run the application! `npm start`; 
