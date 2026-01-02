import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import { useMemo } from 'react'

let apolloClient: ApolloClient | null = null

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined', // true
    link: new HttpLink({ uri: 'http://localhost:1337/graphql' }),
    // Cache para armazenar os dados
    cache: new InMemoryCache()
  })
}

export function initializeApollo(initialState: Record<string, unknown> = {}) {
  // Serve para verificar se já existe um client criado, para não criar vários instances
  const _apolloClient = apolloClient ?? createApolloClient()

  // recuperando os dados do cache
  // hidrata o estado inicial
  if (Object.keys(initialState).length > 0) {
    _apolloClient.cache.restore(initialState)
  }

  // sempre inicializando no SSR com cache limpo
  if (typeof window === 'undefined') return _apolloClient

  // Singleton no client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState?: Record<string, unknown>) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}