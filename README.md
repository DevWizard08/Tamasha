# Tamasha – Authentication & Authorization Service

Tamasha is a backend service built with **Node.js, Express, TypeScript, MongoDB**, implementing **JWT-based authentication**, **refresh tokens**, and **role-based access control (RBAC)** with **Swagger documentation**.

This project follows clean **MVC architecture**, strong **TypeScript type safety**, and production-ready best practices.

---

## 🚀 Features

- User registration with hashed passwords
- Login with JWT access token
- Refresh token flow
- Role-based authorization (USER / ADMIN)
- Numeric role mapping for reliability
- Swagger UI with route-level documentation
- curl examples included in Swagger & README
- Centralized messages/constants
- Request logging middleware
- Fully type-safe (no `any`)

---

## 🧱 Tech Stack

- **Node.js**
- **Express.js**
- **TypeScript**
- **MongoDB + Mongoose**
- **JWT (jsonwebtoken)**
- **bcrypt**
- **Swagger (swagger-jsdoc + swagger-ui-express)**

---

## 🔑 Role Mapping

| Role Name | Value |
|---------|-------|
| USER | `1` |
| ADMIN | `2` |

---

## 📂 Project Structure

