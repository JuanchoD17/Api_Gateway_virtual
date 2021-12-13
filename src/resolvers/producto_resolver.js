const productoResolver = {
    Query: {
        listProductos: async (_,{},{dataSources})=>{
            return await dataSources.productoAPI.listProductos();
        }
    },
    Mutation: {
        createProducto: async(_,{ producto },{dataSources})=>{
            return await dataSources.productoAPI.createProducto(producto);
        },
        updateProducto: async(_, { productoUpdate }, {dataSources})=>{
            return await dataSources.productoAPI.updateProducto(productoUpdate, productoUpdate.id);
        },
        deleteProducto: async(_,{productoDelete}, {dataSources})=>{
            //console.log(productoDelete);
            return await dataSources.productoAPI.deleteProducto(productoDelete.id);
        }
    }
};

module.exports = productoResolver;