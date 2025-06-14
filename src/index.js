import cors from "cors";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import routes from "./routes/index.js";
import setupSwagger from "./swagger.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cors());
app.use(routes);
setupSwagger(app);

app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
