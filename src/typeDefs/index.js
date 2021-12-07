const authTypeDefs     = require('./auth_type_defs');
const medioTypeDefs    = require('./medio_type_defs')
const productoTypeDefs = require('./producto_type_defs');
const carritoTypeDefs  = require('./carrito_type_defs');

const schemaArrays = [authTypeDefs, medioTypeDefs,productoTypeDefs, carritoTypeDefs];

module.exports = schemaArrays;