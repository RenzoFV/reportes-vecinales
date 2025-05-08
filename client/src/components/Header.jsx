import React, { useState } from 'react';
import { Link,useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Search } from 'lucide-react';
import { faBullhorn,faHouse,faTriangleExclamation,faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const location = useLocation(); 
    const isActive = (path) => location.pathname === path;
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between relative">
                <h1 className="flex text-2xl font-bold text-indigo-600 justify-center items-center">    
                    Vexi
                    <FontAwesomeIcon icon={faBullhorn} className="ml-2 text-indigo-600" />
                </h1>
                <button className="lg:hidden text-indigo-600 focus:outline-none" onClick={toggleMenu}>
                    <span className="material-icons">menu</span>
                </button>
                {/* Navegación */}
                <nav className={`${ menuOpen ? 'block' : 'hidden'} lg:flex lg:gap-8 hidden absolute lg:static top-full left-0 w-full bg-white lg:bg-transparent p-4 lg:p-0`}>
                    <div className="flex justify-center w-full gap-8 lg:gap-16">
                        <Link to="/" className={`relative font-bold text-gray-700 transition-all duration-300 py-2 px-4 rounded-md hover:bg-orange-600 hover:text-white ${isActive('/') ? 'bg-orange-600' : ''}`}>
                            <FontAwesomeIcon icon={faHouse} className="mr-2" />
                            Inicio
                            {isActive('/') && <span className="absolute bottom-0 left-0 w-full bg-orange-600"></span>}
                        </Link>
                        <Link to="/crear" className={`relative font-bold text-gray-700 transition-all duration-300 py-2 px-4 rounded-md hover:bg-green-600 hover:text-white ${isActive('/crear') ? 'bg-green-600' : ''}`}>
                            <FontAwesomeIcon icon={faTriangleExclamation} className="mr-2"/>
                            Crea tu Queja
                            {isActive('/crear') && <span className="absolute bottom-0 left-0 w-full bg-green-600"></span>}
                        </Link>
                        <Link to="/reportes" className={`relative font-bold text-gray-700 transition-all duration-300 py-2 px-4 rounded-md hover:bg-yellow-600 hover:text-white ${isActive('/reportes') ? 'bg-yellow-600' : ''}`}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                            Reportes Cercanos
                            {isActive('/reportes') && <span className="absolute bottom-0 left-0 w-full bg-yellow-600"></span>}
                        </Link>
                    </div>
                </nav>

                {/* Buscador a la derecha */}
                <div className="relative w-72 hidden lg:block">
                    <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                        <Search size={18} />
                    </span>
                    <input type="text" placeholder="Buscar reportes..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"/>
                </div>
            </div>

            {/* Menú hamburguesa en móvil */}
            <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} bg-white p-4`}>
                {/* Buscador en móvil*/}
                <div className="relative mt-4 mb-2">
                    <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                        <Search size={18} />
                    </span>
                    <input 
                        type="text" 
                        placeholder="Buscar reportes..." 
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <Link to="/" className="text-gray-700 hover:text-white font-medium transition-all duration-300 py-2 px-4 rounded-md hover:bg-orange-600" onClick={() => setMenuOpen(false)}>
                        <FontAwesomeIcon icon={faHouse} className="mr-2" />
                        Inicio
                    </Link>
                    <Link to="/crear" className="text-gray-700 hover:text-white font-medium transition-all duration-300 py-2 px-4 rounded-md hover:bg-green-600" onClick={() => setMenuOpen(false)}>
                        <FontAwesomeIcon icon={faTriangleExclamation} className="mr-2"/>
                        Crea tu Queja
                    </Link>
                    <Link to="/reportes" className="text-gray-700 hover:text-white font-medium transition-all duration-300 py-2 px-4 rounded-md hover:bg-yellow-600" onClick={() => setMenuOpen(false)}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                        Reportes Cercanos
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
