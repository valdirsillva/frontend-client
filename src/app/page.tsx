'use client'
import { gql } from '@apollo/client'

import Home, { HomeTemplateProps } from './home'

import bannersMock from '../components/BannerSlider/mock'
import gamesMock from '../components/GameCardSlider/mock'
import highligthMock from '../components/Highlight/mock'
import { initializeApollo } from '@/utils/apollo'
import { useEffect, useState } from 'react'
import { getGames } from './actions/get-games'

const GET_GAMES = gql`
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
    `

export default function Index() {
  // const [games, setGames] = useState<any[]>([])
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   getGames().then((data) => {
  //     setGames(data)
  //     setLoading(false)
  //   })
  // }, [])

  // if (loading) return <p>Carregando...</p>

  const pageData = {
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
  return <Home {...pageData} />
}
