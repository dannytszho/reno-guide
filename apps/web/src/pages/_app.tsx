import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from '../../lib/apolloClient'

function MyApp({ Component, pageProps }: AppProps) {
  const MyComponent = Component as any
  return (
    <ApolloProvider client={apolloClient}>
      <div>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="keywords" content="titla, meta, nextjs" />
          <meta name="author" content="Syamlal CM" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <MyComponent {...pageProps} />
      </div>
    </ApolloProvider>
  )
}

export default MyApp
