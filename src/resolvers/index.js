const authResolver         = require('./auth_resolver');
const productoResolver     = require('./producto_resolver');
const carritoResolver = require('./carrito_resolver');
const medioResolver        = require('./medio_resolver');

const lodash = require('lodash');
const resolvers = lodash.merge(authResolver,medioResolver,productoResolver,carritoResolver);

module.exports = resolvers;