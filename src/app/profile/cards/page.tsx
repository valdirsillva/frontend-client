'use client'

import CardsList, { CardsListProps } from "@/components/CardsList"
import ProfileTemplate from "@/app/templates/Profile"
import mockCards from '@/components/PaymentOptions/mock'

const { cards } = {
  cards: mockCards
} as CardsListProps

export default function Cards() {
  return (
    <ProfileTemplate>
      <CardsList cards={cards} />
    </ProfileTemplate>
  )
}

