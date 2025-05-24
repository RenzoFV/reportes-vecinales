"use client"

import { useState, useEffect } from "react"
import { MapPin, Search, Clock, AlertTriangle, CheckCircle, Loader2, Eye, ArrowLeft } from "lucide-react"

export function ReportesCercanos({ onNavigate }) {
  const [reports, setReports] = useState([])
  const [filteredReports, setFilteredReports] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [isLoadingLocation, setIsLoadingLocation] = useState(false)
  const [userLocation, setUserLocation] = useState(null)

  // Mock data - replace with actual API call
  const mockReports = [
    {
      id: 1,
      title: "Bache grande en Av. Principal",
      description:
        "Bache de aproximadamente 1 metro que puede dañar vehículos. Se encuentra en el carril derecho y representa un peligro para motociclistas.",
      category: "Infraestructura",
      priority: "high",
      status: "pending",
      location: "Av. Principal #123",
      distance: 0.5,
      createdAt: "2024-01-15T10:30:00Z",
      votes: 15,
    },
    {
      id: 2,
      title: "Semáforo intermitente",
      description:
        "El semáforo de la intersección no funciona correctamente, causando confusión en el tráfico durante las horas pico.",
      category: "Infraestructura",
      priority: "urgent",
      status: "in-progress",
      location: "Calle 5ta con Carrera 10",
      distance: 1.2,
      createdAt: "2024-01-14T15:45:00Z",
      votes: 23,
    },
    {
      id: 3,
      title: "Alumbrado público dañado",
      description:
        "Varias luminarias no funcionan en el sector, creando zonas oscuras que afectan la seguridad nocturna.",
      category: "Alumbrado Público",
      priority: "medium",
      status: "resolved",
      location: "Barrio Centro",
      distance: 2.1,
      createdAt: "2024-01-13T08:20:00Z",
      votes: 8,
    },
    {
      id: 4,
      title: "Acumulación de basura",
      description: "Punto de recolección desbordado desde hace varios días, generando malos olores y atrayendo plagas.",
      category: "Limpieza",
      priority: "high",
      status: "pending",
      location: "Parque Central",
      distance: 0.8,
      createdAt: "2024-01-12T14:20:00Z",
      votes: 12,
    },
  ]

  useEffect(() => {
    setReports(mockReports)
    setFilteredReports(mockReports)
  }, [])

  useEffect(() => {
    let filtered = reports

    if (searchQuery) {
      filtered = filtered.filter(
        (report) =>
          report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          report.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          report.location.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    if (categoryFilter !== "all") {
      filtered = filtered.filter((report) => report.category === categoryFilter)
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((report) => report.status === statusFilter)
    }

    setFilteredReports(filtered)
  }, [searchQuery, categoryFilter, statusFilter, reports])

  const getCurrentLocation = () => {
    setIsLoadingLocation(true)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
          setIsLoadingLocation(false)
        },
        (error) => {
          console.error("Error getting location:", error)
          alert("No se pudo obtener la ubicación")
          setIsLoadingLocation(false)
        },
      )
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "urgent":
        return "bg-red-100 text-red-800 border-red-200"
      case "high":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "resolved":
        return "bg-green-100 text-green-800 border-green-200"
      case "in-progress":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "pending":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "resolved":
        return <CheckCircle className="w-4 h-4" />
      case "in-progress":
        return <Clock className="w-4 h-4" />
      case "pending":
        return <AlertTriangle className="w-4 h-4" />
      default:
        return <AlertTriangle className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => onNavigate("home")}
          className="mb-8 flex items-center text-purple-600 hover:text-purple-700 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Volver al inicio
        </button>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Reportes Cercanos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre las incidencias reportadas en tu área y mantente informado sobre el estado de tu comunidad.
          </p>
        </div>

        {/* Location and Filters */}
        <div className="bg-white/90 backdrop-blur-sm border-0 shadow-xl mb-8 rounded-2xl p-6">
          <div className="flex flex-col space-y-6">
            {/* Location Button */}
            <div className="flex justify-center">
              <button
                onClick={getCurrentLocation}
                disabled={isLoadingLocation}
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 disabled:from-gray-400 disabled:to-gray-500 rounded-2xl px-8 py-4 text-white font-semibold flex items-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none"
              >
                {isLoadingLocation ? (
                  <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                ) : (
                  <MapPin className="w-6 h-6 mr-3" />
                )}
                {userLocation ? "Ubicación Obtenida" : "Obtener Mi Ubicación"}
              </button>
            </div>

            {/* Search and Filters */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Search */}
              <div className="lg:col-span-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    placeholder="Buscar reportes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/20 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Filters */}
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="rounded-xl border-2 border-gray-200 focus:border-purple-500 px-4 py-3 focus:outline-none focus:ring-4 focus:ring-purple-500/20 transition-all duration-300"
              >
                <option value="all">Todas las categorías</option>
                <option value="Infraestructura">Infraestructura</option>
                <option value="Alumbrado Público">Alumbrado Público</option>
                <option value="Limpieza">Limpieza</option>
                <option value="Seguridad">Seguridad</option>
              </select>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="rounded-xl border-2 border-gray-200 focus:border-purple-500 px-4 py-3 focus:outline-none focus:ring-4 focus:ring-purple-500/20 transition-all duration-300"
              >
                <option value="all">Todos los estados</option>
                <option value="pending">Pendiente</option>
                <option value="in-progress">En Proceso</option>
                <option value="resolved">Resuelto</option>
              </select>
            </div>
          </div>
        </div>

        {/* Reports Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredReports.map((report) => (
            <div
              key={report.id}
              className="group bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-2xl overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors line-clamp-2 flex-1 mr-2">
                    {report.title}
                  </h3>
                  <div className="flex flex-col gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(report.priority)}`}
                    >
                      {report.priority === "urgent"
                        ? "Urgente"
                        : report.priority === "high"
                          ? "Alta"
                          : report.priority === "medium"
                            ? "Media"
                            : "Baja"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold border ${getStatusColor(report.status)} flex items-center`}
                  >
                    {getStatusIcon(report.status)}
                    <span className="ml-2">
                      {report.status === "resolved"
                        ? "Resuelto"
                        : report.status === "in-progress"
                          ? "En Proceso"
                          : "Pendiente"}
                    </span>
                  </span>
                  <span className="text-sm text-gray-500 font-medium">{report.votes} votos</span>
                </div>

                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">{report.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2 text-purple-500" />
                    <span className="font-medium">{report.location}</span>
                    <span className="ml-2 text-sm text-gray-500">• {report.distance} km</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2 text-purple-500" />
                    <span>
                      {new Date(report.createdAt).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    {report.category}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl px-4 py-3 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center">
                  <Eye className="w-5 h-5 mr-2" />
                  Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredReports.length === 0 && (
          <div className="text-center py-16">
            <AlertTriangle className="w-20 h-20 mx-auto text-gray-400 mb-6" />
            <h3 className="text-2xl font-bold text-gray-600 mb-4">No se encontraron reportes</h3>
            <p className="text-gray-500 text-lg">
              Intenta ajustar tus filtros de búsqueda o amplía el área de búsqueda
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
