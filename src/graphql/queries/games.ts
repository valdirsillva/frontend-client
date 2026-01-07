import { gql } from '@apollo/client'

export const QUERY_GAMES = gql`     
      query QueryGamesExplore($limit: Int) {
        games(pagination: { limit: $limit }) {
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
    `