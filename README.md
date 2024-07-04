# Realestate_app Documentation

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [User](#user)
  - [Properties](#properties)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Introduction
Realestate_app is a comprehensive real estate application that allows users to list, browse, and manage properties. This application includes features like real-time updates, user authentication, and an intuitive user interface.

## Features
- **Property Listing and Management**: Users can add, update, and delete property listings.
- **Real-time Updates**: Updates to property listings are reflected in real-time using Socket.io.
- **User Authentication and Authorization**: Secure user registration and login.
- **Responsive Design**: Optimized for various devices.

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js
- npm
- MongoDB

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/YoTi1412/Realestate_app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Realestate_app
   ```
3. Install the dependencies for both the server and client:
   ```bash
   cd api && npm install
   cd ../client && npm install
   ```

## Configuration
1. Create a `.env` file in the `api` directory and add your environment variables:
   ```plaintext
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```
2. Create a `.env` file in the `client` directory if needed.

## Usage

### Starting the Server
1. In the `api` directory, start the server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000`.

### Starting the Client
1. In the `client` directory, start the client application:
   ```bash
   npm start
   ```
   The client will run on `http://localhost:3000`.

## API Endpoints

### User
- **Register a new user**
  - **Endpoint**: `POST /api/users/register`
  - **Body Parameters**:
    ```json
    {
      "name": "string",
      "email": "string",
      "password": "string"
    }
    ```
  - **Response**:
    ```json
    {
      "token": "string",
      "user": {
        "_id": "string",
        "name": "string",
        "email": "string"
      }
    }
    ```

- **Login a user**
  - **Endpoint**: `POST /api/users/login`
  - **Body Parameters**:
    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```
  - **Response**:
    ```json
    {
      "token": "string",
      "user": {
        "_id": "string",
        "name": "string",
        "email": "string"
      }
    }
    ```

### Properties
- **Get all properties**
  - **Endpoint**: `GET /api/properties`
  - **Response**:
    ```json
    [
      {
        "_id": "string",
        "title": "string",
        "description": "string",
        "price": "number",
        "location": "string",
        "image": "string",
        "createdAt": "string",
        "updatedAt": "string"
      }
    ]
    ```

- **Add a new property**
  - **Endpoint**: `POST /api/properties`
  - **Body Parameters**:
    ```json
    {
      "title": "string",
      "description": "string",
      "price": "number",
      "location": "string",
      "image": "string"
    }
    ```
  - **Response**:
    ```json
    {
      "_id": "string",
      "title": "string",
      "description": "string",
      "price": "number",
      "location": "string",
      "image": "string",
      "createdAt": "string",
      "updatedAt": "string"
    }
    ```

- **Get a property by ID**
  - **Endpoint**: `GET /api/properties/:id`
  - **Response**:
    ```json
    {
      "_id": "string",
      "title": "string",
      "description": "string",
      "price": "number",
      "location": "string",
      "image": "string",
      "createdAt": "string",
      "updatedAt": "string"
    }
    ```

- **Update a property by ID**
  - **Endpoint**: `PUT /api/properties/:id`
  - **Body Parameters**:
    ```json
    {
      "title": "string",
      "description": "string",
      "price": "number",
      "location": "string",
      "image": "string"
    }
    ```
  - **Response**:
    ```json
    {
      "_id": "string",
      "title": "string",
      "description": "string",
      "price": "number",
      "location": "string",
      "image": "string",
      "createdAt": "string",
      "updatedAt": "string"
    }
    ```

- **Delete a property by ID**
  - **Endpoint**: `DELETE /api/properties/:id`
  - **Response**:
    ```json
    {
      "message": "Property deleted successfully"
    }
    ```

## Project Structure
```
Realestate_app/
├── api/
│   ├── models/
│   │   ├── Property.js
│   │   └── User.js
│   ├── routes/
│   │   ├── propertyRoutes.js
│   │   └── userRoutes.js
│   ├── controllers/
│   │   ├── propertyController.js
│   │   └── userController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── config/
│   │   └── db.js
│   ├── server.js
│   └── .env
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── PropertyList.js
│   │   │   ├── PropertyForm.js
│   │   │   ├── Header.js
│   │   │   └── Footer.js
│   │   ├── pages/
│   │   │   ├── HomePage.js
│   │   │   ├── PropertyPage.js
│   │   │   ├── LoginPage.js
│   │   │   └── RegisterPage.js
│   │   ├── services/
│   │   │   ├── propertyService.js
│   │   │   └── userService.js
│   │   ├── styles/
│   │   │   ├── App.css
│   │   │   ├── PropertyList.css
│   │   │   └── PropertyForm.css
│   │   ├── App.js
│   │   ├── index.js
│   │   └── .env
├── socket/
│   └── index.js
├── .gitignore
├── README.md
└── package.json
```

## Technologies Used
- **Frontend**: 
  - React
  - SCSS
- **Backend**: 
  - Node.js
  - Express
- **Database**: 
  - MongoDB
- **Real-time**: 
  - Socket.io

## Contributing
1. Fork the repository
2. Create your feature branch:
   ```bash
   git checkout -b feature/my-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/my-feature
   ```
5. Open a pull request

### And Thank you <3
