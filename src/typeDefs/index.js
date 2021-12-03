const authTypeDefs     = require('./Auth_typeDef');
const productoTypeDefs = require('./producto_typeDef');
const carritoTypeDefs  = require('./shoppingcart_typeDef');

const schemaArrays = [authTypeDefs, productoTypeDefs, carritoTypeDefs];

module.exports = schemaArrays;