import type { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const MyComponent = Component as any
  return <MyComponent {...pageProps} />
}

export default MyApp
