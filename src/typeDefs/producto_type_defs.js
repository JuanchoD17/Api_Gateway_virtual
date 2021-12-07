const { gql } = require('apollo-server');


const productoTypeDefs = gql `

    type Producto{
        id             :String!
        name           :String!
        description    :String!
        price          :Float!
        category       :String!
        stock          :Int!
    }

    input ProductoInput{
        id             :String!
        name           :String!
        description    :String!
        price          :Float!
        category       :String!
        stock          :Int!
    }


    input ProductoUpdate{
        id             :String!
        name           :String!
        description    :String!
        price          :Float!
        category       :String!
        stock          :Int!
    }

    extend type Query {
        listProductos: [Producto]!
    }

    extend type Mutation{
        createProducto(producto: ProductoInput!): Producto!
        updateProducto(productoUpdate: ProductoUpdate!): Producto!
        deleteProducto(idProducto: String!): String! 
    }
`;
module.exports = productoTypeDefs;