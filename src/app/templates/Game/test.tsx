import { screen } from '@testing-library/react'

import { GameDetailsProps } from '@/components/GameDetails'
import galleryMock from '@/components/Gallery/mock'
import gameInfoMock from '@/components/GameInfo/mock'
import gameDetailsMock from '@/components/GameDetails/mock'
import gamesMock from '@/components/GameCardSlider/mock'
import highlightMock from '@/components/Highlight/mock'

import GameComponent, { GameTemplateProps } from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

const props: GameTemplateProps = {
  cover: 'bg-image.jpg',
  gameInfo: gameInfoMock,
  gallery: galleryMock,
  description: `<h1>Custom HTML</h1>`,
  details: gameDetailsMock as GameDetailsProps,
  upcomingGames: gamesMock,
  upcomingHighlight: highlightMock,
  recommendedGames: gamesMock
}

jest.mock('@/components/Menu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Menu" />
  }
}))

jest.mock('@/components/Gallery', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Gallery" />
  }
}))

jest.mock('@/components/GameDetails', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameDetails" />
  }
}))

jest.mock('@/components/GameInfo', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameInfo" />
  }
}))

jest.mock('@/components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))

describe('<GameComponent />', () => {
  it('should render the template with components', () => {
    renderWithTheme(<GameComponent {...props} />)
    expect(screen.getByTestId('Mock Gallery')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameDetails')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameInfo')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(2)
    expect(screen.getByText(/custom html/i)).toBeInTheDocument()
  })

  it('should not render the gallery if no images', () => {
    renderWithTheme(<GameComponent {...props} gallery={undefined} />)
    expect(screen.queryByTestId('Mock Gallery')).not.toBeInTheDocument()
  })

  it('should not render the gallery on mobile', () => {
    renderWithTheme(<GameComponent {...props} />)
    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyle({
      display: 'none'
    })

    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyleRule(
      'display',
      'block',
      {
        media: '(min-width:  768px)'
      }
    )
  })

  it('should render cover image', () => {
    renderWithTheme(<GameComponent {...props} />)
    expect(screen.getByRole('image', { name: /cover/i })).toHaveStyle({
      backgroundImage: `url(bg-image.jpg)`,
      height: '39.5rem'
    })
  })
})
