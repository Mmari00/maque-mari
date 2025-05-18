import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./DetalleProducto.css";
import productos from '../../../data/productos.js';

const DetalleProducto = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const producto = location.state?.producto;

  const handleredireccionarLista = () => {
    const resultados = productos;
    navigate('/productos', { state: { resultados } });
  };

  if (!producto) {
    return (
      <div className="detalle-container">
        <p>No se ha encontrado información del producto.</p>
        <button onClick={handleredireccionarLista}>
          Listado productos
        </button>
      </div>
    );
  }

  return (
    <div className="detalle-container">
      <div className="imagenes-laterales">
        <div className="imagen-fake">
         <img src={producto.imagenUrl} alt={`Imagen de ${producto.nombre}`} />
        </div>

        <div className="imagen-fake">
          <img src={producto.imagenUrl} alt={`Imagen de ${producto.nombre}`} />
        </div>
      </div>
 
      <div className="contenido-producto">
        <p><strong>Nombre:</strong> {producto.nombre}</p>
        <p><strong>Precio:</strong> ${producto.precio.toLocaleString()}</p>
        <p><strong>Stock:</strong> {producto.stock}</p>
      </div>

      <div className="boton-volver">
        <button onClick={handleredireccionarLista}>
          Listado productos
        </button>
      </div>
    </div>
  );
};

export default DetalleProducto;
