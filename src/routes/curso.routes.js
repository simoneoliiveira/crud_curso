import cursoController from "../controller/curso.controller.js";
import { Router } from "express";

const cursoRouter = Router();

cursoRouter.post("/curso", cursoController.createCursoController);

export default cursoRouter;

