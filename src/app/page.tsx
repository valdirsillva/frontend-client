'use client'

import { gql } from '@apollo/client'

import Home, { HomeTemplateProps } from './home'

import bannersMock from '../components/BannerSlider/mock'
import gamesMock from '../components/GameCardSlider/mock'
import highligthMock from '../components/Highlight/mock'
import { useQuery } from '@apollo/client/react'

export default function Index() {
  const { data: dados, loading, error } = useQuery(gql`
      query Games {
        games {
          data {
            id
            attributes {
              name
            }
          }
        }
      }
    `)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  if (dados) return <pre>{JSON.stringify(dados, null, 2)}</pre>


  const data = {
    banners: bannersMock,
    newGames: gamesMock,
    mostPopularHighlight: highligthMock,
    mostPopularGames: gamesMock,
    upcommingGames: gamesMock,
    upcommingHighligth: highligthMock,
    upcommingMoreGames: gamesMock,
    freeGame: gamesMock,
    freeHighlight: highligthMock
  } as HomeTemplateProps
  return <Home {...data} />
}
