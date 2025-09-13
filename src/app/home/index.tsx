import { HighlightProps } from '@/components/Highlight'
import { GameCardProps } from '@/components/GameCard'
import { BannerProps } from '@/components/Banner'

import BannerSlider from '@/components/BannerSlider'
import { Container } from '@/components/Container'
import Showcase from '../../components/Showcase'
import * as S from './styles'
import Base from '../base'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighligth: HighlightProps
  upcommingMoreGames: GameCardProps[]
  freeGame: GameCardProps[]
  freeHighlight: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighligth,
  upcommingMoreGames,
  freeHighlight,
  freeGame
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>
    <S.SectionNews>
      <Showcase title="News" games={newGames} />
    </S.SectionNews>
    <Showcase
      title="Most Popular"
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />
    <S.SectionUpcoming>
      <Showcase title="Upcomming" games={upcommingGames} />
      <Showcase highlight={upcommingHighligth} games={upcommingMoreGames} />
    </S.SectionUpcoming>
    <Showcase title="Freegames" highlight={freeHighlight} games={freeGame} />
  </Base>
)

export default Home
