import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client'
import apolloCache from './apolloCache'

let client: ApolloClient<NormalizedCacheObject>

export function getApolloClient() {
  if (!client) {
    client = new ApolloClient({
      ssrMode: false,
      link: new HttpLink({
        uri: 'http://localhost:1337/graphql'
      }),
      cache: apolloCache
    })
  }

  return client
}