'use client'
import * as S from "./styles"
import Base from '../base'
import { Grid } from '@/components/Grid'
import GameCard, { GameCardProps } from '@/components/GameCard'
import ExploreSidebar, { ItemProps } from '@/components/ExploreSidebar'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined'
import Loading from "@/components/Loading"
import { useQueryGames } from "@/graphql/queries/games"

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { data, loading, fetchMore } = useQueryGames({ variables: { limit: 15 } })

  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    fetchMore({
      variables: {
        start: data?.games?.data.length || 0,
        limit: 15
      }
    })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          items={filterItems}
          onFilter={() => console.log('filter')}
        />
        {loading ? <Loading /> : (
          <section>
            <Grid>
              {data?.games?.data.map((game) => (
                <GameCard
                  key={game.attributes?.slug}
                  title={game.attributes?.name ?? 'Unknown'}
                  developer={game.attributes?.developers?.data?.[0]?.attributes?.name ?? 'Unknown'}
                  img={`http://localhost:1337${game.attributes?.cover?.data?.attributes?.url ?? '/img/placeholder.png'}`}
                  price={game.attributes?.price ?? 0}
                />
              ))}
            </Grid>

            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>Show more</p>
              <ArrowDown size={35} />
            </S.ShowMore>
          </section>
        )}
      </S.Main>
    </Base>
  )
}
export default GamesTemplate