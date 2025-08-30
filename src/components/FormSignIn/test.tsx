import { screen } from '@testing-library/react'
import FormSignin from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<FormSignin />', () => {
  it('should render the form', () => {
    renderWithTheme(<FormSignin />)
    // Verifique o TextField email
    // Verifique o TextField password
    // Verifique o Button
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Entrar/i })).toBeInTheDocument()
  })

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignin />)

    expect(
      screen.getByRole('link', { name: /Esqueceu sua senha?/i })
    ).toBeInTheDocument()
  })

  it('should render the text and link to sign up', () => {
    renderWithTheme(<FormSignin />)

    // Verificar o texto
    // link
    expect(
      screen.getByRole('link', { name: /Cadastre-se/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/Ainda não tem uma conta\?/i)).toBeInTheDocument()
  })
})
