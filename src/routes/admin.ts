import { Router } from "express";
import * as middleware from "../middleware/middleare";
import { getAllUsers } from "../controllers/admin";

const router = Router();

/**
 * @swagger
 * /api/admin/users:
 *   get:
 *     summary: Get all users (Admin only)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     description: |
 *       Returns all users (Admin access required).
 *
 *       **Curl Example**
 *       ```bash
 *       curl --location 'http://localhost:5000/api/admin/users' \
 *       --header 'Authorization: Bearer ACCESS_TOKEN'
 *       ```
 *     responses:
 *       200:
 *         description: List of users
 *       403:
 *         description: Forbidden
 */
router.get("/users", middleware.isAdmin, getAllUsers);


export default router;
