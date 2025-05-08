import mongoose from "mongoose";

const reporteSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    ubicacion: {
        type: String,
        required: true,
    },
    latitud: {
        type: Number,
        required: false,
    },
    longitud: {
        type: Number,
        required: false,
    },
    fecha: {
        type: Date,
        default: Date.now,
    },
    estado: {
        type: String,
        enum: ['abierto', 'en proceso', 'cerrado'],
        default: 'abierto',
    },
    imagen: { 
        type: String, 
        required: false 
    }
});

const Reporte = mongoose.model('Reporte', reporteSchema);

export default Reporte;
  