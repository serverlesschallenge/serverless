'use strict';

const planetTranslator = (planet) => {
    return {
        nombre: planet.name,
        periodo_rotacion: planet.rotation_period,
        periodo_orbita: planet.orbital_period,
        diametro: planet.diameter,
        clima: planet.climate,
        gravedad: planet.gravity,
        terreno: planet.terrain,
        agua_superficie: planet.surface_water,
        poblacion: planet.population,
        residentes: planet.residents,
        peliculas: planet.films,
        creado: planet.created,
        editado: planet.edited,
        url: planet.url
    };
};

module.exports = { planetTranslator };
