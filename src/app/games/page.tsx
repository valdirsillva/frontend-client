'use client'

import { useQueryGamesExploreQuery } from "@/graphql/generated"
import GamesTemplate, { GamesTemplateProps } from "../templates/Games"
import filterItemsMock from '@/components/ExploreSidebar/mock'

export default function GamesPage() {
  const { data } = useQueryGamesExploreQuery()

  const games =
    data?.games?.data
      .filter((game) => game.attributes)
      .map((game) => {
        const attributes = game.attributes!

        return {
          slug: attributes.slug ?? '',
          title: attributes.name ?? 'Unknown',
          developer:
            attributes.developers?.data?.[0]?.attributes?.name ?? 'Unknown',
          img: attributes.cover?.data?.attributes?.url
            ? `http://localhost:1337${attributes.cover.data.attributes.url}`
            : '/img/placeholder.png',
          price: attributes.price,
          // slug: attributes.slug,
        }
      }) ?? []


  const items = {
    games: games,
    filterItems: filterItemsMock
  } as GamesTemplateProps

  return <GamesTemplate {...items} />
}