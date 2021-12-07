const productoResolver = {
    Query: {
        listProductos: async (_,{dataSources})=>{
            return await dataSources.productoAPI.listProductos();
        }
    },
    Mutation: {
        createProducto: async(_,{ producto },{dataSources})=>{
            return await dataSources.productoAPI.createProducto(producto);
        },
        updateProducto: async(_, { productoUpdate,productId }, {dataSources})=>{
            return await dataSources.productoAPI.updateProducto(productoUpdate, productId);
        },
        deleteProducto: async(_,{productId}, {dataSources})=>{
            return await dataSources.productoAPI.deleteProducto(productId);
        }
    }
};

module.exports = productoResolver;