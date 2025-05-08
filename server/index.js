import express from "express";
import cors from "cors";
import conectarDB from "./config/db.js";
import dotenv from "dotenv";


const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
dotenv.config();


//Conectamos
conectarDB();

// Ruta base de prueba
app.get('/', (req, res) => {
    res.send('API funcionando 🚀');
});


const PORT= process.env.port || 4000;
//Escuchar en el puerto 4000
app.listen(PORT,()=>{
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});

