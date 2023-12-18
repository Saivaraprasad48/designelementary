# RemindME Server

This is the backend (server) component of a full-stack application with a monorepo structure. It is built using Node.js and Express.

## Project Structure

The backend project follows a modular structure to organize different components and features. Here is an overview of the project structure:

- `src`: Contains the source code of the server.
  - `index.js`: Entry point of the server.
  - `controllers`: Handles the logic of different routes.
  - `middlewares`: Custom middleware functions.
  - `models`: All the Database Models
  - `router`: Defines the API routes.
  - `socket`: handles websocket connection and their logic between client ans server.
  - `utils`: Utility functions and helpers.

## Tools and Technologies Used

- **Typescript:** A statically typed superset of JavaScript, bringing enhanced type-checking and tooling support to the PetConnect project.

- **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.

- **Express:** A minimal and flexible Node.js web application framework.

- **Database (Mongo DB):** Choose the database that best fits your project needs.

- **Mongoose:** ORM (Object Relational Mapper) library for Mongo DB and Node.js.

- **RESTful API Design:** Follows REST principles for designing APIs.

- **Middleware:** Utilizes middleware functions for route handling and error management.

- **Docker:** (optional) Containerization for easy deployment.
