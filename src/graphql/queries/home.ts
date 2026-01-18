import { gql } from '@apollo/client'
import { BannerFragment } from '../fragments/banner'
import { GameFragment } from '../fragments/game'
import { HighlightFragment } from '../fragments/highlight'

export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      data {
        ...BannerFragment
      }
    }

    newGames: games(
      filters: { release_date: { lte: "2021-01-27" } }
      sort: ["release_date:desc"]
      pagination: { limit: 8 }
    ) {
      data {
        ...GameFragment
      }
    }

    upcomingGames: games(
      filters: { release_date: { gt: "2021-01-27" } } 
      sort: ["release_date:asc"]
      pagination: { limit: 8 }
    ) {
      data {
        ...GameFragment
      }
    }

    freeGames: games( 
      filters: { price: { eq: 0 } } 
      sort: ["release_date:desc"] 
      pagination: { limit: 8 } 
    ) {
      data {
        ...GameFragment
      }
    }
    
    sections: home {
      data {
        attributes {
          newGames {
            title
            highlight {
              ...HighlightFragment
            }
          }

          popularGames {
            type
            highlight {
              ...HighlightFragment
            }
            games(pagination: { limit: 8 }) {
              data {
                ...GameFragment
              }
            }
          }

          upcomingGames {
            title
            highlight {
              ...HighlightFragment
            }
          }

          freeGames {
            title
            highlight {
              ...HighlightFragment
            }
          }
        }
      }
    }
  }

  ${BannerFragment}
  ${GameFragment}
  ${HighlightFragment}
`
