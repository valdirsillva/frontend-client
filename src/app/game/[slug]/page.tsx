
import GameComponent, { GameTemplateProps } from '../../templates/Game'
import gamesMock from '@/components/GameCardSlider/mock'
import highlightMock from '@/components/Highlight/mock'
import { gamesMapper, recommendedGamesMapper, upcomingGamesMapper } from '@/utils/mappers'


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

async function getRecommendedGames() {
  const response = await fetch('http://localhost:1337/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
        query QueryRecommended {
          recommended {
            data {
              attributes {
                section {
                  highlight {
                    ...HighlightFragment
                  }
                  games {
                    data {
                      ...GameFragment
                    }
                  }
                }
              }
            }
          }
        }

        fragment HighlightFragment on ComponentPageHighlight {
          title
          subtitle
          background {
            data {
              attributes {
                url
              }
            }
          }
          floatImage {
            data {
              attributes {
                url
              }
            }
          }
          buttonLabel
          buttonLink
          alignment
        }

        fragment GameFragment on GameEntity {
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
      `
    })
  })
  const { data } = await response.json()
  return data?.recommended?.data?.attributes?.section
}

async function getUpcommingGames() {
  const response = await fetch('http://localhost:1337/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
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

        fragment HighlightFragment on ComponentPageHighlight {
            title
            subtitle
            background {
              data {
                attributes {
                  url
                }
              }
            }
            floatImage {
              data {
                attributes {
                  url
                }
              }
            }
            buttonLabel
            buttonLink
            alignment
          }

          fragment GameFragment on GameEntity {
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
      `,
      variables: {
        // date: new Date().toISOString().slice(0, 10)
        date: "2025-01-01"
      }
    })
  })
  const data = await response.json()
  // output = undefined
  return data || []
}

export default async function GamePage({ params }: { params: { slug: string } }) {
  const gameData = await getGameBySlug(params.slug)
  const gamesRecommended = await getRecommendedGames()
  const { data } = await getUpcommingGames()
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
    upcomingGames: data.upcomingGames?.data.map((game: Game) => ({
      title: game.attributes.name,
      slug: game.attributes.slug,
      developer: game.attributes.developers.data[0].attributes.name,
      img: `http://localhost:1337${game?.attributes?.cover?.data?.attributes?.url}`,
      price: game.attributes.price
    })),
    upcomingHighlight: highlightMock,
    upcomingTitle: data.showcase?.data?.attributes?.upcomingGames?.title || 'Upcoming Games',
    recommendedTitle: data.showcase?.data?.attributes?.upcomingGames?.title || 'You may like these games1',
    recommendedGames: recommendedGamesMapper(gamesRecommended)
  }

  // O componente recebe os dados direto
  return <GameComponent {...game} />
}