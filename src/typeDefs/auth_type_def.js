const {gql} = require('apollo-server');

const authTypeDefs = gql `

        type Tokens{
            refresh: String!
            access: String!

        }
        type Access{
            access: String!
        }

        input CredentialsInput{
            username: String!
            password: String!

        }
                                
        input SignUpInput{
            username   : String!
            password   : String!
            name       : String!
            last_name  : String!
            email      : String!
            adress     : String!
            cellphone  : String!
        }

        type UserDetail{

            id         : Int!
            username   : String!
            password   : String!
            name       : String!
            last_name  : String!
            email      : String!
            adress     : String!
            cellphone  : String!
        }

        type Mutation{
            signUpUser(UserInput:SignUpInput!): Tokens!
            logIn(credentials:CredentialsInput!): Tokens!
            refreshToken(refresh: String): Access!
        
        }

        type Query{

            userDetailById(userId: Int!): UserDetail!
        }
      
`;

module.exports = authTypeDefs;


