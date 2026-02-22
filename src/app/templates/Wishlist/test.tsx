import 'match-media-mock'

import { screen } from '@testing-library/react'
import gamesMock from '@/components/GameCardSlider/mock'
import highlightMock from '@/components/Highlight/mock'
import { renderWithTheme } from '@/utils/tests/helpers'

import WishlistTemplate from '.'

const props = {
  games: gamesMock,
  recommendedGames: gamesMock,
  recommendedTitle: 'You may like these games',
  recommendedHighlight: highlightMock
}

jest.mock('@/components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))

describe('<Wishlist />', () => {
  it('should render the heading', () => {
    renderWithTheme(<WishlistTemplate {...props} />)
    expect(screen.getByRole('heading', { name: /wishlist/i })).toBeInTheDocument()
    // Espero que os 6 jogos apareçam
    expect(screen.getAllByText(/Population Zero/i)).toHaveLength(6)
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
  })

  it('should render empty when there are no games', () => {
    renderWithTheme(
      <WishlistTemplate
        recommendedTitle='You may like these games'
        recommendedGames={gamesMock}
        recommendedHighlight={highlightMock}
      />
    )
    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /your wishlist is empty/i })).toBeInTheDocument()
  })
})