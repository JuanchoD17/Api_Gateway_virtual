const productoResolver = {
    Query: {
        listProducts: async (_,{dataSources})=>{
            return await dataSources.Producto_API.listProducts();
        }
    },
    Mutation: {
        createProducto: async(_,{ producto },{dataSources})=>{
            return await dataSources.Producto_API.createProducto(producto);
        },
        updateProducto: async(_, {producto,productId }, {dataSources})=>{
            return await dataSources.UpdateProducto(producto, productId);
        },
        deleteProducto: async(_,{productId}, {dataSources})=>{
            return await dataSources.DeleteProducto(productId);
        }
    }
};

module.exports = productoResolver;