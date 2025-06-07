# Authentication & Settings API

A comprehensive REST API for user authentication and settings management built with Node.js, Express, MongoDB, and JWT.

## Features

- User authentication (register, login, profile management)
- User preferences and settings management
- Dashboard summary with dummy data
- Input validation with Joi
- JWT-based authentication
- Modular folder structure
- Environment configuration
- Error handling middleware

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (jsonwebtoken), bcryptjs
- **Validation**: Joi
- **Environment**: dotenv
- **CORS**: cors middleware

## Setup Instructions

1. **Clone and navigate to the project**

   ```bash
   cd backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Configuration**

   - Copy `.env.example` to `.env`
   - Update the following variables:
     ```env
     PORT=3000
     MONGODB_URI=mongodb://localhost:27017/auth-settings-api
     JWT_SECRET=your-super-secret-jwt-key-here
     ```

4. **Start MongoDB**

   - Ensure MongoDB is running on your local machine
   - Or use MongoDB Atlas cloud database

5. **Run the application**

   ```bash
   # Development mode with nodemon
   npm run dev

   # Production mode
   npm start
   ```

## API Endpoints

### Authentication

#### POST `/api/register`

Register a new user.

**Request Body:**

```json
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
    "id": "userId",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### POST `/api/login`

Login user and return JWT token.

**Request Body:**

```json
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
  "token": "jwt-token",
  "user": {
    "id": "userId",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### GET `/api/profile` 🔒

Get user profile (protected route).

**Headers:**

```
Authorization: Bearer <jwt-token>
```

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "userId",
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2025-06-07T00:00:00.000Z",
    "updatedAt": "2025-06-07T00:00:00.000Z"
  }
}
```

#### PATCH `/api/profile` 🔒

Update user profile (protected route).

**Headers:**

```
Authorization: Bearer <jwt-token>
```

**Request Body:**

```json
{
  "name": "John Updated",
  "email": "john.updated@example.com"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Profile updated successfully",
  "data": {
    "id": "userId",
    "name": "John Updated",
    "email": "john.updated@example.com",
    "createdAt": "2025-06-07T00:00:00.000Z",
    "updatedAt": "2025-06-07T00:00:00.000Z"
  }
}
```

### Preferences

#### GET `/api/preferences` 🔒

Get user preferences (protected route).

**Headers:**

```
Authorization: Bearer <jwt-token>
```

**Response:**

```json
{
  "success": true,
  "data": {
    "userId": "userId",
    "theme": "light",
    "dashboardLayout": {
      "sidebarCollapsed": false,
      "gridSize": "medium",
      "widgets": []
    },
    "notifications": {
      "email": true,
      "push": true,
      "desktop": false
    },
    "createdAt": "2025-06-07T00:00:00.000Z",
    "updatedAt": "2025-06-07T00:00:00.000Z"
  }
}
```

#### POST `/api/preferences` 🔒

Save user preferences (protected route).

**Headers:**

```
Authorization: Bearer <jwt-token>
```

**Request Body:**

```json
{
  "theme": "dark",
  "dashboardLayout": {
    "sidebarCollapsed": true,
    "gridSize": "large",
    "widgets": [
      {
        "id": "widget-1",
        "position": { "x": 0, "y": 0 },
        "size": { "width": 2, "height": 1 },
        "visible": true
      }
    ]
  },
  "notifications": {
    "email": false,
    "push": true,
    "desktop": true
  }
}
```

**Response:**

```json
{
  "success": true,
  "message": "Preferences saved successfully",
  "data": {
    "userId": "userId",
    "theme": "dark",
    "dashboardLayout": {
      "sidebarCollapsed": true,
      "gridSize": "large",
      "widgets": [
        {
          "id": "widget-1",
          "position": { "x": 0, "y": 0 },
          "size": { "width": 2, "height": 1 },
          "visible": true
        }
      ]
    },
    "notifications": {
      "email": false,
      "push": true,
      "desktop": true
    },
    "createdAt": "2025-06-07T00:00:00.000Z",
    "updatedAt": "2025-06-07T00:00:00.000Z"
  }
}
```

### Dashboard

#### GET `/api/dashboard-summary` 🔒

Get dashboard summary with dummy data (protected route).

**Headers:**

```
Authorization: Bearer <jwt-token>
```

