'use client'

import GamesTemplate, { GamesTemplateProps } from "../templates/Games"
import filterItemsMock from '@/components/ExploreSidebar/mock'
import gamesMock from '@/components/GameCardSlider/mock'

const items = {
  games: gamesMock,
  filterItems: filterItemsMock
} as GamesTemplateProps

export default function GamesPage() {
  return <GamesTemplate {...items} />
}