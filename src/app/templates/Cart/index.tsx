'use client'
import Base from '@/app/templates/base'
import Heading from '@/components/Heading'
import Showcase from '@/components/Showcase'
import { Container } from '@/components/Container'
import { Divider } from '@/components/Divider'
import { GameCardProps } from '@/components/GameCard'
import { HighlightProps } from '@/components/Highlight'
import CartList, { CartListProps } from '@/components/CartList'

import * as S from './styles'
import PaymentOptions, { PaymentOptionsProps } from '@/components/PaymentOptions'
import Empty from '@/components/Empty'

export type CartProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>

const CartTemplate = ({
  recommendedGames,
  recommendedHighlight,
  items,
  total,
  cards
}: CartProps) => {
  const handlePayment = () => ({})

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor='secondary'>
          My cart
        </Heading>
        {items?.length ? (
          <S.Content>
            <CartList items={items} total={total} />
            <PaymentOptions cards={cards} handlePayment={handlePayment} />
          </S.Content>

        ) : (
          <Empty
            title='Your cart is empty'
            description='Go back to the stpore and explore great games and offers'
            hasLink
          />
        )}
        <Divider />
      </Container>

      <Showcase
        title='YOu may like these games'
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default CartTemplate