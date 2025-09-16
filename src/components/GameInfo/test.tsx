import { screen } from '@testing-library/react'

import GameInfo from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

const props = {
  title: 'My Game Title',
  description: 'My Game description',
  price: '210.00'
}

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: /my game title/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/\$210.00/)).toBeInTheDocument()
    expect(screen.getByText(/game description/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)
    // Esperar button add to cart
    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
    // Esperar button wishlist
    expect(
      screen.getByRole('button', { name: /Wishlist/i })
    ).toBeInTheDocument()
  })
})
