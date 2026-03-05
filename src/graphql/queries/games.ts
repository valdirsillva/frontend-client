import { gql, QueryHookOptions } from '@apollo/client'
import { useQuery } from '@apollo/client'
import { QUERY_GAMES as QueryGames } from '@/graphql/queries/games'
import { GamesQueryData, GamesQueryVariables } from '@/graphql/types/game'

export const QUERY_GAMES = gql`     
  query QueryGamesExplore($limit: Int, $start: Int) {
    games(pagination: { limit: $limit, start: $start }) {
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

// No Strapi 4, o argumento where n ão existe mais no GraphQL.
// Substituímos o where por filters para realizar filtros nas queries.
export const QUERYGAME_BY_SLUG = gql`
  query QueryGamesBySlug($slug: String) {
    games(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          name
          short_description
          description
          price
          rating
          release_date
          gallery {
            data {
              attributes {
                src: url
                label: alternativeText
              }
            }
          }
          cover {
            data {
              attributes {
                src: url
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
          publisher {
            data {
              attributes {
                name
              }
            }
          }

          categories {
            data {
              attributes {
                name
              }
            }
          }

          platforms {
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
export function useQueryGames(options?: QueryHookOptions<GamesQueryData, GamesQueryVariables>) {
  return useQuery(QueryGames, options)
}