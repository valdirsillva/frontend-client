'use client'

import ProfileTemplate from "@/app/templates/Profile"
import OrdersList, { OrdersListProps } from "@/components/OrdersList"
import ordersMock from '@/components/OrdersList/mock'

const { items } = {
  items: ordersMock
} as OrdersListProps

export default function Orders() {
  return (
    <ProfileTemplate>
      <OrdersList items={items} />
    </ProfileTemplate>
  )
}

