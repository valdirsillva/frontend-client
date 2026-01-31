'use client'

import Home, { HomeTemplateProps } from './home'
import gamesMock from '../components/GameCardSlider/mock'
import { useQueryHomeQuery } from '@/graphql/generated'
import { bannerMapper, freeGamesMapper, freeHighlightMapper, gamesMapper, mostPopularHighlight, mostPopularGamesMapper, upcomingGamesMapper, upcomingHighlightMapper } from '@/utils/mappers'

export default function Index() {
  const { data } = useQueryHomeQuery({
    pollInterval: 60000, // 60 segundos (refaz a query automaticamente)
    variables: {
      date: new Date().toISOString().slice(0, 10)
      // date: '2024-06-01'
    }
  })

  const banners = data?.banners
  const newGames = data?.newGames
  const upcommingGames = data?.upcomingGames
  const freeGames = data?.freeGames
  const sections = data?.sections

  const pageData = {
    banners: bannerMapper(banners),
    newGames: gamesMapper(newGames),
    newGamesTitle: sections?.data?.attributes?.newGames?.title,
    mostPopularGames: mostPopularGamesMapper(sections),
    mostPopularHighlight: mostPopularHighlight(sections),
    mostPopularGamesTitle: sections?.data?.attributes?.popularGames?.title,
    upcommingGamesTitle: sections?.data?.attributes?.upcomingGames?.title,
    upcommingGames: upcomingGamesMapper(upcommingGames),
    upcommingHighligth: upcomingHighlightMapper(sections),
    upcommingMoreGames: gamesMock,
    freeGamesTitle: sections?.data?.attributes?.freeGames?.title,
    freeGame: freeGamesMapper(freeGames),
    freeHighlight: freeHighlightMapper(sections)
  } as HomeTemplateProps

  return <Home {...pageData} />
}
