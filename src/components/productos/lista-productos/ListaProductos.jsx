import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ListaProductos.css";

const ListaProductos = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const resultados = location.state?.resultados || [];
  const mensaje = location.state?.mensaje || "";

  return (
    <div className="lista-productos-container">
      <div className="grid-productos">
        {mensaje && (
          <div className="mensaje-error">
            <p>{mensaje}</p>
          </div>
        )}

        {resultados.map((producto) => (
          <div className="tarjeta-producto" key={producto.id}>
            <div className="contenido-producto">
              <p>
                <strong>Nombre:</strong> {producto.nombre}
              </p>
              <p>
                <strong>Precio:</strong> ${producto.precio.toLocaleString()}
              </p>
              <p>
                <strong>Stock:</strong> {producto.stock}
              </p>
            </div>
            <button
              className="btn-ver"
              onClick={() => navigate("/detalle-producto", { state: { producto } })}
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

export default ListaProductos;
