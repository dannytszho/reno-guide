import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://reno-guide.vercel.app/api/trails',
    }),
    cache: new InMemoryCache(),
  })
}

export const apolloClient = createApolloClient()
