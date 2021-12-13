const carritoResolver = {
    Query: {
        getCarrito: async (_, {userId}, {dataSources, userIdToken})=>{
            if (userIdToken==userId)
                return await dataSources.productoAPI.getCarrito(userId);
            else
                return null;
        }
    },
    Mutation:{
        createCarrito: async(_, {carrito}, {dataSources, userIdToken})=>{
            if (carrito.userId==userIdToken)
                return await dataSources.productoAPI.createCarrito(carrito);
            else 
                return null;
        }
        ,
        updateCarrito: async(_, {carritoUpdate}, {dataSources, userIdToken})=>{
            if (carritoUpdate.userId==userIdToken)
                return await dataSources.productoAPI.updateCarrito(carritoUpdate)
            else 
                return null;
        },
        deleteCarrito: async(_, {carritoDelete}, {dataSources, userIdToken})=>{
            if (carritoDelete.userId==userIdToken){
                return await dataSources.productoAPI.deleteCarrito(carritoDelete.productId,carritoDelete.userId);
            }
            else
                return null;
        }
    }
};

module.exports = carritoResolver;