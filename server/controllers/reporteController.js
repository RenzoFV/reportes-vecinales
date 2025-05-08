import Reporte from "../models/Reporte.js";

// Crear un nuevo reporte
export const crearReporte = async (req, res) => {
    try {
        const nuevoReporte = new Reporte(req.body);
        const reporteGuardado = await nuevoReporte.save();
        res.status(201).json(reporteGuardado);
    } catch (error) {
        res.status(400).json({ mensaje: "Error al crear el reporte", error });
    }
};

// Obtener todos los reportes
export const obtenerReportes = async (req, res) => {
    try {
        const reportes = await Reporte.find().sort({ fecha: -1 });
        res.json(reportes);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener los reportes", error });
    }
};

export const buscarPorDescripcion = async (req, res) => {
    try {
        const { descripcion } = req.query;
        const regex = new RegExp(descripcion, 'i');
        const resultados = await Reporte.find({ descripcion: regex });
        res.json(resultados);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al buscar reportes", error });
    }
};

// Actualizar el estado de un reporte
export const actualizarEstado = async (req, res) => {
    try {
        const { id } = req.params;
        const { estado } = req.body;

        if (!['abierto', 'en proceso', 'cerrado'].includes(estado)) {
            return res.status(400).json({ mensaje: "Estado no válido" });
        }

        const reporte = await Reporte.findByIdAndUpdate(
            id,
            { estado },
            { new: true }
        );

        if (!reporte) {
            return res.status(404).json({ mensaje: "Reporte no encontrado" });
        }

        res.json(reporte);
    } catch (error) {
        res.status(400).json({ mensaje: "Error al actualizar el estado", error });
    }
};
