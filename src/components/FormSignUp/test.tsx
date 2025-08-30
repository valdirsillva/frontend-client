import { screen } from '@testing-library/react'

import FormSignUp from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<FormSignUp />', () => {
  it('should render the form', () => {
    renderWithTheme(<FormSignUp />)

    expect(screen.getByPlaceholderText(/Name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Criar conta/i })
    ).toBeInTheDocument()
  })

  it('should render the text and link to sign in', () => {
    renderWithTheme(<FormSignUp />)

    expect(screen.getByRole('link', { name: /Entrar/i })).toBeInTheDocument()
    expect(screen.getByText(/Já tem uma conta?/i)).toBeInTheDocument()
  })
})
