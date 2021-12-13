const {gql}= require('apollo-server');

const carritoTypeDefs = gql `
    type Carrito {
        id          :String!
        userId      :String!
        productId   :String!
        amount      :String!
        price       :Float!
    }

    input CarritoInput {
        userId      :String!
        productId   :String!
        amount      :String!
        price       :Float!
    }

    input CarritoUpdate{
        id          :String!
        userId      :String!
        productId   :String!
        amount      :String!
        price       :Float!
    }
    input CarritoDelete{
        userId      :String!
        productId   :String!
    }

    type CarritoDel{
        userId      :String!
        productId   :String!
    }

    extend type Query{
        getCarrito(userId: String!): [Carrito]
    }

    extend type Mutation{
        createCarrito(carrito      : CarritoInput!):  Carrito!
        updateCarrito(carritoUpdate: CarritoUpdate!): Carrito!
        deleteCarrito(carritoDelete: CarritoDelete!): CarritoDel!
    }
`;
module.exports = carritoTypeDefs;