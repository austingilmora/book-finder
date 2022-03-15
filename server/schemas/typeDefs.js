const { gql } = require('apollo-server-express');

const typeDefs = gql`
    
    type Auth {
        token: ID!
        user: User
    }

    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }


    type Book {
        authors: [String]
        description: String
        title: String
        bookId: ID
        image: String
        link: String
    }

    input BookInput {
        authors: [String]
        description: String
        title: String
        bookId: ID
        image: String
        link: String
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: BookInput): User
        removeBook(bookId: ID!): User
    }
`;

module.exports = typeDefs

