import gamesMock from '@/components/GameCardSlider/mock'
import highlightMock from '@/components/Highlight/mock'
import WishlistTemplate, { WishlistTemplateProps } from '../templates/Wishlist'

export default function Wishlist() {
  const props: WishlistTemplateProps = {
    games: gamesMock,
    recommendedGames: gamesMock.slice(0, 5),
    recommendedHighlight: highlightMock
  }
  return <WishlistTemplate {...props} />
}