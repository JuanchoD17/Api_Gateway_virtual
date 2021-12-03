const {gql}= require('apollo-server')

const carritoTypeDefs = gql`
    type Carrito {
        id          :String!
        userId      :String!
        productId   :String!
        amount      :Int!
        price       :Float!
    }

    input CarritoInput {
        userId      :String!
        productId   :String!
        amount      :Int!
        price       :Float!
    }

    input CarritoUpdate{
        id          :String!
        userId      :String!
        productId   :String!
        amount      :Int!
        price       :Float!
    }

    extend type Query{
        CarritoByUserId(userId: String!): [Carrito]
    }

    extend type Mutation{
        CreateCarrito(Carrito:CarritoInput!): Carrito
        updateCarrito(Carrito: CarritoUpdate!): Carrito
        deleteCarrito(productId: String!): String!
    }

`;
module.exports = carritoTypeDefs;