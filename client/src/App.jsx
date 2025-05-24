import { useState } from "react"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { HomePage } from "./components/HomePage"
import { CrearQueja } from "./components/CrearQueja"
import { ReportesCercanos } from "./components/ReportesCercanos"

function App() {
  const [currentPage, setCurrentPage] = useState("home")

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} />
      case "crear-queja":
        return <CrearQueja onNavigate={setCurrentPage} />
      case "reportes-cercanos":
        return <ReportesCercanos onNavigate={setCurrentPage} />
      default:
        return <HomePage onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
      <Footer onNavigate={setCurrentPage} />
    </div>
  )
}

export default App
