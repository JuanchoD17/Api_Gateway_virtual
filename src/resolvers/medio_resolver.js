const medioResolver = {
    Query: {
        getMedio: async (_, {userId}, {dataSources, userIdToken})=>{
            if (userIdToken==userId){
                return await dataSources.medioAPI.getMedio(userId);
            }    
            else
                return null
        },
    },
    Mutation:{
        createMedio: async(_, {medio}, {dataSources, userIdToken})=>{
            if (medio.userId==userIdToken)
                return await dataSources.medioAPI.createMedio(medio,medio.userId);
            else 
                return null;
        }
        ,
        updateMedio: async(_,{medioUpdate},{dataSources, userIdToken})=>{
            if (medioUpdate.userId==userIdToken){
                console.log(medioUpdate);
                return await dataSources.medioAPI.updateMedio(medioUpdate,medioUpdate.userId)
            }
            else 
                return null;
        },
        deleteMedio: async(_,{medioDelete},{dataSources, userIdToken})=>{
            if (medioDelete.userId==userIdToken){
                return await dataSources.medioAPI.deleteMedio(medioDelete, medioDelete.userId);
            }
            else
                return null;
        }
    }
};

module.exports = medioResolver;