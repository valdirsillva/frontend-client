import { gql } from '@apollo/client'

export const BannerFragment = gql`
  fragment BannerFragment on BannerEntity {
     attributes {
        title
        subtitle 

        image  {
          data {
            attributes {
              url
            }
          }
        }

        button {
          link 
          label 
        }

        ribbon {
          text 
          color
          size
        }
      }
    }
`