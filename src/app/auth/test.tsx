import { screen } from '@testing-library/react'
import Auth from './auth'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    renderWithTheme(
      <Auth title="Auth title">
        <input type="text" />
      </Auth>
    )

    // Verificar se tem 2 logos
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)

    // Verificar se contem o heading do banner
    expect(
      screen.getByRole('heading', {
        name: /Seus jogos favoritos em um só lugar/i
      })
    ).toBeInTheDocument()

    // Verificar se contem o title do content
    expect(
      screen.getByRole('heading', {
        name: /Auth title/i
      })
    ).toBeInTheDocument()

    // Verificar se contem o subtitle
    expect(
      screen.getByRole('heading', {
        name: /A WON é a melhor e mais completa plataforma de games./i
      })
    ).toBeInTheDocument()

    // Verificar se o children esta sendo renderizado
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
