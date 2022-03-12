const { gql } = require('apollo-server-express');

const typeDefs= gql`

    type Query {
        me: User
    }



    input Book {
        authors: []
        desctiption: String!
        title: String!:
        bookId: ID!
        image: String!
        link: Sting!
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!): Auth
        saveBook(authors: ): User
    }
`;

module.exports = typeDefs