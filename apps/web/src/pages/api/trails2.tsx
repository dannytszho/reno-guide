import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client'
import { NextApiRequest, NextApiResponse } from 'next'

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://localhost:3000/api/trails',
    }),
    cache: new InMemoryCache(),
  })
}

const apolloClient = createApolloClient()

const GET_ALL_TRAILS = gql`
  query {
    getAllTrails {
      id: String
      name: String
      length: String
      elevation: String
      duration: String
      difficulty: String
      rating: String
      url: String
    }
  }
`
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { data } = await apolloClient.query({
      query: GET_ALL_TRAILS,
    })
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.json({ data })
  } catch (error) {
    console.error(error)
    res.status(error.status || 500).end(error.message)
  }
}
