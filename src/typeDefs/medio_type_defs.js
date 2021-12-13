const {gql}= require('apollo-server');

const medioTypeDefs = gql `
    type Medio {
        id          :Int
        userId      :String!
        type        :String!
        number      :String!
        expDate     :String!
        cv          :String!
    }

    input MedioInput {
        id          :Int
        userId      :String!
        type        :String!
        number      :String!
        expDate     :String!
        cv          :String!
    }

    input MedioUpdate{
        id          :Int
        userId      :String!
        type        :String!
        number      :String!
        expDate     :String!
        cv          :String!
    }

    input MedioDelete{
        id          :Int
        userId      :String!
    }

    type MedioDel{
        id          :Int
        userId      :String!
    }


    extend type Query{
        getMedio(userId: String!): [Medio]
    }

    extend type Mutation{
        createMedio(medio       : MedioInput!) : Medio
        updateMedio(medioUpdate : MedioUpdate!): Medio!
        deleteMedio(medioDelete : MedioDelete!): MedioDel!
    }

`;
module.exports = medioTypeDefs;