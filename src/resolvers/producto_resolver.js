const productoResolver = {
    Query: {
        listProducts: async (_,{dataSources})=>{
            return await dataSources.productoAPI.listProducts();
        }
    },
    Mutation: {
        createProducto: async(_,{ producto },{dataSources})=>{
            return await dataSources.productoAPI.createProducto(producto);
        },
        updateProducto: async(_, {producto,productId }, {dataSources})=>{
            return await dataSources.productoAPI.UpdateProducto(producto, productId);
        },
        deleteProducto: async(_,{productId}, {dataSources})=>{
            return await dataSources.productoAPI.DeleteProducto(productId);
        }
    }
};

module.exports = productoResolver;