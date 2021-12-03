const authTypeDefs     = require('./auth_type_def');
const productoTypeDefs = require('./producto_typeDef');
const carritoTypeDefs  = require('./shoppingcart_typeDef');

const schemaArrays = [authTypeDefs, productoTypeDefs, carritoTypeDefs];

module.exports = schemaArrays;