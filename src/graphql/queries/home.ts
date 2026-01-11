import { gql } from '@apollo/client'


export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      data {
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
    }
  }
`