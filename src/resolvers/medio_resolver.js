const medioResolver = {
    Query: {
        medioByUserId: async (_, {userId}, {dataSource, userIdToken})=>{
            userToken = await dataSource.authAPI.getUser(userIdToken)//).userId
            if (userToken==userId)
                return await dataSource.authAPI.getUser(userId);
            else
                return null;
        }
    },
    Mutation:{
        createMedio: async(_, {medio}, {dataSource, userIdToken})=>{
            userToken = await dataSource.authAPI.getUser(userIdToken)//).userId
            if (medio.userId==userToken)
                return await dataSource.productoAPI.createmedio(medio);
            else 
                return null;
        }
        ,
        updateMedio: async(_,{medio},{dataSource, userIdToken})=>{
            userToken = await dataSource.authAPI.getUser(userIdToken)//).userId
            if (medio.userId==userToken)
                return await dataSource.productoAPI.updateUser(medio)
            else 
                return null;
        },
        deleteMedio: async(_, {medio,userId}, {dataSource, userIdToken})=>{
            userToken = await dataSource.authAPI.getUser(userIdToken)//).userId
            if (userId==userToken)
                return await dataSource.productoAPI.deletemedio(userId, medio);
            else
                return null;
        }
    }
};

module.exports = medioResolver;