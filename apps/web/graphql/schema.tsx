import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type Trail {
    id: String
    name: String
    length: String
    elevation: String
    duration: String
    difficulty: String
    rating: String
    url: String
  }
  type Query {
    trails: [Trail]!
  }
`
