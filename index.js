import express from "express";
import cursoRouter from "./src/routes/curso.routes.js";

const app = express();

app.use(express.json());
app.use(cursoRouter);

app.listen(3000, () => {
    console.log("Servidor iniciado com sucesso na porta 3000...");
});