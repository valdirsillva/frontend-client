import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from '@/utils/tests/helpers'
import userEvent from '@testing-library/user-event'

import Dropdown from '.'

describe('<Dropdown />', () => {
  beforeEach(() => {
    const title = <h1 aria-label="toogle dropdown">Click here</h1>

    renderWithTheme(
      <Dropdown title={title} >
        <span>content</span>
      </Dropdown>
    )
  })

  it('should render the title', () => {
    expect(screen.getByLabelText(/toogle dropdown/)).toBeInTheDocument()
  })

  it('should handle open/close dropdown when clicking on overlay', async () => {
    const content = screen.getByText(/content/).parentElement!
    const overlay = content.nextElementSibling

    // Estado inicial
    expect(overlay?.getAttribute('aria-hidden')).toBe('true')

    // Abre o dropdown
    await userEvent.click(screen.getByLabelText(/toogle dropdown/i))

    await waitFor(() =>
      expect(overlay?.getAttribute('aria-hidden')).toBe('false')
    )

    // Fecha clicando no overlay
    await userEvent.click(overlay!)

    await waitFor(() =>
      expect(overlay?.getAttribute('aria-hidden')).toBe('true')
    )
  })
})