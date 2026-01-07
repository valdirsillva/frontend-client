'use client'

import Home, { HomeTemplateProps } from './home'
import bannersMock from '../components/BannerSlider/mock'
import gamesMock from '../components/GameCardSlider/mock'
import highligthMock from '../components/Highlight/mock'

export default function Index() {
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
