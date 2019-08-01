const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    categories(
      """
      The number of results to show. Must be >= 1. Default = 20
      """
      pageSize: Int
      """
      If you add a cursor here, it will only return results _after_ this cursor
      """
      after: String
    ): CategoryConnection!
    joke(
      category: String
    ): Joke!
  }

  type CategoryConnection {
    cursor: String!
    hasMore: Boolean!
    categories: [Category]!
  }

  type Category {
    id: ID!
    name: String!
  }

  type Joke {
    categories: [Category]!
    created_at: String!
    icon_url: String!
    id: ID!
    updated_at: String!
    url: String!
    value: String!
  }
`;

module.exports = typeDefs;
