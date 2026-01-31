'use client'

import Home, { HomeTemplateProps } from './home'
import gamesMock from '../components/GameCardSlider/mock'
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
    newGamesTitle: sections?.data?.attributes?.newGames?.title,
    mostPopularGames: sections?.data?.attributes?.popularGames?.games?.data.map((game) => ({
      title: game.attributes?.name,
      slug: game.attributes?.slug,
      developer: game.attributes?.developers?.data[0].attributes?.name,
      img: `http://localhost:1337${game.attributes?.cover?.data?.attributes?.url}`,
      price: game.attributes?.price
    })),
    mostPopularHighlight: {
      title: sections?.data?.attributes?.popularGames?.highlight?.title,
      subtitle: sections?.data?.attributes?.popularGames?.highlight?.subtitle,
      backgroundImage: `http://localhost:1337${sections?.data?.attributes?.popularGames?.highlight?.background?.data?.attributes?.url}`,
      floatImage: `http://localhost:1337${sections?.data?.attributes?.popularGames?.highlight?.floatImage?.data[0].attributes?.url}`,
      alignment: sections?.data?.attributes?.popularGames?.highlight?.alignment as 'right' | 'left' | null,
      buttonLabel: 'Buy bow',
      buttonLink: '/games/rdr2',
    },

    mostPopularGamesTitle: sections?.data?.attributes?.popularGames?.title,
    upcommingGamesTitle: sections?.data?.attributes?.upcomingGames?.title,
    upcommingGames: upcommingGames?.data.map((game) => ({
      title: game.attributes?.name,
      slug: game.attributes?.slug,
      developer: game.attributes?.developers?.data[0].attributes?.name,
      img: `http://localhost:1337${game.attributes?.cover?.data?.attributes?.url}`,
      price: game.attributes?.price
    })),
    upcommingHighligth: {
      title: sections?.data?.attributes?.upcomingGames?.highlight?.title,
      subtitle: sections?.data?.attributes?.upcomingGames?.highlight?.subtitle,
      backgroundImage: `http://localhost:1337${sections?.data?.attributes?.upcomingGames?.highlight?.background?.data?.attributes?.url}`,
      floatImage: `http://localhost:1337${sections?.data?.attributes?.upcomingGames?.highlight?.floatImage?.data[0].attributes?.url}`,
      alignment: sections?.data?.attributes?.upcomingGames?.highlight?.alignment as 'right' | 'left' | null,
      buttonLabel: 'Buy bow',
      buttonLink: '/games/rdr2',
    },
    upcommingMoreGames: gamesMock,
    freeGamesTitle: sections?.data?.attributes?.freeGames?.title,
    freeGame: freeGames?.data.map((game) => ({
      title: game.attributes?.name,
      slug: game.attributes?.slug,
      developer: game.attributes?.developers?.data[0].attributes?.name,
      img: `http://localhost:1337${game.attributes?.cover?.data?.attributes?.url}`,
      price: game.attributes?.price
    })),
    freeHighlight: {
      title: sections?.data?.attributes?.freeGames?.highlight?.title,
      subtitle: sections?.data?.attributes?.freeGames?.highlight?.subtitle,
      backgroundImage: `http://localhost:1337${sections?.data?.attributes?.freeGames?.highlight?.background?.data?.attributes?.url}`,
      floatImage: `http://localhost:1337${sections?.data?.attributes?.freeGames?.highlight?.floatImage?.data[0].attributes?.url}`,
      alignment: sections?.data?.attributes?.freeGames?.highlight?.alignment as 'right' | 'left' | null,
      buttonLabel: 'Buy bow',
      buttonLink: '/games/rdr2',
    }
  } as HomeTemplateProps

  return <Home {...pageData} />
}
