"use client"

import { useState } from "react"
import { Megaphone, Menu, X, Search } from "lucide-react"

export function Header({ currentPage, onNavigate }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navigation = [
        { name: "Inicio", page: "home", icon: "🏠" },
        { name: "Crea tu Queja", page: "crear-queja", icon: "⚠️" },
        { name: "Reportes Cercanos", page: "reportes-cercanos", icon: "📍" },
    ]

    const isActive = (page) => currentPage === page

    const handleNavigation = (page) => {
        onNavigate(page)
        setIsMenuOpen(false)
    }

    return (
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                {/* Logo */}
                <button onClick={() => handleNavigation("home")} className="flex items-center space-x-2">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-xl">
                    <Megaphone className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Vexi
                    </span>
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-1">
                    {navigation.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => handleNavigation(item.page)}
                        className={`px-4 py-2 rounded-xl transition-all duration-300 flex items-center font-medium ${
                        isActive(item.page)
                            ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105"
                            : "hover:bg-purple-50 hover:text-purple-700 text-gray-700 hover:scale-105"
                        }`}
                    >
                        <span className="mr-2">{item.icon}</span>
                        {item.name}
                    </button>
                    ))}
                </nav>

                {/* Search Bar - Desktop */}
                <div className="hidden lg:flex items-center space-x-4">
                    <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Buscar reportes..."
                        className="pl-10 w-64 rounded-xl border border-gray-200 focus:border-purple-500 bg-white/50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    />
                    </div>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                <div className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm animate-fade-in">
                    <div className="space-y-2">
                    {navigation.map((item) => (
                        <button
                        key={item.name}
                        onClick={() => handleNavigation(item.page)}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center font-medium ${
                            isActive(item.page)
                            ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                            : "hover:bg-purple-50 hover:text-purple-700 text-gray-700"
                        }`}
                        >
                        <span className="mr-2">{item.icon}</span>
                        {item.name}
                        </button>
                    ))}
                    </div>
                    {/* Mobile Search */}
                    <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                        type="text"
                        placeholder="Buscar reportes..."
                        className="pl-10 w-full rounded-xl border border-gray-200 focus:border-purple-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                        />
                    </div>
                    </div>
                </div>
                )}
            </div>
        </header>
    )
}
