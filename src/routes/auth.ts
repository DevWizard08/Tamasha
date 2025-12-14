import { Router } from "express";
import { login, register, refreshToken } from "../controllers/auth";

const router = Router();

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     description: |
 *       Registers a new user.
 *
 *       **Curl Example**
 *       ```bash
 *       curl --location 'http://localhost:5000/api/auth/register' \
 *       --header 'Content-Type: application/json' \
 *       --data-raw '{
 *         "email": "sanjeev@gmail.com",
 *         "password": "password123",
 *         "role": 2
 *       }'
 *       ```
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password, role]
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: integer
 *                 description: 1 = USER, 2 = ADMIN
 *     responses:
 *       201:
 *         description: User registered successfully
 */
router.post("/register", register);


/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     description: |
 *       Authenticates a user and returns access & refresh tokens.
 *
 *       **Curl Example**
 *       ```bash
 *       curl --location 'http://localhost:5000/api/auth/login' \
 *       --header 'Content-Type: application/json' \
 *       --data-raw '{
 *         "email": "sanjeev@gmail.com",
 *         "password": "password123"
 *       }'
 *       ```
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 */
router.post("/login", login);


/**
 * @swagger
 * /api/auth/refresh-token:
 *   post:
 *     summary: Refresh access token
 *     tags: [Auth]
 *     description: |
 *       Generates a new access token using refresh token.
 *
 *       **Curl Example**
 *       ```bash
 *       curl --location 'http://localhost:5000/api/auth/refresh-token' \
 *       --header 'Content-Type: application/json' \
 *       --data '{
 *         "refreshToken": "ee2eca0216f69db92e22e00f985f3fd16a975029de6349cddcadeb504b853b88768f2d1437b3cba8"
 *       }'
 *       ```
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [refreshToken]
 *             properties:
 *               refreshToken:
 *                 type: string
 *     responses:
 *       200:
 *         description: New access token generated
 */
router.post("/refresh-token", refreshToken);


export default router;
