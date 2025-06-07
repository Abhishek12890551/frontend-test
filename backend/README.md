# Backend API - User Management & Preferences System

A RESTful API backend built with Node.js and Express.js for managing user authentication and preferences with dashboard functionality.

##  Tech Stack Used

-  Runtime : Node.js
-  Framework : Express.js
-  Database : MongoDB with Mongoose ODM
-  Authentication : JWT (JSON Web Tokens)
-  Password Hashing : bcryptjs
-  Validation : Joi
-  Environment Variables : dotenv
-  CORS : Cross-Origin Resource Sharing enabled
-  Development : Nodemon for auto-restart

##  Features

-  User Authentication 

  - User registration with email validation
  - User login with JWT token generation
  - Protected routes with JWT middleware
  - Password hashing with bcryptjs

-  User Profile Management 

  - Get user profile information
  - Update user profile details
  - Input validation with Joi schemas

-  Preferences System 

  - Save and retrieve user preferences
  - Widget-based dashboard configuration
  - Dashboard summary endpoint
  - Position and size management for widgets

-  Security Features 
  - JWT-based authentication
  - Password encryption
  - Input validation and sanitization
  - CORS protection
  - Error handling middleware

## 🛠️ Setup Instructions

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (local installation or MongoDB Atlas)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation Steps

1.  Clone the repository 

    bash
   git clone <repository-url>
   cd backend
    

2.  Install dependencies 

    bash
   npm install
    

3.  Environment Configuration 

   Create a `.env` file in the root directory and add the following variables:

    env
   # Server Configuration
   PORT=3000

   # Database Configuration
   MONGODB_URI=mongodb://localhost:27017/your_database_name
   # OR for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name

   # JWT Configuration
   JWT_SECRET=your_super_secret_jwt_key_here
   
    

4.  Start MongoDB 

   If using local MongoDB:

    bash
   mongod
    

   If using MongoDB Atlas, ensure your connection string is correct in the `.env` file.

5.  Run the application 

   For development (with auto-restart):

    bash
   npm run dev
    

   For production:

    bash
   npm start
    

The server will start on `http://localhost:3000` (or the port specified in your `.env` file).

## 📂 Project Structure

 
backend/
├── config/
│   └── db.js                 # Database configuration
├── controllers/
│   ├── userController.js     # User authentication & profile logic
│   └── preferencesController.js # Preferences management logic
├── middleware/
│   └── authMiddleware.js     # JWT authentication middleware
├── models/
│   ├── userModel.js          # User schema definition
│   └── preferencesModel.js   # Preferences schema definition
├── routes/
│   ├── userRoute.js          # User-related endpoints
│   └── preferencesRoute.js   # Preferences-related endpoints
├── utils/
│   └── validation.js         # Joi validation schemas
├── package.json              # Project dependencies
├── server.js                 # Main application entry point
└── README.md                 # Project documentation
 

## 🔌 API Endpoints

### Authentication Endpoints

| Method | Endpoint        | Description         | Authentication |
| ------ | --------------- | ------------------- | -------------- |
| POST   | `/api/register` | Register a new user | No             |
| POST   | `/api/login`    | Login user          | No             |

### User Profile Endpoints

| Method | Endpoint       | Description         | Authentication |
| ------ | -------------- | ------------------- | -------------- |
| GET    | `/api/profile` | Get user profile    | Required       |
| PATCH  | `/api/profile` | Update user profile | Required       |

### Preferences Endpoints

| Method | Endpoint                 | Description           | Authentication |
| ------ | ------------------------ | --------------------- | -------------- |
| GET    | `/api/preferences`       | Get user preferences  | Required       |
| POST   | `/api/preferences`       | Save user preferences | Required       |
| GET    | `/api/dashboard-summary` | Get dashboard summary | Required       |

### Example Request/Response

 Register User: 

 bash
POST /api/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
 

 Response: 

 json
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": "6843cd402663e209076a5e4b",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
 

## 🔧 Development

### Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon
- `npm test` - Run tests (currently not implemented)

### Environment Variables

| Variable         | Description                | Required | Default |
| ---------------- | -------------------------- | -------- | ------- |
| `PORT`           | Server port number         | No       | 3000    |
| `MONGODB_URI`    | MongoDB connection string  | Yes      | -       |
| `JWT_SECRET`     | Secret key for JWT signing | Yes      | -       |

## 🧪 Testing

To test the API endpoints, you can use tools like:

- [Postman](https://www.postman.com/)
- [Insomnia](https://insomnia.rest/)
- [Thunder Client](https://www.thunderclient.com/) (VS Code extension)
- curl commands

## 📱 Screenshots

### API Testing with Postman

1.  User Registration 
   - Screenshot of successful user registration

2.  User Login 
   - Screenshot of successful login with JWT token
3.  Protected Route Access 
   - Screenshot of accessing protected routes with JWT
4.  Preferences Management 
   - Screenshot of saving and retrieving preferences

### Database Structure

_Note: Add screenshots of your MongoDB collections here_

1.  Users Collection 
   - Screenshot of user documents in MongoDB
2.  Preferences Collection 
   - Screenshot of preferences documents in MongoDB

## 🚨 Error Handling

The API includes comprehensive error handling:

-  400 Bad Request : Invalid input data
-  401 Unauthorized : Missing or invalid JWT token
-  404 Not Found : Resource not found
-  500 Internal Server Error : Server-side errors

## 🔒 Security Considerations

- Passwords are hashed using bcryptjs
- JWT tokens for secure authentication
- Input validation using Joi schemas
- CORS enabled for cross-origin requests
- Environment variables for sensitive data

 Happy Coding! 🚀 