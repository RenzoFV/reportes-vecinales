"use client"

import { Megaphone, Mail, Phone } from "lucide-react"

export function Footer({ onNavigate }) {
    return (
        <footer className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and Description */}
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-white/20 p-3 rounded-2xl">
                        <Megaphone className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-3xl font-bold">Vexi</span>
                    </div>
                    <p className="text-purple-100 mb-6 max-w-md text-lg leading-relaxed">
                    Conectando comunidades para crear ciudades más seguras y mejores para todos. Tu voz importa, tu reporte
                    hace la diferencia.
                    </p>
                    <div className="flex space-x-6">
                    <a
                        href="#"
                        className="text-purple-200 hover:text-white transition-colors transform hover:scale-110 duration-200"
                    >
                        <span className="sr-only">Facebook</span>
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                        📘
                        </div>
                    </a>
                    <a
                        href="#"
                        className="text-purple-200 hover:text-white transition-colors transform hover:scale-110 duration-200"
                    >
                        <span className="sr-only">Twitter</span>
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                        🐦
                        </div>
                    </a>
                    <a
                        href="#"
                        className="text-purple-200 hover:text-white transition-colors transform hover:scale-110 duration-200"
                    >
                        <span className="sr-only">Instagram</span>
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                        📷
                        </div>
                    </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-bold mb-6">Enlaces Rápidos</h3>
                    <ul className="space-y-4">
                    <li>
                        <button
                        onClick={() => onNavigate("home")}
                        className="text-purple-200 hover:text-white transition-colors flex items-center group"
                        >
                        <span className="group-hover:translate-x-1 transition-transform">🏠</span>
                        <span className="ml-2">Inicio</span>
                        </button>
                    </li>
                    <li>
                        <button
                        onClick={() => onNavigate("crear-queja")}
                        className="text-purple-200 hover:text-white transition-colors flex items-center group"
                        >
                        <span className="group-hover:translate-x-1 transition-transform">⚠️</span>
                        <span className="ml-2">Crear Reporte</span>
                        </button>
                    </li>
                    <li>
                        <button
                        onClick={() => onNavigate("reportes-cercanos")}
                        className="text-purple-200 hover:text-white transition-colors flex items-center group"
                        >
                        <span className="group-hover:translate-x-1 transition-transform">📍</span>
                        <span className="ml-2">Reportes Cercanos</span>
                        </button>
                    </li>
                    </ul>
                </div>

                {/* Contact & Legal */}
                <div>
                    <h3 className="text-xl font-bold mb-6">Contacto & Legal</h3>
                    <ul className="space-y-4">
                    <li>
                        <a href="#" className="text-purple-200 hover:text-white transition-colors flex items-center group">
                        <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="ml-2">Contacto</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-purple-200 hover:text-white transition-colors flex items-center group">
                        <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="ml-2">Soporte</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-purple-200 hover:text-white transition-colors flex items-center group">
                        <span className="group-hover:scale-110 transition-transform">🔒</span>
                        <span className="ml-2">Privacidad</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-purple-200 hover:text-white transition-colors flex items-center group">
                        <span className="group-hover:scale-110 transition-transform">📋</span>
                        <span className="ml-2">Términos</span>
                        </a>
                    </li>
                    </ul>
                </div>
                </div>

                <div className="border-t border-purple-400 mt-12 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-purple-200 text-center md:text-left">© 2025 Vexi. Todos los derechos reservados.</p>
                    <p className="text-purple-200 text-center md:text-right mt-4 md:mt-0">
                    Hecho con ❤️ para mejorar nuestras comunidades
                    </p>
                </div>
                </div>
            </div>
        </footer>
    )
}
