import CartTemplate, { CartProps } from "@/app/templates/Cart"
import gamesMock from '@/components/GameCardSlider/mock'
import highlightMock from "@/components/Highlight/mock"
import itemsMock from '@/components/CartList/mock'
import cardsMock from '@/components/PaymentOptions/mock'

const items = {
  items: itemsMock,
  total: '$ 430,00',
  cards: cardsMock,
  recommendedGames: gamesMock,
  recommendedHighlight: highlightMock
} as CartProps

export default function CartPage() {
  return <CartTemplate {...items} />
}