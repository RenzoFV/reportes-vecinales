import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react'
import Header from "./components/Header";
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<div>Inicio</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
