const carritoResolver = {
    Query: {
        carritoByUserId: async (_, {userId}, {dataSource, userIdToken})=>{
            userToken = await dataSource.authAPI.getUser(userIdToken)//).userId
            if (userToken==userId)
                return await dataSource.authAPI.getUser(userId);
            else
                return null;
        }
    },
    Mutation:{
        createCarrito: async(_, {carrito}, {dataSource, userIdToken})=>{
            userToken = await dataSource.authAPI.getUser(userIdToken)//).userId
            if (carrito.userId==userToken)
                return await dataSource.productoAPI.createCarrito(carrito);
            else 
                return null;
        }
        ,
        updateCarrito: async(_,{carrito},{dataSource, userIdToken})=>{
            userToken = await dataSource.authAPI.getUser(userIdToken)//).userId
            if (carrito.userId==userToken)
                return await dataSource.productoAPI.updateUser(carrito)
            else 
                return null;
        },
        deleteCarrito: async(_, {carrito,userId}, {dataSource, userIdToken})=>{
            userToken = await dataSource.authAPI.getUser(userIdToken)//).userId
            if (userId==userToken)
                return await dataSource.productoAPI.deleteCarrito(userId, carrito);
            else
                return null;
        }
    }
};

module.exports = carritoResolver;