**Response:**

```json
{
  "success": true,
  "data": {
    "user": {
      "id": "userId",
      "name": "John Doe",
      "email": "john@example.com",
      "joinedDate": "2025-06-07T00:00:00.000Z"
    },
    "teams": [
      {
        "id": "team-1",
        "name": "Development Team",
        "members": 8,
        "role": "Frontend Developer",
        "status": "active"
      }
    ],
    "projects": [
      {
        "id": "proj-1",
        "name": "E-commerce Platform",
        "progress": 75,
        "status": "in-progress",
        "dueDate": "2025-07-15",
        "priority": "high",
        "tasksCompleted": 45,
        "totalTasks": 60
      }
    ],
    "notifications": [
      {
        "id": "notif-1",
        "type": "task",
        "title": "New task assigned",
        "message": "You have been assigned to 'Update user authentication'",
        "timestamp": "2025-06-06T22:00:00.000Z",
        "read": false,
        "priority": "medium"
      }
    ],
    "stats": {
      "totalProjects": 15,
      "activeProjects": 8,
      "completedProjects": 7,
      "totalTasks": 342,
      "completedTasks": 189,
      "pendingTasks": 153,
      "teamMembers": 24,
      "unreadNotifications": 2
    },
    "recentActivity": [
      {
        "id": "activity-1",
        "type": "task_completed",
        "description": "Completed 'User interface mockups'",
        "timestamp": "2025-06-06T23:30:00.000Z",
        "project": "Mobile App Redesign"
      }
    ]
  }
}
```

## Validation Rules

### User Registration

- **name**: Required, 2-50 characters
- **email**: Required, valid email format
- **password**: Required, minimum 6 characters

### User Login

- **email**: Required, valid email format
- **password**: Required

### Profile Update

- **name**: Optional, 2-50 characters if provided
- **email**: Optional, valid email format if provided

### Preferences

- **theme**: Optional, one of: "light", "dark", "auto"
- **dashboardLayout**: Optional object with:
  - **sidebarCollapsed**: Boolean
  - **gridSize**: One of: "small", "medium", "large"
  - **widgets**: Array of widget objects
- **notifications**: Optional object with:
  - **email**: Boolean
  - **push**: Boolean
  - **desktop**: Boolean

## Error Responses

All endpoints return standardized error responses:

```json
{
  "success": false,
  "message": "Error message",
  "errors": [
    {
      "field": "fieldName",
      "message": "Validation error message"
    }
  ]
}
```

## Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request (validation errors, user already exists)
- `401` - Unauthorized (invalid credentials, expired token)
- `404` - Not Found (user not found, route not found)
- `500` - Internal Server Error

## Project Structure

```
backend/
├── config/
│   └── db.js              # Database connection
├── controllers/
│   ├── userController.js      # User authentication logic
│   └── preferencesController.js # Preferences & dashboard logic
├── middleware/
│   └── authMiddleware.js      # JWT authentication middleware
├── models/
│   ├── userModel.js           # User schema
│   └── preferencesModel.js    # Preferences schema
├── routes/
│   ├── userRoute.js           # User routes
│   └── preferencesRoute.js    # Preferences routes
├── utils/
│   └── validation.js          # Joi validation schemas
├── .env.example              # Environment variables template
├── package.json              # Dependencies and scripts
└── server.js                 # Application entry point
```

## Testing with Postman/Thunder Client

1. **Register a new user**: POST `/api/register`
2. **Login**: POST `/api/login` (save the token)
3. **Get profile**: GET `/api/profile` (with Bearer token)
4. **Update profile**: PATCH `/api/profile` (with Bearer token)
5. **Get preferences**: GET `/api/preferences` (with Bearer token)
6. **Save preferences**: POST `/api/preferences` (with Bearer token)
7. **Get dashboard**: GET `/api/dashboard-summary` (with Bearer token)

## Security Features

- ✅ Password hashing with bcryptjs
- ✅ JWT token authentication
- ✅ Input validation and sanitization
- ✅ Environment variable configuration
- ✅ CORS protection
- ✅ Error handling middleware
- ✅ MongoDB injection protection (via Mongoose)

## Future Enhancements

- Rate limiting
- Email verification
- Password reset functionality
- Role-based access control
- Audit logging
- API documentation with Swagger
- Unit and integration tests
