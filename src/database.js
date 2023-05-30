const restaurantesDB = [
    {
      nombre: "Casa El Ramal",
      descripcion: "TIPOS DE COMIDA \
      Internacional, Parrilla, Bar de vinos\
      COMIDAS\
      Almuerzo, Cena\
      CARACTERÍSTICAS\
      Reservas, Asientos al aire libre, Estacionamiento disponible, Estacionamiento para clientes, Servicio de valet, Sirve alcohol, Bar completo, Vino y cerveza, Acepta American Express, Acepta Mastercard, Acepta Visa, Wi-Fi gratis, Acepta tarjetas de crédito, Servicio de mesa, Música en vivo, Apto para perros",
      direccion: " Cra 43d #10 - 72 Barrio Manila, Medellín 050021 Colombia",
      imagen: "https://www.tripadvisor.co/Restaurant_Review-g297478-d24903381-Reviews-Casa_El_Ramal-Medellin_Antioquia_Department.html#photos;aggregationId=101&albumid=101&filter=7&ff=680371830"
    },
    {
      nombre: "La Pampa Parrilla Argentina",
      descripcion: "TIPOS DE COMIDA\n\
      Churrasquería, Latina, Parrillada, Argentina\n\
      DIETAS ESPECIALES\n\
      Opciones sin gluten\n\
      COMIDAS\n\
      Almuerzo, Cena",
      direccion: "Carrera 30 10c 228 InterPlaza Mall, local 295, Medellín ",
      imagen: ""
    },
    {
      nombre: "Restaurante ABC",
      descripcion: "Comida internacional",
      direccion: "Calle Central",
      imagen: ""
    }
  ];
  
  export const buscarRestaurante = (busqueda) => {
    const resultados = restaurantesDB.filter(restaurante =>
      restaurante.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
  
    return resultados;
  };
  
  export default restaurantesDB;
  