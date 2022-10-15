import { Express } from "express";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

export const Swagger = (app: Express) => {
  const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
      title: "Api Capacitação Node/React",
      description:
        "Api feita durante as aulas de capacitação em NodeJS e React",
      version: "1.0.0",
      servers: [
        {
          url: "http://localhost:3000",
          description: "Development server",
        },
      ],
    },
  };

  const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ["./src/routes/*.ts"],
  };

  const swaggerSpec = swaggerJSDoc(options);

  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
};
