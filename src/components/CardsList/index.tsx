import Image from 'next/image'
import Heading from '../Heading'
import { PaymentCard } from '../PaymentOptions'
import * as S from './styles'

export type CardsListProps = {
  cards?: PaymentCard[]
}

const CardsList = ({ cards }: CardsListProps) => (
  <S.Wrapper>
    <Heading lineBottom color="black" size="small">
      My cards
    </Heading>

    {cards?.map((card) => (
      <S.Card key={card.number}>
        <Image src={card.img} alt={card.flag} width={50} height={50} unoptimized />
        <span>{card.number}</span>
      </S.Card>
    ))}
  </S.Wrapper>
)

export default CardsList