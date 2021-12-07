const {gql}= require('apollo-server');

const medioTypeDefs = gql `
    type Medio {
        id          :String!
        userId      :String!
        type        :String!
        number      :String!
        expDate     :String!
        cv          :String!
    }

    input MedioInput {
        type        :String!
        number      :String!
        expDate     :String!
        cv          :String!
    }

    input MedioUpdate{
        id          :String!
        type        :String!
        number      :String!
        expDate     :String!
        cv          :String!
    }

    extend type Query{
        medioByUserId(userId: String!): [Medio]!
    }

    extend type Mutation{
        createMedio(Medio: CarritoInput!) : Medio!
        updateMedio(Medio: CarritoUpdate!): Medio!
        deleteMedio(Id: String!)          : String!
    }

`;
module.exports = medioTypeDefs;