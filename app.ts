import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/config/db";
import authRoutes from "./src/routes/auth";
import adminRoutes from "./src/routes/admin";
import userRoutes from "./src/routes/user";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./src/config/swagger";
import { requestLogger } from "./src/middleware/logger";


dotenv.config();

const app = express();
app.use(requestLogger);
app.use(express.json());


app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes);
app.use("/api/admin",adminRoutes);

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));



connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT,() =>{
    console.log(`Server is running on  http://localhost:${PORT}`);
    console.log(`Swagger running on http://localhost:${PORT}/swagger`);
})