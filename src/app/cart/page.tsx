'use client'
import CartTemplate, { CartProps } from "@/app/templates/Cart"
import itemsMock from '@/components/CartList/mock'
import cardsMock from '@/components/PaymentOptions/mock'
import { useQueryRecommendedQuery } from "@/graphql/generated"
import { recommendedGamesMapper, recommendedHighlightMapper } from "@/utils/mappers"

export default function CartPage() {
  const { data } = useQueryRecommendedQuery({
    pollInterval: 60000
  })

  const items = {
    items: itemsMock,
    total: '$ 430,00',
    cards: cardsMock,
    recommendedGames: recommendedGamesMapper(data?.recommended),
    recommendedHighlight: recommendedHighlightMapper(data?.recommended)
  } as CartProps

  return <CartTemplate {...items} />
}