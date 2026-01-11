'use client'

import Home, { HomeTemplateProps } from './home'
import gamesMock from '../components/GameCardSlider/mock'
import highligthMock from '../components/Highlight/mock'
import { useQueryHomeQuery } from '@/graphql/generated'

export default function Index() {

  const { data } = useQueryHomeQuery({
    pollInterval: 60000 // 60 segundos (refaz a query automaticamente)
  })

  const pageData = {
    revalidate: 60,
    banners: data?.banners?.data.map((banner) => ({
      img: `http://localhost:1337${banner.attributes?.image.data?.attributes?.url}`,
      title: banner.attributes?.title,
      subtitle: banner.attributes?.subtitle,
      buttonLabel: banner.attributes?.button?.label,
      buttonLink: banner.attributes?.button?.link,
      ...(banner.attributes?.ribbon && ({
        ribbon: banner.attributes.ribbon.text,
        ribbonColor: banner.attributes.ribbon.color,
        ribbonSize: banner.attributes.ribbon.size
      }))
    })),
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
