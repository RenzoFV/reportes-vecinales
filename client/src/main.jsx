import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App";
import "./index.css"; // o tu archivo de estilos

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
