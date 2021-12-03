const auth_resolver = require('./auth_resolver');
const producto_resolver = require('./producto_resolver');
const shoppingcart_resolver = require('./shoppingcart_resolver');

const lodash = require('lodash');
const resolvers = lodash.merge(auth_resolver, producto_resolver, shoppingcart_resolver);

module.exports = resolvers;