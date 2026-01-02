"use client"
import { PropsWithChildren } from 'react'
import GlobalStyles from '@/styles/global'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client/react'
import theme from '@/styles/theme'
import { useApollo } from '@/utils/apollo'

export function Providers({ children }: PropsWithChildren) {
  const client = useApollo()

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ApolloProvider>
  )
}
