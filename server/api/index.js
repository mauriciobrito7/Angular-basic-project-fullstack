// RAML Swagger documentar REST

/** carga de módulos propios que gestionan cada ruta del api */
const cursos = require('./cursos.js');
const maestros = require('./maestros.js');

/** Función que configura las rutas de una aplicación */
module.exports = app => {
    cursos(app, '/api/pub/cursos');
    maestros(app, '/api/pub/maestros');
}