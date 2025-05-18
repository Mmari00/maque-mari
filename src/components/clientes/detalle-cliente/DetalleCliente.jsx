import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./DetalleCliente.css";
import clientes from '../../../data/clientes.js';



const DetalleCliente = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cliente = location.state?.cliente;

  const handleredireccionarLista = () => {
    const resultados = clientes;
    navigate('/clientes', { state: { resultados } });
  };

  if (!cliente) {
    return (
      <div className="detalle-cliente-container">
        <p>Cliente no encontrado.</p>
        <button onClick={() => navigate("/")}>Volver</button>
      </div>
    );
  }

  return (
    <div className="detalle-cliente-container">
      <div className="contenido-detalle">
        <div className="imagen-cliente">
          <img src={cliente.imagenUrl} alt={`Imagen de ${cliente.nombre}`} />
        </div>
        <div className="info-cliente">
          <p>
            <strong>Nombre:</strong> {cliente.nombre}
          </p>
          <p>
            <strong>Email:</strong> {cliente.email}
          </p>
          <p>
            <strong>Teléfono:</strong> {cliente.telefono}
          </p>
          <p>
            CLIENTE FIEL
          </p>
          <p>
            
          </p>
          <p>
          
          </p>
          <p>
            
          </p>
          <p>
            
          </p>
        </div>
      </div>

      <div className="boton-regreso">
        <button onClick={() => handleredireccionarLista()}>Listado Clientes</button>
      </div>
    </div>
  );
};

export default DetalleCliente;
