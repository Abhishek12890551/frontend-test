# 🚀 Backend API - User Management & Preferences System

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)

> A comprehensive RESTful API backend built with Node.js and Express.js for managing user authentication and preferences with dashboard functionality.

## 🛠️ Tech Stack

| Technology     | Purpose                  | Version |
| -------------- | ------------------------ | ------- |
| **Node.js**    | JavaScript Runtime       | v16+    |
| **Express.js** | Web Framework            | Latest  |
| **MongoDB**    | Database                 | Latest  |
| **Mongoose**   | ODM                      | Latest  |
| **JWT**        | Authentication           | Latest  |
| **bcryptjs**   | Password Hashing         | Latest  |
| **Joi**        | Input Validation         | Latest  |
| **dotenv**     | Environment Variables    | Latest  |
| **CORS**       | Cross-Origin Requests    | Latest  |
| **Nodemon**    | Development Auto-restart | Latest  |

## ✨ Features

### 🔐 User Authentication

- ✅ User registration with email validation
- ✅ User login with JWT token generation
- ✅ Protected routes with JWT middleware
- ✅ Password hashing with bcryptjs

### 👤 User Profile Management

- ✅ Get user profile information
- ✅ Update user profile details
- ✅ Input validation with Joi schemas

### ⚙️ Preferences System

- ✅ Save and retrieve user preferences
- ✅ Widget-based dashboard configuration
- ✅ Dashboard summary endpoint
- ✅ Position and size management for widgets

### 🛡️ Security Features

- ✅ JWT-based authentication
- ✅ Password encryption
- ✅ Input validation and sanitization
- ✅ CORS protection
- ✅ Error handling middleware

## � Quick Start

### 📋 Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (local installation or MongoDB Atlas)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment setup**

   Create a `.env` file in the root directory:

   ```env
   # Server Configuration
   PORT=3000

   # Database Configuration
   MONGODB_URI=mongodb://localhost:27017/your_database_name
   # OR for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name

   # JWT Configuration
   JWT_SECRET=your_super_secret_jwt_key_here
   ```

4. **Start MongoDB**

   For local MongoDB:

   ```bash
   mongod
   ```

   For MongoDB Atlas, ensure your connection string is correct in the `.env` file.

5. **Run the application**

   **Development mode** (with auto-restart):

   ```bash
   npm run dev
   ```

   **Production mode**:

   ```bash
   npm start
   ```

🎉 **Server will start on** `http://localhost:3000` (or the port specified in your `.env` file).

## � Project Structure

```
backend/
├── 📁 config/
│   └── 🔧 db.js                    # Database configuration
├── 📁 controllers/
│   ├── 👤 userController.js        # User authentication & profile logic
│   └── ⚙️ preferencesController.js # Preferences management logic
├── 📁 middleware/
│   └── 🔒 authMiddleware.js         # JWT authentication middleware
├── 📁 models/
│   ├── 👤 userModel.js             # User schema definition
│   └── ⚙️ preferencesModel.js      # Preferences schema definition
├── 📁 routes/
│   ├── 🛣️ userRoute.js             # User-related endpoints
│   └── 🛣️ preferencesRoute.js      # Preferences-related endpoints
├── 📁 utils/
│   └── ✅ validation.js            # Joi validation schemas
├── 📦 package.json                 # Project dependencies
├── 🚀 server.js                   # Main application entry point
└── 📖 README.md                   # Project documentation
```

## 🌐 API Endpoints

### 🔐 Authentication Endpoints

| Method | Endpoint        | Description         | Authentication | Status    |
| ------ | --------------- | ------------------- | -------------- | --------- |
| `POST` | `/api/register` | Register a new user | ❌ No          | ✅ Active |
| `POST` | `/api/login`    | Login user          | ❌ No          | ✅ Active |

### 👤 User Profile Endpoints

| Method  | Endpoint       | Description         | Authentication | Status    |
| ------- | -------------- | ------------------- | -------------- | --------- |
| `GET`   | `/api/profile` | Get user profile    | ✅ Required    | ✅ Active |
| `PATCH` | `/api/profile` | Update user profile | ✅ Required    | ✅ Active |

### ⚙️ Preferences Endpoints

| Method | Endpoint                 | Description           | Authentication | Status    |
| ------ | ------------------------ | --------------------- | -------------- | --------- |
| `GET`  | `/api/preferences`       | Get user preferences  | ✅ Required    | ✅ Active |
| `POST` | `/api/preferences`       | Save user preferences | ✅ Required    | ✅ Active |
| `GET`  | `/api/dashboard-summary` | Get dashboard summary | ✅ Required    | ✅ Active |

---

### 📝 Example Usage

<details>
<summary><strong>🔄 User Registration</strong></summary>

**Request:**

