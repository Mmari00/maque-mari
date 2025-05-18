import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import clientes from '../../../data/clientes.js'
import './BuscarCliente.css';

const BuscarCliente = () => {
  const [correo, setCorreo] = useState('');
  const navigate = useNavigate();

  const handleBuscar = () => {
    let resultados = [];
    let mensaje = '';

    if (correo.trim() === '') {
      resultados = clientes;
    } else {
      resultados = clientes.filter(
        c => c.email.toLowerCase() === correo.toLowerCase()
      );
      if (resultados.length === 0) {
        mensaje = 'No existe ningún cliente con ese correo.';
      }
    }

    navigate('/clientes', { state: { resultados, mensaje } });
  };

  return (
    <div className="buscar-cliente-container">
      <div className="form-box">
        <input
          type="email"
          placeholder="Correo"
          className="input-correo"
          value={correo}
          onChange={e => setCorreo(e.target.value)}
        />
        <button className="btn-buscar" onClick={handleBuscar}>
          Buscar
        </button>
        <Link to="/buscar-producto" className="link-producto">
          Buscar producto
        </Link>
      </div>
      <h2 className="titulo">Buscar Cliente</h2>
    </div>
  );
};

export default BuscarCliente;
