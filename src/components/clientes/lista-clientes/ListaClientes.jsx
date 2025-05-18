import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ListaClientes.css";

const ListaClientes = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const resultados = location.state?.resultados || [];
  const mensaje = location.state?.mensaje || "";

  return (
    <div className="lista-clientes-container">
      <div className="grid-clientes">
        {mensaje && (
          <div className="mensaje-error">
            <p>{mensaje}</p>
          </div>
        )}

        {resultados.map((cliente) => (
          <div className="tarjeta-cliente" key={cliente.id}>
            <div className="contenido-cliente">
              <p>
                <strong>Nombre:</strong> {cliente.nombre}
              </p>
              <p>
                <strong>Email:</strong> {cliente.email}
              </p>
              <p>
                <strong>Teléfono:</strong> {cliente.telefono}
              </p>
            </div>
            <button
              className="btn-ver"
              onClick={() =>
                navigate("/detalle-cliente", { state: { cliente } })
              }
            >
              Ver
            </button>
          </div>
        ))}
      </div>

      <div className="contenedor-home">
        <button className="btn-home" onClick={() => navigate("/")}>
          Home
        </button>
      </div>
    </div>
  );
};

export default ListaClientes;
