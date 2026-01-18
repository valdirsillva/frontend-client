import { gql } from '@apollo/client'

export const GameFragment = gql`
  fragment GameFragment on GameEntity {
      attributes {
        name
        slug

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

        price
      }
    }
`

