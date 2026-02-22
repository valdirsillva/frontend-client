'use client'
import gamesMock from '@/components/GameCardSlider/mock'
import WishlistTemplate, { WishlistTemplateProps } from '../templates/Wishlist'
import { recommendedGamesMapper, recommendedHighlightMapper } from '@/utils/mappers'
import { useQueryRecommendedQuery } from '@/graphql/generated'

export default function Wishlist() {
  const { data } = useQueryRecommendedQuery({
    pollInterval: 60000
  })

  const props: WishlistTemplateProps = {
    games: gamesMock,
    recommendedGames: recommendedGamesMapper(data?.recommended),
    recommendedHighlight: recommendedHighlightMapper(data?.recommended)
  }
  return <WishlistTemplate {...props} />
}