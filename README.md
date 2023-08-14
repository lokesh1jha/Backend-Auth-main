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

6. Build the project: npm run build
7. Start the Firebase emulators: firebase emulators:start


## Usage

This is backend of Authentication. So inorder to test it or get knowledge of working Postman to be used. 
Also testing can be done.

## API Documentation

Briefly describe the project's API endpoints and functionality. You can link to a separate document for detailed API documentation if available.

## Tests

Explain how to run tests and provide testing examples.

```sh
npm test
