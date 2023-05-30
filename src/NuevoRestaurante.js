import React, { useState } from 'react';

const NuevoRestaurante = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [direccion, setDireccion] = useState('');
  const [imagen, setImagen] = useState('');

  const guardarRestaurante = () => {
    // Aquí puedes implementar la lógica para guardar el nuevo restaurante
    // Puedes utilizar las variables 'nombre', 'descripcion', 'direccion' e 'imagen'
    // para enviar los datos a tu API o realizar la lógica necesaria
    // para guardar la información en algún lugar, como una base de datos
  };

  return (
    <div>
      <h1>Nuevo Restaurante</h1>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre"
      />
      <input
        type="text"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        placeholder="Descripción"
      />
      <input
        type="text"
        value={direccion}
        onChange={(e) => setDireccion(e.target.value)}
        placeholder="Dirección"
      />
      <input
        type="text"
        value={imagen}
        onChange={(e) => setImagen(e.target.value)}
        placeholder="URL de la imagen"
      />
      <button onClick={guardarRestaurante}>Guardar</button>
    </div>
  );
};

export default NuevoRestaurante;
