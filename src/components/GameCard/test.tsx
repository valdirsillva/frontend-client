import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/tests/helpers'
import GameCard from '.'

const props = {
  title: 'Population Zero',
  price: 'R$ 215,00',
  developer: 'Rockstart Games',
  img: '/img/red-dead-img.jpg'
}

describe('<GameCard />', () => {
  it('should render the correctly', () => {
    // Renderizar o card
    renderWithTheme(<GameCard {...props} />)

    // Verificar se o 'title' foi renderizado
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    // Verificar se o 'developer' foi renderizado
    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    // Verificar se o 'img' foi renderizado
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    // Verificar se o 'price' foi renderizado
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    // Renderizar o componente
    renderWithTheme(<GameCard {...props} />)

    const price = screen.getByText('R$ 215,00')
    // Preço não deve ter o line-through
    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
    // Preço não deve ter a cor cinza
    expect(price).not.toHaveStyle({ color: '#8F8F8F' })
    // Preço deve ter o background secundario
    expect(price).toHaveStyle({ backgroundColor: '#3CD3C1' })
  })

  it('should render a line-through in prine when promotional', () => {
    // Renderizar o componente ( COM o promotionalPrice )
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 15,00" />)

    // Preço deve ter o line-through (215)
    expect(screen.getByText('R$ 215,00')).toHaveStyle({
      textDecoration: 'line-through'
    })
    // Preço novo promocional não vai ter o line-through (15, 00)
    expect(screen.getByText('R$ 15,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })
})
