# Tamasha – Authentication & Authorization Service

Tamasha is a backend authentication and authorization service built using Node.js, Express, TypeScript, and MongoDB. It implements JWT-based authentication, refresh tokens, role-based access control, and Swagger documentation with curl examples.

## 🚀 Features

- User registration with password hashing
- Login with JWT access token
- Refresh token mechanism
- Role-based authorization (USER / ADMIN)
- Numeric role mapping
- Swagger UI with auto-generated documentation
- curl examples in Swagger and README
- Centralized constants for messages
- Request logging middleware
- Fully type-safe (no `any`)

## 🧱 Tech Stack

- Node.js
- Express.js
- TypeScript
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- bcrypt
- Swagger (swagger-jsdoc, swagger-ui-express)

## 🔑 Role Mapping

| Role  | Value |
|-------|-------|
| USER  | 1     |
| ADMIN | 2     |

## 📂 Project Structure

```
tamasha/
├── src/
│   ├── config/
│   ├── constants/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── types/
│   └── utils/
│   ├── app.ts
├── tsconfig.json
├── package.json
└── .env
```

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/DevWizard08/Tamasha.git
cd Tamasha
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/tamasha
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1h
REFRESH_TOKEN_EXPIRES_IN=7
```

### 4️⃣ Run the Application

```bash
npm run dev
```

Server will start on:

```
http://localhost:5000
```

## 📘 Swagger API Documentation

Swagger UI is integrated into the same server. Access Swagger here:

```
http://localhost:5000/swagger
```

Swagger documentation is auto-generated from route-level comments and stays in sync with the APIs.

## 🔐 Authentication Flow

```
Register → Login → Access Protected APIs
                    ↓
            Access Token Expires
                    ↓
            Refresh Token → New Access Token
```

## 📌 API Endpoints

### 🔹 Auth APIs

| Method | Endpoint                    |
|--------|-----------------------------|
| POST   | /api/auth/register          |
| POST   | /api/auth/login             |
| POST   | /api/auth/refresh-token     |

### 🔹 User APIs (Protected)

| Method | Endpoint              | Role |
|--------|-----------------------|------|
| GET    | /api/user/profile     | USER |

### 🔹 Admin APIs (Protected)

| Method | Endpoint              | Role  |
|--------|-----------------------|-------|
| GET    | /api/admin/users      | ADMIN |

## 🔌 API Usage Examples (curl)

### ✅ Register User

```bash
curl --location 'http://localhost:5000/api/auth/register' \
--header 'Content-Type: application/json' \
--data-raw '{
  "email": "sanjeev@gmail.com",
  "password": "password123",
  "role": 2
}'
```

### ✅ Login

```bash
curl --location 'http://localhost:5000/api/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
  "email": "sanjeev@gmail.com",
  "password": "password123"
}'
```

### ✅ Get User Profile

```bash
curl --location 'http://localhost:5000/api/user/profile' \
--header 'Authorization: Bearer ACCESS_TOKEN'
```

### ✅ Get All Users (Admin Only)

```bash
curl --location 'http://localhost:5000/api/admin/users' \
--header 'Authorization: Bearer ACCESS_TOKEN'
```

### ✅ Refresh Access Token

```bash
curl --location 'http://localhost:5000/api/auth/refresh-token' \
--header 'Content-Type: application/json' \
--data '{
  "refreshToken": "YOUR_REFRESH_TOKEN"
}'
```

## 🔒 Security Practices

- Passwords are hashed using bcrypt before storing
- JWT secrets are stored in environment variables
- Role-based middleware enforces authorization
- Refresh tokens are stored securely in database
- Type-safe JWT payload and request handling

## 🧠 Design Decisions

- Numeric roles used instead of strings for reliability
- Route-level Swagger documentation using swagger-jsdoc
- Centralized constants for messages
- Aggregation pipeline used in refresh token flow
- No usage of `any` to ensure type safety

## 📝 Scripts

```bash
npm run dev      # Run development server
npm run build    # Compile TypeScript
npm start        # Run production build
```

## 👨‍💻 Author

**Sanjeev Kumar**  
Backend Developer
