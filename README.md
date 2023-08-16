# Backend-Auth Application

Backend-Auth is a TypeScript-based authentication application built using Firebase.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Tests](#tests)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

This project is based on Node.js.

### Prerequisites

- Node.js (Version 18.0.0 or higher)
- Firebase Acoount
- SendGrid account (for key)
- Mail id (to send mail)

### Installation

Follow these steps to set up and run the project:

1. Clone the repository.
2. Open your preferred code editor, like VSCode.
3. Navigate to the `functions` folder using the terminal: `cd functions`
4. Install npm dependencies: `npm install`
5. Create a `.env` file inside the `functions` folder and fill in the following values for the keys:

   ```plaintext
   NODE_ENV=
   APP_TITLE=
   JWT_SECRET=
   COOKIE_SECRET=
   FRONTEND_URL=
   SENDGRID_API_KEY=
   SENDGRID_FROM_EMAIL=
   JWT_SECRET=
   JWT_REFRESH_SECRET=
   REFRESH_TOKEN_EXPIRED_IN=
   JWT_ACCESS_SECRET=
   ACCESS_TOKEN_EXPIRED_IN=
   DB_HOST=
   DB_PORT=
   DB_USER=
   DB_PASSWORD=
   DB_NAME=

6. Build the project: ```npm run build```
7. Start the Firebase emulators: ```firebase emulators:start```


## Usage

This is backend of Authentication. So inorder to test it or get knowledge of working Postman to be used. 
Also testing can be done.

## API Documentation

## API Endpoints

## API Documentation

| Endpoint                         | Method | Description                            |
|----------------------------------|--------|----------------------------------------|
| `/api/auth/register`             | POST   | Register a new user.                   |
| `/api/auth/login`                | POST   | Log in an existing user.               |
| `/api/auth/logout`               | POST   | Log out the currently authenticated user. |
| `/api/auth/password/forgot`      | POST   | Request a password reset for the user's account. |
| `/api/auth/refresh`              | POST   | Refresh the access token.              |
| `/api/auth/password/reset`       | PUT    | Reset the password.                   |
| `/api/account/updateaccount`     | PUT    | Update the account information.       |
| `/api/account/password`          | PUT    | Update the password.                  |
| `/api/account/getaccountinfo`    | GET    | Get account information.              |


The above table outlines the available API endpoints, their associated HTTP methods, and a brief description of their purposes. Please consult the API documentation for more detailed information about request and response formats, required parameters, and expected outcomes for each endpoint.

# Backend-Auth API Documentation

## Login/Register

### Register User

- **Method:** POST
- **Endpoint:** `/api/auth/register`
- **URL:** http://127.0.0.1:5001/backend-auth-willeder/asia-northeast1/api/auth/register
- **Request Body:**
    ```json
    {
        "email": "lokesh12jha@gmail.com",
        "password": "Lokesh12@jha",
        "name": "Lokesh Jha",
        "phone": "9768523325",
        "address": "Noida, UP"
    }
    ```

### Login User

- **Method:** PUT
- **Endpoint:** `/api/auth/login`
- **URL:** http://127.0.0.1:5001/backend-auth-willeder/asia-northeast1/api/auth/login
- **Request Body:**
    ```json
    {
        "email": "lokesh12jha@gmail.com",
        "password": "Lokesh12@jha"
    }
    ```

### Logout User

- **Method:** PUT
- **Endpoint:** `/api/auth/logout`
- **URL:** http://127.0.0.1:5001/backend-auth-willeder/asia-northeast1/api/auth/logout
- **Request Headers:**
    ```
    Authorization: [Access Token]
    ```

### Forgot Password

- **Method:** PUT
- **Endpoint:** `/api/auth/password/forgot`
- **URL:** http://127.0.0.1:5001/backend-auth-willeder/asia-northeast1/api/auth/password/forgot
- **Request Body:**
    ```json
    {
        "email": "lokesh1jha@gmail.com"
    }
    ```

### Refresh Access Token

- **Method:** POST
- **Endpoint:** `/api/auth/refresh`
- **URL:** http://127.0.0.1:5001/backend-auth-willeder/asia-northeast1/api/auth/refresh
- **Request Body:**
    ```json
    {
        "refreshToken": [Refresh Token]
    }
    ```

## Account

### Update Account Information

- **Method:** PUT
- **Endpoint:** `/api/account/updateaccount`
- **URL:** http://127.0.0.1:5001/backend-auth-willeder/asia-northeast1/api/account/updateaccount
- **Request Headers:**
    ```
    Authorization: [Access Token]
    ```
- **Request Body:**
    ```json
    {
        "name": "Lokesh Jha",
        "phone": "9768523325",
        "address": "Noida"
    }
    ```

### Update Password

- **Method:** PUT
- **Endpoint:** `/api/account/password`
- **URL:** http://127.0.0.1:5001/backend-auth-willeder/asia-northeast1/api/account/password
- **Request Headers:**
    ```
    Authorization: [Access Token]
    ```
- **Request Body:**
    ```json
    {
        "password": "Lokesh1234@jha"
    }
    ```

### Get Account Information

- **Method:** GET
- **Endpoint:** `/api/account/getaccountinfo`
- **URL:** http://127.0.0.1:5001/backend-auth-willeder/asia-northeast1/api/account/password
- **Request Headers:**
    ```
    Authorization: [Access Token]
    ```
- **Request Body:**
    ```json
    {
        "password": "Lokesh1234@jha"
    }
    ```



## Tests

To run test 

```sh
npm test
