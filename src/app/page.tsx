'use client'

import Home, { HomeTemplateProps } from './home'
import gamesMock from '../components/GameCardSlider/mock'
import highligthMock from '../components/Highlight/mock'
import { useQueryHomeQuery } from '@/graphql/generated'

export default function Index() {
  const { data } = useQueryHomeQuery({
    pollInterval: 60000 // 60 segundos (refaz a query automaticamente)
  })

  const banners = data?.banners
  const newGames = data?.newGames
  const upcommingGames = data?.upcomingGames
  const freeGames = data?.freeGames
  const sections = data?.sections

  const pageData = {
    banners: banners?.data.map((banner) => ({
      img: `http://localhost:1337${banner.attributes?.image.data?.attributes?.url}`,
      title: banner.attributes?.title,
      subtitle: banner.attributes?.subtitle,
      buttonLabel: banner.attributes?.button?.label ?? 'Buy now',
      buttonLink: banner.attributes?.button?.link,
      ...(banner.attributes?.ribbon && ({
        ribbon: banner.attributes.ribbon.text,
        ribbonColor: banner.attributes.ribbon.color,
        ribbonSize: banner.attributes.ribbon.size
      }))
    })),
    newGames: newGames?.data.map((game) => ({
      title: game.attributes?.name,
      slug: game.attributes?.slug,
      developer: game.attributes?.developers?.data[0].attributes?.name,
      img: `http://localhost:1337${game.attributes?.cover?.data?.attributes?.url}`,
      price: game.attributes?.price
    })),
    mostPopularHighlight: highligthMock,
    mostPopularGames: sections?.data?.attributes?.popularGames?.games?.data.map((game) => ({
      title: game.attributes?.name,
      slug: game.attributes?.slug,
      developer: game.attributes?.developers?.data[0].attributes?.name,
      img: `http://localhost:1337${game.attributes?.cover?.data?.attributes?.url}`,
      price: game.attributes?.price
    })),
    upcommingGames: upcommingGames?.data.map((game) => ({
      title: game.attributes?.name,
      slug: game.attributes?.slug,
      developer: game.attributes?.developers?.data[0].attributes?.name,
      img: `http://localhost:1337${game.attributes?.cover?.data?.attributes?.url}`,
      price: game.attributes?.price
    })),
    upcommingHighligth: highligthMock,
    upcommingMoreGames: gamesMock,
    freeGame: freeGames?.data.map((game) => ({
      title: game.attributes?.name,
      slug: game.attributes?.slug,
      developer: game.attributes?.developers?.data[0].attributes?.name,
      img: `http://localhost:1337${game.attributes?.cover?.data?.attributes?.url}`,
      price: game.attributes?.price
    })),
    freeHighlight: highligthMock
  } as HomeTemplateProps

  return <Home {...pageData} />
}
