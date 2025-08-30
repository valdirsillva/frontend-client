import 'match-media-mock'
import { screen } from '@testing-library/react'
import Home, { HomeTemplateProps } from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

import bannersMock from '../../components/BannerSlider/mock'
import gamesMock from '../../components/GameCardSlider/mock'
import highligthMock from '../../components/Highlight/mock'

const props = {
  banners: bannersMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highligthMock,
  mostPopularGames: [gamesMock[0]],
  upcommingGames: [gamesMock[0]],
  upcommingHighligth: highligthMock,
  upcommingMoreGames: [gamesMock[0]],
  freeGame: [gamesMock[0]],
  freeHighlight: highligthMock
} as HomeTemplateProps

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)
    // Espero que encontre o open menu no documento
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /upcomming/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument()

    // banner
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)
    // card game ( 5 sections com 1 card cada = 5x1 = 5)
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5)
    // highlight
    // expect(screen.getAllByText(/read dead is back!/i)).toHaveLength(3)
  })
})
