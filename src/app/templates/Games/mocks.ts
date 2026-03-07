import { QUERY_GAMES } from "@/graphql/queries/games"

export const gamesMock =
{
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15 }
  },
  result: {
    data: {
      games: {
        data: [
          {
            attributes: {
              name: 'Game 1',
              slug: 'game-1',
              short_description: 'Short description of Game 1',
              developers: {
                data: [
                  { attributes: { name: 'Developer 1' } }
                ]
              },
              cover: {
                data: {
                  attributes: { url: '/cover.jpg' }
                }
              },
              price: 235
            }
          }
        ]
      }
    }
  }
}


export const fetchMock =
{
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, start: 1 }
  },
  result: {
    data: {
      games: {
        data: [
          {
            attributes: {
              name: 'Fetch More Game',
              slug: 'fetch-more',
              short_description: 'Short description of Game 1',
              developers: {
                data: [
                  { attributes: { name: 'Developer 1' } }
                ]
              },
              cover: {
                data: {
                  attributes: { url: '/cover.jpg' }
                }
              },
              price: 235
            }
          }
        ]
      }
    }
  }
}
