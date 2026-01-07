// app/actions/getGames.ts
'use server'

import { gql } from '@apollo/client'
import { initializeApollo } from '@/utils/apollo'

export async function getGames() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: gql`     
      query QueryGames {
        games {
          data {
            attributes {
              name 
              slug 
              price 

              cover {
                data {
                  attributes {
                    url
                  }
                }
              }

              developers {
                data {
                  attributes {
                    name
                  }
                }
              }
            }
          }
        }
      }
    `,
  })

  return data
}
