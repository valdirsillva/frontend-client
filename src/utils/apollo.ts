import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client'

let client: ApolloClient<NormalizedCacheObject>

export function getApolloClient() {
  if (!client) {
    client = new ApolloClient({
      ssrMode: false,
      link: new HttpLink({
        uri: 'http://localhost:1337/graphql'
      }),
      cache: new InMemoryCache()
    })
  }

  return client
}