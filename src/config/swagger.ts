import swaggerJsdoc from "swagger-jsdoc";
import { OpenAPIV3 } from "openapi-types";

const options: {
  definition: OpenAPIV3.Document;
  apis: string[];
} = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Tamasha Auth Service",
      version: "1.0.0",
      description: "Authentication & Authorization APIs",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    paths: {}, 
  },
  apis: ["./src/routes/*.ts"],
};

export const swaggerSpec = swaggerJsdoc(options);
