
import GameComponent, { GameTemplateProps } from '../../templates/Game'
import gamesMock from '@/components/GameCardSlider/mock'
import highlightMock from '@/components/Highlight/mock'

interface GalleryImage {
  attributes: {
    src: string
    label?: string | null
  }
}

interface Platform {
  attributes: {
    name: string
  }
}

interface Category {
  attributes: {
    name: string
  }
}

interface GameCover {
  data: {
    attributes: {
      url: string
    }
  } | null
}

interface Developer {
  attributes: {
    name: string
  }
}

interface Game {
  attributes: {
    name: string
    slug: string
    price: number
    cover: GameCover
    developers: {
      data: Developer[]
    }
  }
}

interface GamesResponse {
  games: {
    data: Game[]
  }
}

const QUERY_GAMES_STATIC_PARAMS = `     
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

export async function generateStaticParams() {
  const response = await fetch('http://localhost:1337/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: QUERY_GAMES_STATIC_PARAMS,
      variables: { limit: 9 }
    })
  })

  const { data } = await response.json()

  return (data as GamesResponse).games.data.map((game) => ({
    slug: game.attributes.slug
  }))
}

async function getGameBySlug(slug: string) {
  const res = await fetch('http://localhost:1337/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
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
      `,
      variables: { slug }
    }),
    cache: 'force-cache'
  })

  const json = await res.json()
  return json.data.games.data[0]
}

export default async function GamePage({ params }: { params: { slug: string } }) {
  const gameData = await getGameBySlug(params.slug)

  // Simula o que antes era o getStaticProps
  const game: GameTemplateProps = {
    cover: `http://localhost:1337${gameData.attributes.cover.data.attributes.src}`,
    gameInfo: {
      title: gameData.attributes.name,
      price: gameData.attributes.price,
      description: gameData.attributes.short_description

    },
    gallery: gameData.attributes.gallery.data.map((image: GalleryImage) => ({
      src: `http://localhost:1337${image.attributes.src}`,
      label: image.attributes.label
    })),

    description: gameData.attributes.description,
    details: {
      developer: gameData.attributes.developers.data[0].attributes.name,
      releaseDate: gameData.attributes.release_date,
      platforms: gameData.attributes.platforms.data.map((platform: Platform) => platform.attributes.name),
      publisher: gameData.attributes.publisher?.data.attributes.name,
      rating: gameData.attributes.rating,
      genres: gameData.attributes.categories.data.map((category: Category) => category.attributes.name)
    },
    upcomingGames: gamesMock,
    upcomingHighlight: highlightMock,
    recommendedGames: gamesMock
  }

  // O componente recebe os dados direto
  return <GameComponent {...game} />
}