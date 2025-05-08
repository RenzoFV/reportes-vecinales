import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-indigo-600 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="text-center sm:text-left">
                        <ul className="space-y-2 sm:space-y-0 sm:space-x-6 sm:flex">
                            <li>
                                <a href="#" className="hover:text-indigo-400 transition-colors">Acerca de</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-indigo-400 transition-colors">Política de Privacidad</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-indigo-400 transition-colors">Contacto</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-4 sm:mt-0 text-center sm:text-right">
                        <p className="text-sm">© {new Date().getFullYear()} Vexi. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
