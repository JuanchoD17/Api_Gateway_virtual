const {gql}= require('apollo-server');


const productoTypeDefs = gql `

    type Producto{
        id:             String!
        name:           String!
        description:    String!
        price:          Float!
        category:       String!
        stock:          Int!

    }

    input ProductoInput{
        id:             String!
        name:           String!
        description:    String!
        price:          Float!
        category:       String!
        stock:          Int!

    }

    extend type Query {
        listProducts: [Producto]
    }

    extend type Mutation{
        createProducto(producto: ProductoInput!): Producto
        updateProducto(producto: ProductoInput!): Producto
        deleteProducto(idProducto: String!): String! 
    }
`;
module.exports = productoTypeDefs;