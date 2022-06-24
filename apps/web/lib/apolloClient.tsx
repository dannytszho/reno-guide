import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'http://localhost:3000/api/trails',
    }),
    cache: new InMemoryCache(),
  })
}

export const apolloClient = createApolloClient()
