import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BuscarCliente from './components/clientes/buscar-cliente/BuscarCliente';
import BuscarProducto from './components/productos/buscar-producto/BuscarProducto';
import ListaClientes from './components/clientes/lista-clientes/ListaClientes';
import DetalleCliente from './components/clientes/detalle-cliente/DetalleCliente';
import ListaProductos from './components/productos/lista-productos/ListaProductos';
import DetalleProducto from './components/productos/detalle-producto/DetalleProducto';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BuscarCliente />} />
        <Route path="/clientes" element={<ListaClientes />} />
        <Route path="/detalle-cliente" element={<DetalleCliente />} />
        <Route path="/buscar-producto" element={<BuscarProducto/>} />
        <Route path="/productos" element={<ListaProductos />} />
        <Route path="/detalle-producto" element={<DetalleProducto />} />
      </Routes>
    </Router>
  );
}

export default App;
