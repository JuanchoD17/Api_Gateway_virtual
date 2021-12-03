const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const Auth_API = require('./dataSources/Auth_API');
const Producto_API = require('./dataSources/Producto_API');
const authentication = require('./utils/Authentication');

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () =>({
        Auth_API: new Auth_API(),
        Producto_API: new Producto_API(),
    }),
    introspection: true,
    playground: true
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
