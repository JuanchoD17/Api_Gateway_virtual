const usersResolver = {
    Query: {
        userDetailById: (_, { userId }, { dataSources, userIdToken }) => {
        if (userId == userIdToken){
            console.log(userIdToken);
            return dataSources.authAPI.getUser(userId)
        } 
        else
            return null
        },
    },
    Mutation: {
        signUpUser: async(_, { userInput }, { dataSources }) => {
            const authInput = {
                username: userInput.username,
                password: userInput.password,
                name: userInput.name,
                last_name: userInput.last_name,
                email: userInput.email,
                adress: userInput.adress,
                cellphone: userInput.cellphone
            }
            return await dataSources.authAPI.createUser(authInput);
        },
        logIn: (_, { credentials }, { dataSources }) =>
            dataSources.authAPI.authRequest(credentials),
        refreshToken: (_, { refresh }, { dataSources }) =>
            dataSources.authAPI.refreshToken(refresh),
        
    }
};

module.exports = usersResolver;