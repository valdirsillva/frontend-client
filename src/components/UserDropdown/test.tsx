import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/tests/helpers'
import userEvent from '@testing-library/user-event'
import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    renderWithTheme(<UserDropdown username='Jhon Doe' />)

    expect(screen.getByText(/Jhon Doe/i)).toBeInTheDocument()
  })

  it('should render the menu', async () => {
    renderWithTheme(<UserDropdown username='Jhon Doe' />)

    // Open menu
    await userEvent.click(screen.getByText(/Jhon Doe/i))

    expect(screen.getByRole('link', { name: /my profile/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })
})