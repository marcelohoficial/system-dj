import path from "path";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "DJ Online",
      version: "1.0.0",
      description: "Atividade Prática II - Desenvolvimento Web Back-End",
    },
  },
  apis: [path.join(__dirname, "./routes/*.js")],
};

const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwagger;
