"use client"

import { useState } from "react"
import { MapPin, AlertTriangle, Users, TrendingUp, Search, ArrowRight } from "lucide-react"

export function HomePage({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState("")

  const stats = [
    {
      icon: AlertTriangle,
      label: "Reportes Activos",
      value: "1,247",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
    { icon: Users, label: "Usuarios Activos", value: "8,932", color: "text-blue-500", bgColor: "bg-blue-50" },
    { icon: MapPin, label: "Zonas Cubiertas", value: "156", color: "text-green-500", bgColor: "bg-green-50" },
    { icon: TrendingUp, label: "Resueltos Hoy", value: "89", color: "text-purple-500", bgColor: "bg-purple-50" },
  ]

  const recentReports = [
    {
      id: 1,
      title: "Bache en Av. Principal",
      location: "Centro, Ciudad",
      time: "Hace 2 horas",
      status: "Pendiente",
      category: "Infraestructura",
    },
    {
      id: 2,
      title: "Semáforo dañado",
      location: "Zona Norte",
      time: "Hace 4 horas",
      status: "En proceso",
      category: "Tráfico",
    },
    {
      id: 3,
      title: "Alumbrado público",
      location: "Barrio Sur",
      time: "Hace 6 horas",
      status: "Resuelto",
      category: "Servicios",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
              Reporta y Mejora a
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Trujillo
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto animate-fade-in-delay leading-relaxed">
              Conecta con tu comunidad para reportar incidencias, encontrar soluciones y hacer de Trujillo una ciudad mejor
              para vivir.
            </p>

            {/* Search Bar */}
            <div className="max-w-3xl mx-auto mb-16 animate-fade-in-delay-2">
              <div className="relative group">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6 group-focus-within:text-purple-500 transition-colors" />
                <input
                  type="text"
                  placeholder="Buscar reportes en tu área..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-16 pr-6 py-6 text-lg rounded-2xl border-0 shadow-xl bg-white/90 backdrop-blur-sm focus:bg-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:shadow-2xl"
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-delay-3">
              <button
                onClick={() => onNavigate("crear-queja")}
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-5 rounded-2xl text-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <AlertTriangle className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                Crear Reporte
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate("reportes-cercanos")}
                className="group border-2 border-purple-200 hover:border-purple-400 px-10 py-5 rounded-2xl text-xl font-semibold bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 text-gray-700 hover:text-purple-700 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <MapPin className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                Ver Reportes Cercanos
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Impacto en Números</h2>
            <p className="text-xl text-gray-600">Juntos estamos transformando nuestras comunidades</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`${stat.bgColor} border-0 shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-500 rounded-2xl p-8 text-center group cursor-pointer`}
              >
                <div
                  className={`${stat.color} ${stat.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="w-10 h-10" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-3 group-hover:scale-105 transition-transform">
                  {stat.value}
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Reports */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Reportes Recientes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mantente al día con las últimas incidencias reportadas en tu comunidad
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recentReports.map((report) => (
              <div
                key={report.id}
                className="group bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-2xl overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                      {report.title}
                    </h3>
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        report.status === "Resuelto"
                          ? "bg-green-100 text-green-800"
                          : report.status === "En proceso"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {report.status}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-2 text-purple-500" />
                      {report.location}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{report.time}</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        {report.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate("reportes-cercanos")}
              className="group border-2 border-purple-200 hover:border-purple-400 px-8 py-4 rounded-2xl bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 text-gray-700 hover:text-purple-700 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center mx-auto"
            >
              Ver Todos los Reportes
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
