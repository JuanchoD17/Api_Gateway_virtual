const { ApolloServer } = require('apollo-server');

const typeDefs          = require('./typeDefs');
const resolvers         = require('./resolvers');
const AuthAPI           = require('./dataSources/authAPI');
const ProductoAPI       = require('./dataSources/productoAPI');
const MedioAPI          = require('./dataSources/medioAPI');
const authentication    = require('./utils/authentication');

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () =>({
        authAPI: new AuthAPI(),
        medioAPI: new MedioAPI(),
        productoAPI: new ProductoAPI(),
    }),
    introspection: true,
    playground: true
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
