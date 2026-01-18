import { gql } from '@apollo/client'
import { BannerFragment } from '../fragments/banner'
import { GameFragment } from '../fragments/game'

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
  }

  ${BannerFragment}
  ${GameFragment}
`

// {
//         upcomingGames: games(filters: { release_date: { gt: "2021-01-27" } } sort: ["release_date:asc"]
//           pagination: {
//             limit: 8
//           }
//         ) {
//           data {
//             ...GameFragment
//           }
//         }
//       }

//       {
//         freeGames: games( filters: { price:0 } sort: ["release_date:desc"] pagination: { limit: 8 } ) {
//           data {
//             ...GameFragment
//           }
//         }
//       }
//     }

