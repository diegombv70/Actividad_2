import React from 'react';

const Inicio = () => {
  // Aquí puedes obtener la lista de restaurantes desde una API o un archivo de datos
  const restaurantes = [
    {
      nombre: 'Restaurante 1',
      descripcion: 'Descripción del restaurante 1',
      direccion: 'Dirección del restaurante 1',
      imagen: 'https://www.tripadvisor.co/Restaurant_Review-g297478-d24903381-Reviews-Casa_El_Ramal-Medellin_Antioquia_Department.html#photos;aggregationId=101&albumid=101&filter=7&ff=680371830',
    },
    {
      nombre: 'Restaurante 2',
      descripcion: 'Descripción del restaurante 2',
      direccion: 'Dirección del restaurante 2',
      imagen: 'https://example.com/imagen2.jpg',
    },
    {
      nombre: 'Restaurante 3',
      descripcion: 'Descripción del restaurante 3',
      direccion: 'Dirección del restaurante 3',
      imagen: 'https://example.com/imagen3.jpg',
    },
  ];

  return (
    <div>
      <h1>Directorio de Restaurantes</h1>
      <ul>
        {restaurantes.map((restaurante, index) => (
          <li key={index}>
            <h2>{restaurante.nombre}</h2>
            <p>{restaurante.descripcion}</p>
            <p>{restaurante.direccion}</p>
            <img src={restaurante.imagen} alt={restaurante.nombre} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inicio;
