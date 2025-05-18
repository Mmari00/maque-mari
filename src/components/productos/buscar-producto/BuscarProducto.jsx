import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./BuscarProducto.css";
import productos from "../../../data/productos.js";

const BuscarProducto = () => {
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleBuscar = () => {
    const idBuscado = id.trim().toUpperCase();

    if (idBuscado === "") {
      navigate("/productos", {
        state: { resultados: productos },
      });
    } else {
      const productoEncontrado = productos.find(
        (producto) => producto.id.toUpperCase() === idBuscado
      );

      if (productoEncontrado) {
        navigate("/productos", {
          state: { resultados: [productoEncontrado] },
        });
      } else {
        navigate("/productos", {
          state: {
            resultados: [],
            mensaje: `No se encontró ningún producto con el ID "${idBuscado}".`,
          },
        });
      }
    }
  };

  return (
    <div className="buscar-producto-container">
      <div className="form-box">
        <input
          type="text"
          placeholder="ID"
          className="input-id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button className="btn-buscar" onClick={handleBuscar}>
          Buscar
        </button>
        <Link to="/" className="link-cliente">
          Buscar cliente
        </Link>
      </div>
      <h2 className="titulo">Buscar Producto</h2>
    </div>
  );
};

export default BuscarProducto;
