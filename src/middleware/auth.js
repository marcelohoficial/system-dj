import jwt from "jsonwebtoken";

export const autenticarJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token não fornecido." });
  }

  const token = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : authHeader;

  try {
    const decoded = jwt.verify(token, "segredoJWT");
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Erro ao verificar token:", error.message);
    res.status(401).json({ error: "Token inválido ou expirado." });
  }
};
