import express from "express";
import {
    crearReporte,
    obtenerReportes,
    buscarPorDescripcion,
    actualizarEstado
} from "../controllers/reporteController.js";

const router = express.Router();

router.post("/", crearReporte);
router.get("/", obtenerReportes);
router.get("/buscar", buscarPorDescripcion);
router.patch("/:id/estado", actualizarEstado);

export default router;