```bash
POST /api/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": "6843cd402663e209076a5e4b",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

</details>

<details>
<summary><strong>🔑 User Login</strong></summary>

**Request:**

```bash
POST /api/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "6843cd402663e209076a5e4b",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

</details>

## � Development

### 📜 Available Scripts

| Script          | Command       | Description                                |
| --------------- | ------------- | ------------------------------------------ |
| **Start**       | `npm start`   | 🚀 Start the production server             |
| **Development** | `npm run dev` | 🔧 Start development server with nodemon   |
| **Test**        | `npm test`    | 🧪 Run tests _(currently not implemented)_ |

### 🔧 Environment Variables

| Variable      | Description                | Required | Default | Example                           |
| ------------- | -------------------------- | -------- | ------- | --------------------------------- |
| `PORT`        | Server port number         | ❌ No    | `3000`  | `3000`                            |
| `MONGODB_URI` | MongoDB connection string  | ✅ Yes   | -       | `mongodb://localhost:27017/myapp` |
| `JWT_SECRET`  | Secret key for JWT signing | ✅ Yes   | -       | `your_super_secret_key`           |

> ⚠️ **Important:** Never commit your `.env` file to version control!

## 🧪 Testing the API

### 🛠️ Recommended Testing Tools

| Tool                                                 | Platform     | Description                   |
| ---------------------------------------------------- | ------------ | ----------------------------- |
| [**Postman**](https://www.postman.com/)              | Desktop/Web  | Most popular API testing tool |
| [**Insomnia**](https://insomnia.rest/)               | Desktop      | Lightweight REST client       |
| [**Thunder Client**](https://www.thunderclient.com/) | VS Code      | Extension for VS Code         |
| **cURL**                                             | Command Line | Terminal-based testing        |

### 📱 API Testing Screenshots

<details>
<summary><strong>📊 View API Testing Screenshots</strong></summary>

#### 🔄 User Registration

_Screenshot of successful user registration_
![User Registration](Screenshot%202025-06-07%20105549-1.png)

#### 🔑 User Login

_Screenshot of successful login with JWT token_
![User Login](Screenshot%202025-06-07%20110334.png)

#### 🔒 Protected Route Access

_Screenshot of accessing protected routes with JWT_
![Protected Routes](Screenshot%202025-06-07%20110431.png)

#### ⚙️ Preferences Management

_Screenshot of retrieving preferences_
![Preferences](Screenshot%202025-06-07%20110519.png)

#### 📊 Dashboard Summary

_Screenshot of accessing the dashboard with token_
![Dashboard](Screenshot%202025-06-07%20110620.png)

</details>

## 🚨 Error Handling

The API includes comprehensive error handling with standardized HTTP status codes:

| Status Code | Error Type                | Description                  | Example                    |
| ----------- | ------------------------- | ---------------------------- | -------------------------- |
| `400`       | **Bad Request**           | Invalid input data           | Missing required fields    |
| `401`       | **Unauthorized**          | Missing or invalid JWT token | Token expired              |
| `404`       | **Not Found**             | Resource not found           | User doesn't exist         |
| `500`       | **Internal Server Error** | Server-side errors           | Database connection failed |

### � Error Response Format

```json
{
  "success": false,
  "error": "Error message description",
  "statusCode": 400
}
```

## �🔒 Security Features

### 🛡️ Security Measures Implemented

| Feature                   | Implementation    | Purpose                       |
| ------------------------- | ----------------- | ----------------------------- |
| **Password Hashing**      | bcryptjs          | Secure password storage       |
| **JWT Authentication**    | jsonwebtoken      | Stateless authentication      |
| **Input Validation**      | Joi schemas       | Prevent malicious input       |
| **CORS Protection**       | cors middleware   | Control cross-origin requests |
| **Environment Variables** | dotenv            | Secure sensitive data         |
| **Error Handling**        | Custom middleware | Prevent information leakage   |

### 🔐 Security Best Practices

- ✅ Passwords are never stored in plain text
- ✅ JWT tokens have expiration times
- ✅ All user inputs are validated and sanitized
- ✅ Sensitive configuration stored in environment variables
- ✅ Detailed error messages are not exposed to clients
- ✅ CORS is configured to prevent unauthorized access

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you have any questions or need help, please:

- 📧 Open an issue on GitHub
- 💬 Contact the development team
- 📖 Check the documentation

---

<div align="center">

### 🚀 Happy Coding!

Made with ❤️ by the Development Team

![Node.js](https://img.shields.io/badge/Node.js-Ready-green?style=flat-square)
![MongoDB](https://img.shields.io/badge/MongoDB-Connected-brightgreen?style=flat-square)
![API](https://img.shields.io/badge/API-Stable-blue?style=flat-square)

</div>
