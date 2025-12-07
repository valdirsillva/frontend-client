'use client'
import ExploreSidebar, { ItemProps } from '@/components/ExploreSidebar'
import GameCard, { GameCardProps } from '@/components/GameCard'
import * as S from "./styles"
import Base from '../base'
import { Grid } from '@/components/Grid'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}
const GamesTemplate = ({ filterItems, games = [] }: GamesTemplateProps) => {

  const handleShowMore = () => {
    console.log('show more')
  }
  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          items={filterItems}
          onFilter={() => console.log('filter')}
        />

        <section>
          <Grid>
            {games.map((game) => (
              <GameCard
                key={game.title}
                {...game}
              />
            ))}
          </Grid>

          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Show more</p>
            <ArrowDown size={35} />
          </S.ShowMore>
        </section>
      </S.Main>
    </Base>
  )
}
export default GamesTemplate