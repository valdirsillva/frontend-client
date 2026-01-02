'use client'

import { Container } from "@/components/Container";
import Empty from "@/components/Empty";
import Base from "./templates/base";

export default function PageNotFound() {
  return (
    <Base>
      <Container>
        <Empty
          title="404: Not Found"
          description="Ops... this page does not exist. Go back to the store and enjoiy our offers"
          hasLink
        />
      </Container>
    </Base>
  )
}