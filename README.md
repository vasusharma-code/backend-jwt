# User Management Application

This is a simple user management application built with Express.js and MongoDB. It allows users to register, log in, and search for user information using a RESTful API. The application uses JWT for authentication and enforces data validation on the server side.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd user-management-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB connection string and JWT secret:
   ```
   MONGODB_URI=<mongodb://localhost:27017/mgmt>
   JWT_SECRET=<HGSDHDHSKJDJNKJSJN348USDU>
   ```

5. Start the application:
   ```
   npm start
   ```

## Usage

You can use Postman to interact with the API. Below are the available endpoints:

## API Endpoints

- **User Registration**
  - **Endpoint:** `POST /api/users/register`
  - **Request Body:**
    ```json
    {
      "username": "string",
      "password": "string",
      "fullName": "string",
      "gender": "string",
      "dateOfBirth": "YYYY-MM-DD",
      "country": "string"
    }
    ```

- **User Login**
  - **Endpoint:** `POST /api/users/login`
  - **Request Body:**
    ```json
    {
      "username": "string",
      "password": "string"
    }
    ```

- **Search User**
  - **Endpoint:** `GET /api/users/search`
  - **Query Parameters:**
    - `username` (optional)
    - `email` (optional)

## Technologies Used

- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- dotenv

## License

This project is licensed under the MIT License.