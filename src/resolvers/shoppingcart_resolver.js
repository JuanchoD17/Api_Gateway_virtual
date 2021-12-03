const carritoResolver = {
    Query: {
        CarritoByUserId: async (_, {userId}, {dataSource, userIdToken})=>{
            userToken = (await dataSource.Auth_API.getUser(userIdToken)).userId
            if (userToken==userId)
                return await dataSource.Auth_API.getUser(userId);
            else
                return null;
        }
    },
    Mutation:{
        createCarrito: async(_, {carrito}, {dataSource, userIdToken})=>{
            userToken = (await dataSource.Auth_API.getUser(userIdToken)).userId
            if (carrito.userId==userToken)
                return await dataSource.Producto_API.createCarrito(carrito);
            else 
                return null;
        }
        ,
        updateCarrito: async(_,{carrito},{dataSource, userIdToken})=>{
            userToken = (await dataSource.Auth_API.getUser(userIdToken)).userId
            if (carrito.userId==userToken)
                return await dataSource.Producto_API.updateUser(carrito)
            else 
                return null;
        },
        deleteCarrito: async(_, {carrito,userId}, {dataSource, userIdToken})=>{
            userToken = (await dataSource.Auth_API.getUser(userIdToken)).userId
            if (userId==userToken)
                return await dataSource.Producto_API.deleteCarrito(userId, carrito);
            else
                return null;
        }
    }
};

module.exports = carritoResolver;