const {gql}= require('apollo-server')


const productoTypeDefs = {gql} `

    type Producto{
        id:             String!
        name:           String!
        description:    String!
        price:          Float!
        category:       Stirng!
        stock:          Int!

    }

    input ProductoInput{
        id:             String!
        name:           String!
        description:    String!
        price:          Float!
        category:       Stirng!
        stock:          Int!

    }

    extend type query {
        producto(): [Product]
    }

    extend type Mutation{
        createProducto(producto: ProductoInput!): Producto
        updateProducto(producto: ProductoInput!): Producto
        deleteProducto(idProducto: String!): String! 
    }
`;
module.exports = productoTypeDefs;