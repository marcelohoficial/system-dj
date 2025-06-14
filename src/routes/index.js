import express from "express";
import jwt from "jsonwebtoken";
import { autenticarJWT } from "../middleware/auth.js";

const routes = express.Router();
const users = [];

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Realiza o cadastro do usuário
 *     description: Registra o usuário no sistema.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário cadastrado com sucesso.
 */
routes.post("/register", (req, res) => {
  const { email, password } = req.body;
  const user = { email, password };
  users.push(user);
  res.status(201).send("User registered");
});

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Realiza o login do usuário
 *     description: Autentica o usuário e retorna um token JWT.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login bem-sucedido, retorna o token JWT.
 *       401:
 *         description: Credenciais inválidas.
 */
routes.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    const token = jwt.sign({ email }, "segredoJWT", { expiresIn: "1h" });
    return res.json({ token });
  }
  res.status(401).send("Credenciais inválidas.");
});

/**
 * @swagger
 * /musicas:
 *   get:
 *     summary: Lista todas as músicas
 *     description: Retorna uma lista de músicas disponíveis.
 *     responses:
 *       200:
 *         description: Sucesso
 */
routes.get("/musicas", autenticarJWT, (_, res) => {
  res.json([
    { id: 1, titulo: "Música A", artista: "DJ A" },
    { id: 2, titulo: "Música B", artista: "DJ B" },
  ]);
});

export default routes;
