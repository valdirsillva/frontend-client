import { GameCardProps } from "@/components/GameCard"
import { HighlightProps } from "@/components/Highlight"
import { QueryHomeQuery, QueryRecommendedQuery } from "@/graphql/generated"

export const bannerMapper = (banners: QueryHomeQuery['banners']) => {
  return banners && banners.data.map((banner) => ({
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
  }))
}

export const gamesMapper = (games: QueryHomeQuery['newGames'] | null | undefined) => {
  return games && games?.data.map((game) => ({
    title: game.attributes?.name,
    slug: game.attributes?.slug,
    developer: game.attributes?.developers?.data[0].attributes?.name,
    img: `http://localhost:1337${game.attributes?.cover?.data?.attributes?.url}`,
    price: game.attributes?.price
  }))
}


export const recommendedGamesMapper = (
  section: any
): GameCardProps[] => {
  const games = section?.games?.data

  if (!games) return []

  return games.map((game: any) => ({
    title: game.attributes?.name ?? '',
    slug: game.attributes?.slug ?? undefined,
    developer:
      game.attributes?.developers?.data?.[0]?.attributes?.name ?? '',
    img: game.attributes?.cover?.data?.attributes?.url
      ? `http://localhost:1337${game.attributes.cover.data.attributes.url}`
      : '',
    price: game.attributes?.price ?? 0
  }))
}

export const recommendedHighlightMapper = (games: QueryRecommendedQuery['recommended'] | null | undefined): HighlightProps => {
  const highlight = games?.data?.attributes?.section?.highlight

  if (!highlight) {
    return {
      title: '',
      subtitle: '',
      backgroundImage: '',
      buttonLabel: '',
      buttonLink: '',
    }
  }

  const floatImageUrl =
    highlight?.floatImage?.data?.[0]?.attributes?.url
      ? `http://localhost:1337${highlight.floatImage.data[0].attributes.url}`
      : undefined

  return highlight && {
    title: highlight.title ?? '',
    subtitle: highlight.subtitle ?? '',
    backgroundImage: highlight.background?.data?.attributes?.url
      ? `http://localhost:1337${highlight.background.data.attributes.url}`
      : '',
    floatImage: floatImageUrl,
    alignment: highlight.alignment as 'right' | 'left' | undefined,
    buttonLabel: highlight.buttonLabel ?? 'Buy now',
    buttonLink: highlight.buttonLink ?? '/games/rdr2',
  }

}
export const mostPopularGamesMapper = (sections: QueryHomeQuery['sections'] | null | undefined) => {
  return sections && sections?.data?.attributes?.popularGames?.games?.data.map((game) => ({
    title: game.attributes?.name,
    slug: game.attributes?.slug,
    developer: game.attributes?.developers?.data[0].attributes?.name,
    img: `http://localhost:1337${game.attributes?.cover?.data?.attributes?.url}`,
    price: game.attributes?.price
  }))
}

export const mostPopularHighlight = (highlight: QueryHomeQuery['sections'] | null | undefined) => {
  const floatImageUrl = highlight?.data?.attributes?.popularGames?.highlight?.floatImage?.data[0]?.attributes?.url
    ? `http://localhost:1337${highlight?.data?.attributes?.popularGames?.highlight?.floatImage?.data[0]?.attributes?.url}`
    : null
  return highlight && {
    title: highlight?.data?.attributes?.popularGames?.highlight?.title,
    subtitle: highlight?.data?.attributes?.popularGames?.highlight?.subtitle,
    backgroundImage: `http://localhost:1337${highlight?.data?.attributes?.popularGames?.highlight?.background?.data?.attributes?.url}`,
    floatImage: floatImageUrl,
    alignment: highlight?.data?.attributes?.popularGames?.highlight?.alignment as 'right' | 'left' | null,
    buttonLabel: 'Buy bow',
    buttonLink: '/games/rdr2',
  }
}

export const upcomingGamesMapper = (games: QueryHomeQuery['upcomingGames'] | null | undefined) => {
  return games && games?.data.map((game) => ({
    title: game.attributes?.name,
    slug: game.attributes?.slug,
    developer: game.attributes?.developers?.data[0].attributes?.name,
    img: `http://localhost:1337${game.attributes?.cover?.data?.attributes?.url}`,
    price: game.attributes?.price,
  }))
}

export const upcomingHighlightMapper = (highlight: QueryHomeQuery['sections'] | null | undefined) => {
  const floatImageUrl = highlight?.data?.attributes?.upcomingGames?.highlight?.floatImage?.data[0]?.attributes?.url
    ? `http://localhost:1337${highlight?.data?.attributes?.upcomingGames?.highlight?.floatImage?.data[0]?.attributes?.url}`
    : null
  return highlight && {
    title: highlight?.data?.attributes?.upcomingGames?.highlight?.title,
    subtitle: highlight?.data?.attributes?.upcomingGames?.highlight?.subtitle,
    backgroundImage: `http://localhost:1337${highlight?.data?.attributes?.upcomingGames?.highlight?.background?.data?.attributes?.url}`,
    floatImage: floatImageUrl,
    alignment: highlight?.data?.attributes?.upcomingGames?.highlight?.alignment as 'right' | 'left' | null,
    buttonLabel: 'Buy bow',
    buttonLink: '/games/rdr2',
  }
}

export const freeGamesMapper = (games: QueryHomeQuery['freeGames'] | null | undefined) => {
  return games && games?.data.map((game) => ({
    title: game.attributes?.name,
    slug: game.attributes?.slug,
    developer: game.attributes?.developers?.data[0].attributes?.name,
    img: `http://localhost:1337${game.attributes?.cover?.data?.attributes?.url}`,
    price: game.attributes?.price
  }))
}


export const freeHighlightMapper = (highlight: QueryHomeQuery['sections'] | null | undefined) => {
  const floatImageUrl = highlight?.data?.attributes?.freeGames?.highlight?.floatImage?.data[0]?.attributes?.url
    ? `http://localhost:1337${highlight?.data?.attributes?.freeGames?.highlight?.floatImage?.data[0]?.attributes?.url}`
    : null
  return highlight && {
    title: highlight?.data?.attributes?.freeGames?.highlight?.title,
    subtitle: highlight?.data?.attributes?.freeGames?.highlight?.subtitle,
    backgroundImage: `http://localhost:1337${highlight?.data?.attributes?.freeGames?.highlight?.background?.data?.attributes?.url}`,
    floatImage: floatImageUrl,
    alignment: highlight?.data?.attributes?.freeGames?.highlight?.alignment as 'right' | 'left' | null,
    buttonLabel: 'Buy bow',
    buttonLink: '/games/rdr2',
  }
}
