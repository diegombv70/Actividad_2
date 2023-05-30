import React, { useState } from 'react';
import { buscarRestaurante } from './database';
import './Busqueda.css';

const Busqueda = () => {
  const [busqueda, setBusqueda] = useState('');
  const [resultados, setResultados] = useState([]);

  const handleBusqueda = () => {
    const resultadosBusqueda = buscarRestaurante(busqueda);
    setResultados(resultadosBusqueda);
  };

  return (
    <div>
      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar restaurante..."
      />
      <button onClick={handleBusqueda}>Buscar</button>

      {resultados.length > 0 ? (
        <ul>
          {resultados.map((restaurante, index) => (
            <li key={index}>
              <h2>{restaurante.nombre}</h2>
              <p>{restaurante.descripcion}</p>
              <p>{restaurante.direccion}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron resultados.</p>
      )}
    </div>
  );
};

export default Busqueda;
