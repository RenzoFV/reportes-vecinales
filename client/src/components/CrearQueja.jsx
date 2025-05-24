"use client"

import { useState } from "react"
import { MapPin, Camera, AlertTriangle, Send, Loader2, Upload, X, ArrowLeft } from "lucide-react"

export function CrearQueja({ onNavigate }) {
  const [location, setLocation] = useState(null)
  const [isLoadingLocation, setIsLoadingLocation] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    priority: "",
    images: [],
  })

  const categories = [
    "Infraestructura",
    "Alumbrado Público",
    "Limpieza",
    "Seguridad",
    "Transporte",
    "Servicios Públicos",
    "Otros",
  ]

  const priorities = [
    { value: "low", label: "Baja", color: "bg-green-100 text-green-800" },
    { value: "medium", label: "Media", color: "bg-yellow-100 text-yellow-800" },
    { value: "high", label: "Alta", color: "bg-orange-100 text-orange-800" },
    { value: "urgent", label: "Urgente", color: "bg-red-100 text-red-800" },
  ]

  const getCurrentLocation = () => {
    setIsLoadingLocation(true)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
          setIsLoadingLocation(false)
        },
        (error) => {
          console.error("Error getting location:", error)
          alert("No se pudo obtener la ubicación. Por favor, verifica los permisos.")
          setIsLoadingLocation(false)
        },
      )
    } else {
      alert("Tu navegador no soporta geolocalización")
      setIsLoadingLocation(false)
    }
  }

  const handleImageUpload = (e) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files)
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...newImages].slice(0, 5), // Max 5 images
      }))
    }
  }

  const removeImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validación básica
    if (!formData.title || !formData.description || !formData.category || !formData.priority) {
      alert("Por favor, completa todos los campos obligatorios")
      return
    }

    if (!location) {
      alert("Por favor, obtén tu ubicación antes de enviar el reporte")
      return
    }

    // Aquí enviarías los datos a tu backend
    console.log("Form data:", formData)
    console.log("Location:", location)

    alert("¡Reporte enviado exitosamente!")

    // Reset form
    setFormData({
      title: "",
      description: "",
      category: "",
      priority: "",
      images: [],
    })
    setLocation(null)
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => onNavigate("home")}
          className="mb-8 flex items-center text-purple-600 hover:text-purple-700 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Volver al inicio
        </button>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Crear Nuevo Reporte</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ayúdanos a mejorar tu comunidad reportando incidencias. Tu voz es importante para crear un cambio positivo.
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white">
            <h2 className="text-2xl font-bold flex items-center">
              <AlertTriangle className="w-8 h-8 mr-3" />
              Información del Reporte
            </h2>
            <p className="mt-2 opacity-90">Completa todos los campos para crear tu reporte de incidencia</p>
          </div>

          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Title */}
              <div className="space-y-3">
                <label htmlFor="title" className="block text-lg font-semibold text-gray-700">
                  Título del Reporte *
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="Ej: Bache en la calle principal"
                  value={formData.title}
                  onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                  className="w-full rounded-2xl border-2 border-gray-200 focus:border-purple-500 transition-all duration-300 px-6 py-4 text-lg focus:outline-none focus:ring-4 focus:ring-purple-500/20"
                  required
                />
              </div>

              {/* Category and Priority */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="category" className="block text-lg font-semibold text-gray-700">
                    Categoría *
                  </label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData((prev) => ({ ...prev, category: e.target.value }))}
                    className="w-full rounded-2xl border-2 border-gray-200 focus:border-purple-500 px-6 py-4 text-lg focus:outline-none focus:ring-4 focus:ring-purple-500/20 transition-all duration-300"
                    required
                  >
                    <option value="">Selecciona una categoría</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-3">
                  <label htmlFor="priority" className="block text-lg font-semibold text-gray-700">
                    Prioridad *
                  </label>
                  <select
                    id="priority"
                    value={formData.priority}
                    onChange={(e) => setFormData((prev) => ({ ...prev, priority: e.target.value }))}
                    className="w-full rounded-2xl border-2 border-gray-200 focus:border-purple-500 px-6 py-4 text-lg focus:outline-none focus:ring-4 focus:ring-purple-500/20 transition-all duration-300"
                    required
                  >
                    <option value="">Selecciona la prioridad</option>
                    {priorities.map((priority) => (
                      <option key={priority.value} value={priority.value}>
                        {priority.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <label htmlFor="description" className="block text-lg font-semibold text-gray-700">
                  Descripción Detallada *
                </label>
                <textarea
                  id="description"
                  placeholder="Describe la incidencia con el mayor detalle posible. Incluye información sobre cuándo ocurrió, qué tan grave es, y cualquier detalle relevante..."
                  value={formData.description}
                  onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                  className="w-full rounded-2xl border-2 border-gray-200 focus:border-purple-500 transition-all duration-300 min-h-[150px] px-6 py-4 text-lg focus:outline-none focus:ring-4 focus:ring-purple-500/20 resize-none"
                  required
                />
              </div>

              {/* Location */}
              <div className="space-y-4">
                <label className="block text-lg font-semibold text-gray-700">Ubicación *</label>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <button
                    type="button"
                    onClick={getCurrentLocation}
                    disabled={isLoadingLocation}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 disabled:from-gray-400 disabled:to-gray-500 rounded-2xl px-8 py-4 text-white font-semibold flex items-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none"
                  >
                    {isLoadingLocation ? (
                      <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                    ) : (
                      <MapPin className="w-6 h-6 mr-3" />
                    )}
                    {isLoadingLocation ? "Obteniendo..." : "Obtener Ubicación Actual"}
                  </button>
                  {location && (
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-600 font-semibold">Ubicación obtenida correctamente</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Image Upload */}
              <div className="space-y-4">
                <label className="block text-lg font-semibold text-gray-700">Imágenes (Opcional - Máximo 5)</label>
                <div className="border-3 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-purple-400 transition-all duration-300 bg-gray-50/50">
                  <Camera className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600 mb-6 text-lg">Arrastra imágenes aquí o haz clic para seleccionar</p>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <button
                    type="button"
                    onClick={() => document.getElementById("image-upload")?.click()}
                    className="border-2 border-purple-300 hover:border-purple-500 hover:bg-purple-50 rounded-2xl px-8 py-3 text-purple-700 font-semibold transition-all duration-300 flex items-center mx-auto"
                  >
                    <Upload className="w-5 h-5 mr-2" />
                    Seleccionar Imágenes
                  </button>
                </div>

                {/* Image Preview */}
                {formData.images.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
                    {formData.images.map((image, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={URL.createObjectURL(image) || "/placeholder.svg"}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-24 object-cover rounded-xl border-2 border-gray-200"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-8">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6 rounded-2xl text-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  <Send className="w-6 h-6 mr-3" />
                  Enviar Reporte
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
