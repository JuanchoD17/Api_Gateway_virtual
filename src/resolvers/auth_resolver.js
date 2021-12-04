const usersResolver = {
    Query: {
        userDetailById: (_, { userId }, { dataSources, userIdToken }) => {
            if (userId == userIdToken)
                return dataSources.authAPI.getUser(userId)
            else
                return null
        },
    },
    Mutation: {
        signUpUser: async(_, { UserInput }, { dataSources }) => {
            const authInput = {
                username: UserInput.username,
                password: UserInput.password,
                name: UserInput.name,
                last_name: UserInput.last_name,
                email: UserInput.email,
                adress: UserInput.adress,
                cellphone: UserInput.cellphone
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