'use client'

import Base from '@/app/templates/base'
import Heading from '@/components/Heading'
import { Divider } from '@/components/Divider'
import { Container } from '@/components/Container'
import { Grid } from '@/components/Grid'
import GameCard, { GameCardProps } from '@/components/GameCard'
import { HighlightProps } from '@/components/Highlight'
import Showcase from '@/components/Showcase'
import Empty from '@/components/Empty'


export type WishlistTemplateProps = {
  games?: GameCardProps[]
  recommendedTitle?: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const WishlistTemplate = ({ games = [], recommendedTitle, recommendedGames, recommendedHighlight }: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor='secondary'>
        Wishlist
      </Heading>

      {games.length ? (
        <Grid>
          {games?.map((game, index) => (
            <GameCard key={`wishlist-${index}`} {...game} />
          ))}
        </Grid>
      ) : (
        <Empty
          title={recommendedTitle || 'Your wishlist is empty'}
          description='Games added to your wishlist will appear here'
          hasLink
        />
      )}


      <Divider />
    </Container>

    <Showcase
      title="You may these games"
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
)

export default WishlistTemplate