import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client/react'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache()
})

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp;