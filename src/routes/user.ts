import { Router } from "express";
import * as middleware from "../middleware/middleare";
import { getProfile } from "../controllers/user";

const router = Router();

/**
 * @swagger
 * /api/user/profile:
 *   get:
 *     summary: Get logged-in user profile
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     description: |
 *       Returns the logged-in user's profile.
 *
 *       **Curl Example**
 *       ```bash
 *       curl --location 'http://localhost:5000/api/user/profile' \
 *       --header 'Authorization: Bearer ACCESS_TOKEN'
 *       ```
 *     responses:
 *       200:
 *         description: User profile returned
 *       401:
 *         description: Unauthorized
 */
router.get("/profile", middleware.isUser, getProfile);


export default router;
