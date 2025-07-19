import { screen } from '@testing-library/react'

import Home from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home />)
    // Espero que encontre o open menu no documento
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument()
  })

  it('should render the sections', () => {
    renderWithTheme(<Home />)
    // Verificar se existes a sections News Upcomming e Free Games está no documento(foram renderizadas)

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
  })
})
