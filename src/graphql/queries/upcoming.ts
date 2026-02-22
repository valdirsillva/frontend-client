import { gql } from '@apollo/client'
import { GameFragment } from '../fragments/game'
import { HighlightFragment } from '../fragments/highlight'

export const QUERY_UPCOMING = gql`
  query QueryUpcoming ($date: Date!) {
    upcomingGames: games(
      filters: { release_date: { gt: $date } } 
      sort: ["release_date:asc"]
      pagination: { limit: 8 }
    ) {
      data {
        ...GameFragment
      }
    }

    showcase: home {
      data {
        attributes {
          upcomingGames {
            title
            highlight {
              ...HighlightFragment
            }
          }
        }
      }
    }
  }

  ${GameFragment}
  ${HighlightFragment}
`
