import {
  AddShoppingCart,
  FavoriteBorder
} from '@styled-icons/material-outlined'
import Button from '../Button'
import Ribbon from '../Ribbon'
import * as S from './styles'
import Heading from '../Heading'
import formatPrice from '@/utils/format-price'

export type GameInfoProps = {
  title: string
  description: string
  price: number
}

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom>
      {title}
    </Heading>

    <Ribbon color="secondary">
      {formatPrice(price)}
    </Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonWrapper>
      <Button icon={<AddShoppingCart />} size="large">
        Add to cart
      </Button>
      <Button icon={<FavoriteBorder />} size="large" minimal>
        Wishlist
      </Button>
    </S.ButtonWrapper>
  </S.Wrapper>
)

export default GameInfo
