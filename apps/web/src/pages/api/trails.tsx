import { NextApiRequest, NextApiResponse } from 'next'
import { ApolloServer } from 'apollo-server-micro'
import { typeDefs } from '../../../graphql/schema'
import { resolvers } from '../../../graphql/resolvers'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import Cors from 'micro-cors'

const cors = Cors()

const apolloServer = new ApolloServer({
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  typeDefs,
  resolvers,
})

const startServer = apolloServer.start()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com',
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Access-Control-Allow-Headers',
  )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'POST, GET, PUT, PATCH, DELETE, OPTIONS, HEAD',
  )
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }
  await startServer

  await apolloServer.createHandler({
    path: '/api/trails',
  })(req, res)
}

export const config = {
  api: {
    bodyParser: false,
  },
}
